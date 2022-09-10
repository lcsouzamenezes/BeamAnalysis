import { round } from "./utils"
import { sections } from "./sections"

const fixity = str => str === "none" ? "—" : str

const loadInitial = ["", "D", "F", "L", "H", "Lr", "S", "R", "W", "E"]

export function writeOutput(img, input, beam, nodes, extremes) {
  let html = "<h4>Beam Analysis</h4>\n"
  html += `<p><strong>Input</strong>${img}</p>\n`
  html += "<pre><code>"
  if (input.E !== "" && input.E !== 1) {
    html += "E: " + input.E + (beam.SI ? " MPa" : " ksi") + "\n"
  }
  if (input.section && sections[input.section]) { html += "Section: " + input.section + "\n" }
  if (beam.I !== "" && beam.I !== 1) {
    const I = beam.SI && input.section && sections[input.section] ? round(beam.I, 3) : beam.I
    html += "I: " + I + (beam.SI ? " mm⁴/10⁶" : " in⁴" ) + "\n"
  }
  if (beam.k) { html += "k" + beam.k + (beam.SI ? " kN/mm" : " kips/in" ) + "\n" }
  html += "Beam: " + fixity(input.node[0])
  for (let i = 0; i < 6; i++) {
    const L = document.getElementById(`L${i}`).value.trim().replace(/ /g, "")
    if (L === "") { break }
    html += " " + L + (beam.SI ? "m" : "′")
    html += " " + fixity(input.node[i + 1])
  }
  html += "\n\n"

  for (let i = 0; i < 9; i++) {
    const shape = document.getElementById(`loadShape${i}`).value
    if (shape === "none") { continue }
    const type = document.getElementById(`loadType${i}`).value
    const amount = document.getElementById(`amount${i}`).value.trim()
    if (amount === "" || amount === "0") { continue }
    const unit = document.getElementById(`unit${i}`).textContent.trim()
    const from = document.getElementById(`from${i}`).value.trim()
    const to = document.getElementById(`to${i}`).value.trim()
    let str = shape
    if (type !== "none") { str += type }
    str += " = " + amount.replace(/ +/, " ") + " " + unit
    if (shape === "P" || shape === "M") {
      str += " at " + from + (beam.SI ? "m" : "′")
    } else if (from !== "" && from || to !== "") {
      str += "; " + (from === "" ? "0" : from) + (beam.SI ? "m" : "′")
      str += " "
      str += (to === "" ? "0" : to) + (beam.SI ? "m" : "′")
    }
    html += str + "\n"
  }
  html += "\n"

  html += "Load combinations: " + beam.comboName + "\n"
  if (beam.containsLive) {
    html += "Patterned live loads: " + (beam.doLiveLoadPatterns ? "yes" : "no") + "\n"
    if (beam.comboName !== "service") {
      html += "Live load factor: " + input.LLF + "\n"
    }
  }
  if (beam.comboName.indexOf("ASCE") > -1) {
    html += "SDS = " + beam.SDS + "\n"
  }
  html += "</code></pre>\n"

  let f = 0
  html += "<p><strong>Results</strong></p>\n"
  // Write the reactions.
  for (let i = 1; i <= nodes.length - 1; i++) {
    if (Math.abs(nodes[i].Pr[0]) !== 0) {
      f = 1 / (beam.SI ? 1000 : 4448.2216152605)
      let R = ""
      if (beam.comboName === "service") {
        R = round(f * nodes[i].Pr[0], 3)
      } else {
        R = "{"
        for (let j = 1; j < nodes[1].Pr.length; j++) {
          if (nodes[i].Pr[j] !== 0) {
            R += `"${loadInitial[j]}": ${round(f * nodes[i].Pr[j], 3)}; `
          }
        }
        R = R.slice(0, -2) + "}"
      }
      R +=  " '" + (beam.SI ? "kN" : "kips") + "'"
      html += `<p>
  <span class='hurmet-calc' data-entry="R_${i} = ${R.replace(/"/g, "&quot;")}">R<sub>${i}</sub> = ${R}</span>
</p>\n`
    }
    if (Math.abs(nodes[i].Mr[0]) !== 0) {
      f = 1 / (beam.SI ? 1000 : 4448.2216152605 * 0.3048)
      let M = ""
      if (beam.comboName === "service") {
        M = round(f * nodes[i].Mr[0], 3)
      } else {
        M = "{"
        for (let j = 1; j < nodes[1].Mr.length; j++) {
          if (nodes[i].Mr[j] !== 0) {
            M += `"${loadInitial[j]}": ${round(f * nodes[i].Mr[j], 3)}; `
          }
        }
        M = M.slice(0, -2) + "}"
      }
      M += " '" + (beam.SI ? "kN·m" : "k·ft") + "'"
      html += `<p>
  <span class='hurmet-calc' data-entry="M_${i} = ${M.replace(/"/g, "&quot;")}">M<sub>${i}</sub> = ${M}</span>
</p>\n`
    }
  }

  const [vMax, vMin, mMax, mMin, , , , , ] = extremes
  let sub = beam.comboName === "service" ? "max" : "u"

  // Write the shear absolute maximum
  f = 1 / (beam.SI ? 1000 : 4448.2216152605)
  let V = Math.max(vMax, Math.abs(vMin))
  V = round(f * V, 3) + " '" + (beam.SI ? 'kN' : 'kips') + "'"
  html += `<p>
   <span class='hurmet-calc' data-entry="V_${sub} = ${V}">V<sub>${sub}</sub> = ${V}</span>
</p>\n`

  // Write the moment maximum
  f = 1 / (beam.SI ? 1000 : 4448.2216152605 * 0.3048)
  let M = round(f * mMax, 3) + " '" + (beam.SI ? 'kN·m' : 'k·ft') + "'"
  html += `<p>
   <span class='hurmet-calc' data-entry="M_${sub} = ${M}">M<sub>${sub}</sub> = ${M}</span>
</p>\n`

  // Write the moment minimum.
  M = round(f * mMin, 3) + " '" + (beam.SI ? 'kN·m' : 'k·ft') + "'"
  sub = beam.comboName === "service" ? "min" : "uMin"
  html += `<p>
   <span class='hurmet-calc' data-entry="M_${sub} = ${M}">M<sub>${sub}</sub> = ${M}</span>
</p>\n`

  if (beam.EI !== 1) {
    f = beam.SI ? 1000 : (12 / 0.3048)
    const delta = round(f * beam.deflectionMax, 3) + " '" + (beam.SI ? 'mm' : 'in') + "'"
    html += `<p>
  <span class='hurmet-calc' data-entry="Δ = ${delta}">Δ = ${delta}</span>
</p>`
  }

  return html
}
