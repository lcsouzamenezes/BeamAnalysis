import { round } from "./utils"

const commas = /[, ]/g
const groupByThreeRegEx = /\B(?=(\d{3})+$)/g

export function convertUnits(beam, nodes, spans) {
  // This is called in the course of an analysis.
  // Convert from input units to meters and newtons.
  beam.EI = beam.E === 1 && beam.I === 1
    ? 1
    : beam.I === 0
    ? 1
    : beam.SI
    ? beam.E * 1000000 * beam.I * (0.001 ** 4) * 1000000
    : beam.E * 6894757.29316836 * beam.I * 0.0254 ** 4  // 22152.78

  const lengthFactor = beam.SI ? 1 : 0.3048
  const forceFactor = beam.SI ? 1000 : 4448.2216152605
  const momentFactor = beam.SI ? 1000 : 4448.2216152605 * 0.3048
  const lineLoadFactor = beam.SI ? 1000 : 4448.2216152605 / 0.3048
  const springFactor = beam.SI ? 1000 / 0.000001 : 4448.2216152605 / 0.0254

  beam.wMax *= lineLoadFactor
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].x *= lengthFactor  // convert to meters
    nodes[i].P = nodes[i].P.map(e => e * forceFactor)
    nodes[i].M = nodes[i].M.map(e => e * momentFactor)
    nodes[i].k *= springFactor
  }
  for (let i = 0; i < spans.length; i++) {
    spans[i].length *= lengthFactor
    for (let j = 0; j < spans[i].segments.length; j++) {
      spans[i].segments[j].xOfLeftEnd *= lengthFactor
      spans[i].segments[j].length *= lengthFactor
      spans[i].segments[j].P = spans[i].segments[j].P.map(e => e * forceFactor)
      spans[i].segments[j].M = spans[i].segments[j].M.map(e => e * momentFactor)
      spans[i].segments[j].w1 = spans[i].segments[j].w1.map(e => e * lineLoadFactor)
      spans[i].segments[j].w2 = spans[i].segments[j].w2.map(e => e * lineLoadFactor)
    }
  }
  beam.length *= lengthFactor
  beam.xScale = 300 / beam.length
}

const convert = (str, factor, precision = undefined) => {
  str = str.trim().replace(commas, "")
  if (str === "") { return "" }
  const num = Number(str) * factor
  return precision ? round(num, precision) : String(num)
}

export function unitToggle() {
  // The SI button has been clicked. Toggle the units in the input forms.
  const si = document.getElementById("SI").checked
  const lengthFactor = si ? 0.3048 : 1 / 0.3048
  const forceFactor = si ? 4.4482216152605 : 1 / 4.4482216152605
  const momentFactor = si ? 4.4482216152605 * 0.3048 : 1 / (4.4482216152605 * 0.3048)
  const pressureFactor = si ? 0.0044482216152605 / 0.0254 ** 2 : 0.0254 ** 2 / 0.0044482216152605
  const lineLoadFactor = si ? 4.4482216152605 / 0.3048 : 0.3048 / 4.4482216152605
  const springFactor = si ? 0.0044482216152605 / 0.0254 : 0.0254 / 0.0044482216152605
  const modulusFactor = si ? 0.0254 ** 4 * 1000000 : 1 / (0.0254 ** 4 * 1000000)

  // Change unit labels.
  document.getElementById("E_unit").textContent = si ? "MPa" : "ksi"
  const E = document.getElementById("E")
  E.value = convert(E.value, pressureFactor, 2).replace(groupByThreeRegEx, ",")
  document.getElementById("I_unit").textContent = si ? "mm⁴/10⁶" : "in⁴"
  const I = document.getElementById("I")
  I.value = convert(I.value, modulusFactor, 3)
  document.getElementById("k_unit").textContent = si ? "kN/mm" : "kips/in"
  const k = document.getElementById("k")
  k.value = convert(k.value, springFactor, 3)
  document.getElementById("spanUnit").textContent = si ? "meters" : "feet"

  const geometry = document.getElementById("geometry")
  const spans = geometry.getElementsByTagName("input");
  [...spans].forEach(e => {
    const str = e.value
    if (str.indexOf("x") === -1) {
      e.value = convert(str, lengthFactor, 4)
    } else {
      const num = /[\d.]+$/.exec(str)[0]
      const newNum = convert(num, lengthFactor, 4)
      e.value = e.value.slice(0, -1 * num.length) + newNum
    }
  });

  document.getElementById("fromUnit").textContent = si ? "meters" : "feet"
  document.getElementById("toUnit").textContent = si ? "meters" : "feet"
  for (let i = 0; i < 9; i++) {
    const shape = document.getElementById(`loadShape${i}`).value
    if (shape === "none") {
      continue
    } else if (shape === "w") {
      document.getElementById(`unit${i}`).textContent = si ? "kN/m" : "kips/ft"
      const w = document.getElementById(`amount${i}`)
      const str = w.value.trim()
      if (str.indexOf("self") > -1) {
        // Do nothing. It's a self-weight.
      } else if (str.indexOf(" ") > -1) {
        const ws = str.split(" ")
        const values = ws.map(e => convert(e, lineLoadFactor, 3))
        w.value = values.join(" ")
      } else {
        w.value = convert(str, lineLoadFactor, 3)
      }
    } else if (shape === "P") {
      document.getElementById(`unit${i}`).textContent = si ? "kN" : "kips"
      const P = document.getElementById(`amount${i}`)
      P.value = convert(P.value, forceFactor, 3)
    } else {
      document.getElementById(`unit${i}`).textContent = si ? "kN·m" : "kip·ft"
      const M = document.getElementById(`amount${i}`)
      M.value = convert(M.value, momentFactor, 3)
    }
    const from = document.getElementById(`from${i}`)
    from.value = convert(from.value, lengthFactor, 4)
    const to = document.getElementById(`to${i}`)
    to.value = convert(to.value, lengthFactor, 4)
  }
}
