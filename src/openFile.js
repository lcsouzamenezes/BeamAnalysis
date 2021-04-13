
export function readFile() {
  // Open a dialog box.
  const input = document.createElement('input')
  // Populate the dialog with a list of available file names.
  input.type = 'file'
  input.accept = ".beam"
  // Wait for the user to select a filename.
  input.onchange = _ => {
    const fileName = input.files[0]  // The file name selected by the user.
    // Spin up the JavaScript FileReader object to read the file.
    const reader = new FileReader()
    reader.onload = function(evt) {
      // We're now inside the event handler for after the file is loaded.

      // Strip the BOM, if any, from the beginning of the result string.
      let str = evt.target.result
      if (/^ï»¿/.test(str)) { str = str.substring(3) }

      const input = JSON.parse(str)

      document.getElementById("E").value = input.E
      document.getElementById("section").value = input.section
      document.getElementById("I").value = input.I
      document.getElementById("k").value = input.k
      document.getElementById("combinations").value = input.combinations
      document.getElementById("convention").checked = input.convention
//      document.getElementById("SI").checked = input.SI
      document.getElementById("patterns").checked = input.patterns
      document.getElementById("LLF").value = input.LLF
      document.getElementById("SDS").value = input.SDS
      if (input.combinations.indexOf("asce") > -1) {
        document.getElementById("LLF").disabled = false
        document.getElementById("SDS").disabled = false
      }

      for (let i = 0; i < 7; i++) {
        document.getElementById("N" + String(i)).value = input.node[i]
      }
      for (let i = 0; i < 6; i++) {
        document.getElementById("L" + String(i)).value = input.spanLength[i]
      }

      for (let i = 0; i < 8; i++) {
        document.getElementById("distLoadType" + String(i)).value = input.distrib.type[i];
        document.getElementById("distLoadSpan" + String(i)).value = input.distrib.span[i];
        document.getElementById("distLoad" + String(i)).value = input.distrib.w[i];
        document.getElementById("distLoadStart" + String(i)).value = input.distrib.start[i];
        document.getElementById("distLoadEnd" + String(i)).value = input.distrib.end[i];
        document.getElementById("distLoadComment" + i).value = input.distrib.comment[i];
      }

      for (let i = 0; i < 6; i++) {
        document.getElementById("pointLoadType" + String(i)).value = input.point.type[i];
        document.getElementById("pointLoadSpan" + String(i)).value = input.point.span[i];
        document.getElementById("P" + String(i)).value = input.point.P[i];
        document.getElementById("M" + String(i)).value = input.point.M[i];
        document.getElementById("x" + i).value = input.point.x[i];
        document.getElementById("pointLoadComment" + i).value = input.point.comment[i];
      }

      for (let i = 0; i < 2; i++) {
        document.getElementById("detailSpan" + String(i)).value = input.detail.span[i];
        document.getElementById("detail_x" + String(i)).value = input.detail.x[i];
      }

    }
    reader.readAsText(fileName)
  }
  input.click()
}
