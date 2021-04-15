import { populateData } from "./populateData"
import { createLoadDiagram } from "./createLoadDiagram"
import { clear } from "./clear"
import { error } from "./utils"
import { readForm } from "./readForm"
import { doAnalysis } from "./analyze"
import { combine } from "./combine"
import { selectCases } from "./selectCases"
import { locateDiagrams } from "./locateDiagrams"
import { drawShearsMomentsAndDeflections } from "./drawDiagrams"
import { writeOutput } from "./writeOutput"
import { convertUnits, unitToggle } from "./units"

const wrapInImg = (diagram, yMax) => {
  // Insert the diagram into the page.

  // Wrap in an SVG tag.
  let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='450' height='${yMax}'>${diagram}</svg>`

  // We want to display an <img> element, not an <svg>.
  // That way, a user can right-click and copy the image to the clipboard.
  // So convert the svg into a data-uri that can be written inline into an <img> element.
  svg = svg.replace(/"/g, `'`) // Single quotation marks don't need to be escaped.
  svg = svg.replace(/\n/g, "") // Get rid of newlines.
  // Escape all the characters that are not allowed in a data-uri.
  const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g
  const uri = svg.replace(symbols, encodeURIComponent)

  // Insert the URI into an <img> tag.
  return `<img src="data:image/svg+xml;utf8,${uri}" alt="Beam Diagram" class="right">`

  // Write it into the document.
}

const showGeometry = _ => {
  // This function reads input and displays the load diagram.
  // It stops short of doing the analysis.
  const input = readForm()
  const [errorMsg, beam, nodes, spans] = populateData(input)
  if (errorMsg) {
    if (errorMsg === "No span lengths.") {
      document.getElementById("diagram-wrapper").innerHTML = ""
      return
    }
    error(errorMsg); return
  }
  const diagram = createLoadDiagram(beam, nodes, spans)
  const img = wrapInImg(diagram, beam.yLoad + 60)
  document.getElementById("diagram-wrapper").innerHTML = img
}

const analyze = _ => {
  // This is the main analysis function.

  // Get raw strings from the form.
  const input = readForm()

  // Validate input and populate data structures.
  const [errorMsg, beam, nodes, spans] = populateData(input)
  if (errorMsg) { error(errorMsg); return }

  // Create the first diagram. Show fixities, lengths, and loads.
  let diagram = createLoadDiagram(beam, nodes, spans)

  // Convert data to units of newtons and meters.
  convertUnits(beam, nodes, spans)

  // Do the linear algebra. For each load type, get member end actions and node displacements.
  const [actions, deflections] = doAnalysis(beam, nodes, spans)

  // Determine shear, moment, and deflection maximums and minimums by superimposing
  // the relevent load combinations and live load patterns.
  const extremes = combine(beam, nodes, spans, actions, deflections)

  // Decide which combinations get plotted.
  const cases = selectCases(spans)

  // Find the y coordinates for the shear, moment, and deflection diagrams.
  const yCoords = locateDiagrams(beam, nodes, extremes)
  const yMax = yCoords[6] // The overall height of the diagram.

  diagram += drawShearsMomentsAndDeflections(beam, nodes, spans, cases, yCoords, extremes)

  const img = wrapInImg(diagram, yMax)
  const html = writeOutput(img, input, beam, nodes, extremes)
  document.getElementById("diagram-wrapper").innerHTML = html

  document.getElementById("analyze").blur()
}

// A function for when a checkbox changes, e.g. "SI".
const updateDiagram = _ => {
  const wrapper = document.getElementById("diagram-wrapper")
  if (wrapper.children.length > 0) {
    analyze()
  } else {
    showGeometry()
  }
}

const updateLoadCombinations = _ => {
  // The Load Combinations selection just changed.
  const combo = document.getElementById("combinations").value.trim()
  document.getElementById("LLF").disabled = combo.indexOf("service") > -1
  if (combo.indexOf("ASCE") > -1) {
    document.getElementById("SDS").disabled = false
  } else {
    const sdsInput = document.getElementById("SDS")
    sdsInput.value = "0.0"
    sdsInput.disabled = true
  }
  document.getElementById("SDS").disabled = combo.indexOf("ASCE") === -1
  updateDiagram()
}

const updateLoadShape = n => {
  const shape = document.getElementById(`loadShape${n}`).value
  switch (shape) {
    case "w":
      document.getElementById(`unit${n}`).textContent = "kips/ft"
      document.getElementById(`from${n}`).disabled = false
      document.getElementById(`to${n}`).disabled = false
      break
    case "P":
      document.getElementById(`unit${n}`).textContent = "kips"
      document.getElementById(`from${n}`).disabled = false
      document.getElementById(`to${n}`).value = ""
      document.getElementById(`to${n}`).disabled = true
      break
    case "M":
      document.getElementById(`unit${n}`).textContent = "kip·ft"
      document.getElementById(`from${n}`).disabled = false
      document.getElementById(`to${n}`).value = ""
      document.getElementById(`to${n}`).disabled = true
      break
    default:
      document.getElementById(`amount${n}`).value = ""
      document.getElementById(`unit${n}`).textContent = ""
      document.getElementById(`from${n}`).value = ""
      document.getElementById(`from${n}`).disabled = true
      document.getElementById(`to${n}`).value = ""
      document.getElementById(`to${n}`).disabled = true
  }
  showGeometry()
}

const toggleUnits = _ => {
  unitToggle();
  updateDiagram();
}

const selectResults = _ => {
  const parent = document.getElementById("diagram-wrapper")
  window.getSelection().selectAllChildren(parent);
}

export {
  analyze,
  toggleUnits,
  clear,
  showGeometry,
  selectResults,
  updateLoadCombinations,
  updateDiagram,
  updateLoadShape
}
