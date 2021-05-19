import { sections } from "./sections"

const reE = /^ *E: *([\d,]+) *(?:ksi|MPa) *$/
const reSection = /^ *Section: * ([A-Z\d.]+) *$/
const reI = /^ * I: *([\d,.]+) *(?:in⁴|mm⁴\/10⁶) *$/
const rek = /^ *k = ([\d,.]+) *(?:kips\/in|kN\/mm) *$/
const reCombo = /^ *Load combinations: *(service|ASCE 7-16|ASCE 7-16 ASD|2018 IBC|2018 IBC ASD|2015 NBCC) *$/
const rePatterns = /^ *Patterned live loads: (yes|no) *$/
const reLLF = /^ *Live load factor: (1.0|0.5) *$/
const reSDS = /^ *SDS = ([\d.]*) *$/
const rew = /^ *w([DLWSEFHR]|Lr) *= (-?[\d.]+(?: *-?[\d.]+)?) *(?:kips\/ft|kN\/m)(?:; *([\d.]+) *(?:′|m))?(?: *(-?[\d.]+) *(?:′|m))? *$/
const reP = /^ *P([DLWSEFHR]|Lr) *= (-?[\d.]+) *(?:kips|kN)(?: *at *([\d.]+) *(?:′|m))? *$/
const reM = /^ *M([DLWSEFHR]|Lr) *= (-?[\d.]+) *(?:kip·ft|kN·m)(?: *at *([\d.]+) *(?:′|m))? *$/
const reBeam = /^ *Beam:((?:p|f|h|ph|s|—|(?:[\d]+x)?[\d.,]+[m′]| +)+)$/

export function populateInputFromText(str) {
  document.getElementById("SI").value = str.indexOf("MPa") > -1
  const lines = str.split(/\r?\n/g)

  let j = 0
  for (let i = 0; i < lines.length; i++) {
    if (reE.test(lines[i])) {
      document.getElementById("E").value = lines[i].match(reE)[1];
    } else if (reSection.test(lines[i])) {
      const name = lines[i].match(reSection)[1]
      if (sections[name]) {
        document.getElementById("section").value = name
      }
    } else if (reI.test(lines[i])) {
      document.getElementById("I").value = lines[i].match(reI)[1];
    } else if (rek.test(lines[i])) {
      document.getElementById("k").value = lines[i].match(rek)[1];
    } else if (reCombo.test(lines[i])) {
      document.getElementById("combinations").value = lines[i].match(reCombo)[1];
    } else if (reLLF.test(lines[i])) {
      document.getElementById("LLF").value = lines[i].match(reLLF)[1]
    } else if (reSDS.test(lines[i])) {
      document.getElementById("SDS").value = lines[i].match(reSDS)[1]
    } else if (rePatterns.test(lines[i])) {
      document.getElementById("patterns").value = (lines[i].match(rePatterns)[1] === "yes")
    } else if (rew.test(lines[i])) {
      const parts  = lines[i].match(rew)
      document.getElementById(`loadShape${j}`).value = "w"
      document.getElementById(`loadType${j}`).value = parts[1]
      document.getElementById(`amount${j}`).value = parts[2]
      if (parts[3]) {
        document.getElementById(`from${j}`).value = parts[3]
      }
      if (parts[4]) {
        document.getElementById(`to${j}`).value = parts[4]
      }
      j += 1
    } else if (reP.test(lines[i])) {
      const parts  = lines[i].match(reP)
      document.getElementById(`loadShape${j}`).value = "P"
      document.getElementById(`loadType${j}`).value = parts[1]
      document.getElementById(`amount${j}`).value = parts[2]
      if (parts[3]) {
        document.getElementById(`from${j}`).value = parts[3]
      }
      j += 1
    } else if (reM.test(lines[i])) {
      const parts  = lines[i].match(reM)
      document.getElementById(`loadShape${j}`).value = "M"
      document.getElementById(`loadType${j}`).value = parts[1]
      document.getElementById(`amount${j}`).value = parts[2]
      if (parts[3]) {
        document.getElementById(`from${j}`).value = parts[3]
      }
      j += 1
    } else if (reBeam.test(lines[i])) {
      const elements = lines[i].match(reBeam)[1].trim().split(/ +/g)
      let nodeCounter = 0
      let spanCounter = 0
      for (let k = 0; k < elements.length; k++) {
        switch (elements[k]) {
          case "p":
            document.getElementById("N" + nodeCounter).value = "p"
            nodeCounter += 1
            break
          case "f":
            document.getElementById("N" + nodeCounter).value = "f"
            nodeCounter += 1
            break
          case "h":
            document.getElementById("N" + nodeCounter).value = "h"
            nodeCounter += 1
            break
          case "ph":
            document.getElementById("N" + nodeCounter).value = "ph"
            nodeCounter += 1
            break
          case "—":
            document.getElementById("N" + nodeCounter).value = "none"
            nodeCounter += 1
            break
          case "s":
            document.getElementById("N" + nodeCounter).value = "s"
            nodeCounter += 1
            break
          default: {
            document.getElementById("L" + spanCounter).value = elements[k].replace(/[m′]/, "")
            spanCounter += 1
          }
        }
      }
    }
  }
}
