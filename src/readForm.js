export function readForm() {
  const input = {}
  input.E = document.getElementById("E").value.trim()
  input.section = document.getElementById("section").value.trim()
  input.I = document.getElementById("I").value.trim()
  input.k = document.getElementById("k").value.trim()
  input.combinations = document.getElementById("combinations").value.trim()
  input.convention = document.getElementById("convention").checked
  input.SI = document.getElementById("SI").checked
  input.patterns = document.getElementById("patterns").checked
  input.LLF = document.getElementById("LLF").value.trim()
  input.SDS = document.getElementById("SDS").value.trim()

  input.node = [];
  input.spanLength = [];
  for (let i = 0; i < 7; i++) {
    input.node.push(document.getElementById("N" + String(i)).value.trim())
  }
  for (let i = 0; i < 6; i++) {
    input.spanLength.push(document.getElementById("L" + String(i)).value.trim())
  }

  input.loads = []
  for (let i = 0; i < 9; i++) {
    const load = {}
    const shape = document.getElementById(`loadShape${i}`).value
    if (shape === "none") { continue }
    load.shape = shape
    load.type = document.getElementById(`loadType${i}`).value
    load.amount = document.getElementById(`amount${i}`).value.trim()
    if (load.amount === "" || load.amount === "0") { continue }
    load.from = document.getElementById(`from${i}`).value.trim()
    load.to = document.getElementById(`to${i}`).value.trim()
    input.loads.push(load)
  }

  /* input.details = []
  for (let i = 0; i < 2; i++) {
    const detail = document.getElementById(`detail${i}`).value.trim()
    if (detail !== "" && !isNaN(detail)) {
      input.details = detail
    }
  } */

  return input
}
