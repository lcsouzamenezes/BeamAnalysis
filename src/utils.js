// Constants
export const DEAD = 1
export const FLUID = 2
export const LIVE = 3
export const HORIZ = 4
export const ROOFLIVE = 5
export const SNOW = 6
export const RAIN = 7
export const WIND = 8
export const EQ = 9

export function error(msg) {
  const wrapper = document.getElementById("diagram-wrapper")
  wrapper.innerHTML = `<div style="height:225px">
   <div id='error'>
     <span style="color:firebrick">Error.&nbsp;&nbsp;&nbsp;</span>
     <span>${msg}</span>
   </div>
</div>`
}

export const round = (num, prec) => {
  // Round a number to prec significant digits.
  // Return a string. This is used for display of numbers on the diagram.
  const str = num.toPrecision(prec)
  if (str.indexOf("e") === -1) { return str }
  const pos = str.indexOf("e")
  const significand = Number.parseFloat(str.slice(0, pos))
  const exponent = Number.parseFloat(str.slice(pos + 1))
  return (significand * 10 ** exponent).toString()
}

export const clone = obj => {
  // Clone a JavaScript object.
  // That is, make a deep copy that does not contain any reference to the original object.
  // This function works if the object conatains only these types:
  //     boolean, number, bigint, string, null, undefined, date, array, object
  // Any other type, or non-tree structure (e.g., "this"), cannot be handled by this function.
  // This is a modified version of https://stackoverflow.com/a/728694

  // Handle boolean, number, bigint, string, null, or undefined
  // eslint-disable-next-line eqeqeq
  if (null == obj || "object" != typeof obj) { return obj }

  if (obj instanceof Date) { return new Date().setTime(obj.valueOf()) }

  if (Array.isArray(obj)) {
    const copy = []
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  if (typeof obj === "object") {
    const copy = Object.create(null)
    Object.entries(obj).forEach(([key, value]) => {
      copy[key] = clone(value)
    })
    return copy
  }

  throw new Error("Unable to clone obj! Its type isn't supported.")
}

