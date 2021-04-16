export function clear() {
  document.getElementById("E").value = ""
  document.getElementById("section").value = ""
  document.getElementById("I").value = ""
  document.getElementById("k").value = ""
  document.getElementById("combinations").value = "service"
  document.getElementById("text-input").value = ""

  const geometry = document.getElementById("geometry")
  const nodes = geometry.getElementsByTagName("select");
  [...nodes].forEach(e => { e.value = "none" });
  const spans = geometry.getElementsByTagName("input");
  [...spans].forEach(e => { e.value = ""});

  for (let i = 0; i < 9; i++) {
    document.getElementById(`loadShape${i}`).value = "none"
    document.getElementById(`loadType${i}`).value = "none"
    document.getElementById(`amount${i}`).value = ""
    document.getElementById(`unit${i}`).textContent = ""
    document.getElementById(`from${i}`).value = ""
    document.getElementById(`from${i}`).disabled = true
    document.getElementById(`to${i}`).value = ""
    document.getElementById(`to${i}`).disabled = true
  }

/*  document.getElementById("detail0").value = ""
  document.getElementById("detail1").value = "" */

  document.getElementById("diagram-wrapper").innerHTML = ""
}
