/*
 * This file implements a rational number data type.
 * Each rational number, r, is held as an array containing two BigInts.
 * r[0] is the numerator and r[1] is the denominator.
 * Negative rationals have a negative numerator, not a negative denominator.
 *
 * The code in this file is heavily influenced by Chapter 5 of
 * __How JavaScript Works__ by Douglas Crockford
 */

const iZero = BigInt(0)
const iOne = BigInt(1)
const iTwo = BigInt(2)
const zero = [iZero, iOne]
const one = [iOne, iOne]
const two = [iTwo, iOne]
const pi = [BigInt(314159265358979323846264338327950288419716939937510582097494),
  BigInt(100000000000000000000000000000000000000000000000000000000000)]

const intAbs = i => i >= iZero ? i : BigInt(-1) * i  // absolute value of a BigInt

// eslint-disable-next-line max-len
const numberPattern = "^(-?)(?:([0-9]+)(?: ([0-9]+)\\/([0-9]+)|(?:\\.([0-9]+))?(?:e([+-]?[0-9]+))?)|(0x[0-9A-Fa-f]+))"
const numberRegEx = new RegExp(numberPattern)
// Capturing groups:
//    [1] sign
//    [2] integer part
//    [3] numerator of a mixed fraction
//    [4] denominator of a mixed fraction
//    [5] decimal fraction of significand, not including decimal point
//    [6] exponent of a number in scientific notation
//    [7] hexadecimal integer

const fromNumber = num => {
  // Convert a JavaScript Number to a rational.
  if (Number.isInteger(num)) {
    return [BigInt(num), iOne]
  } else {
    const parts = num.toExponential().match(numberRegEx)
    const decimalFrac = parts[5] || ""
    const exp = BigInt(parts[6]) - BigInt(decimalFrac.length)
    if (exp < 0) {
      return [BigInt(parts[1] + parts[2] + decimalFrac), BigInt(10) ** -exp]
    } else if (parts[4]) {
      const denominator = BigInt(parts[4])
      return normalize(
        [BigInt(parts[1] + parts[2]) * denominator + BigInt(parts[3]) ], denominator
      )
    } else {
      return normalize([BigInt(parts[1] + parts[2] + decimalFrac) * BigInt(10) ** exp, iOne])
    }
  }
}

const fromString = str => {
  // Convert an author's input string to a number.
  if (str === "") { return zero }
  const parts = str.match(numberRegEx)
  let r
  if (!parts) {
    // TODO: write an error message.
  }
  if (parts[5]) {
    // decimal
    const decimalFrac = parts[5] || ""
    const expoStr = parts[6] || "0"
    const exp = BigInt(expoStr) - BigInt(decimalFrac.length)
    const numerator = BigInt(parts[2] + decimalFrac)
    r = (exp < 0)
      ? [numerator, BigInt(10) ** -exp]
      : normalize([numerator * BigInt(10) ** exp, iOne])

  } else if (parts[4]) {
    // mixed fraction
    const denominator = BigInt(parts[4])
    const numerator = BigInt(parts[1] + parts[2]) * denominator + BigInt(parts[3])
    r = normalize([numerator, denominator])

  } else if (parts[2]) {
    // Integer
    r = [BigInt(parts[2]), iOne]

  } else if (parts[7]) {
    // hexadecimal
    r = [BigInt(str), iOne]

  } else {
    // TODO: return an error.
  }
  if (parts[1]) { r = negate(r) }
  return r
}

const gcdi = (a, b) => {
  // Greatest common divisor of two big integers
  a = intAbs(a)
  b = intAbs(b)
  while (b !== iZero) {
    const remainder = a % b
    a = b
    b = remainder
  }
  return a
}

const gcd = (m, n) => {
  // Greatest common divisor of two rationals
  if (!Rnl.isInteger(m) || !Rnl.isInteger(n)) { return "Bad GCD." }
  return [gcdi(m[0] / m[1], n[0] / n[1]), iOne]
}

const normalize = r => {
  const [numerator, denominator] = r
  if (denominator === iOne) { return r }
  const gcD = gcdi(numerator, denominator)
  return gcD === iOne ? r : [numerator / gcD, denominator / gcD]
}

const isRational = a => {
  return Array.isArray(a) && a.length === 2
    && typeof a[0] === "bigint" && typeof a[1] === "bigint"
}

const isInteger = r => r[1] === iOne || (r[0] % r[1]) === iZero

const isZero = r => r[0] === iZero

const isNegative = r => r[0] < iZero
const isPositive = r => r[0] > iZero

const negate = r => [BigInt(-1) * r[0], r[1]]

const abs = r => {
  const numerator = r[0] < iZero ? BigInt(-1) * r[0] : r[0]
  return [numerator, r[1]]
}

const increment = r => [r[0] + r[1], r[1]]

const decrement = r => [r[0] - r[1], r[1]]

const floor = r => {
  if (r[0] % r[1] === iZero) { return [r[0] / r[1], iOne] }
  return (r[0] >= iZero)
    ? [r[0] / r[1], iOne]
    : [r[0] / r[1] - iOne, iOne]
}

const ceil = r => {
  if (r[0] % r[1] === iZero) { return [r[0] / r[1], iOne] }
  return (r[0] >= iZero)
    ? [r[0] / r[1] + iOne, iOne]
    : [r[0] / r[1], iOne]
}

const add = (a, b) => {
  return a[1] === b[1]
    ? [a[0] + b[0], a[1]]
    : normalize([a[0] * b[1] + b[0] * a[1], a[1] * b[1]])
}

const subtract = (a, b) => {
  return (a[1] === b[1])
    ? [a[0] - b[0], a[1]]
    : normalize([a[0] * b[1] - b[0] * a[1], a[1] * b[1]])
}

const multiply = (a, b) => [a[0] * b[0], a[1] * b[1]]

const divide = (a, b) => {
  let numerator = a[0] * b[1]
  let denominator = a[1] * b[0]
  if (denominator < 0) {
    // Move the negative from the denominator to the numerator.
    numerator *= BigInt(-1)
    denominator *= BigInt(-1)
  }
  return [numerator, denominator]
}

const power = (a, b) => {
  if (b[0] === iZero) {
    return [iOne, iOne]
  } else {
    b = normalize(b)
    return isInteger(b)
      ? [a[0] ** b[0], a[1] ** b[0]]
      : isPositive(a) || greaterThan(b, one) || lessThan(b, negate(one))
      ? fromNumber(toNumber(a) ** toNumber(b))
      : areEqual(modulo(b, two), one)
      ? fromNumber(-1 * (-1 * toNumber(a)) ** toNumber(b))
      : "Bad root"
  }
}

const sqrt = r => fromNumber(Math.sqrt(toNumber(r)))

const exp = r => fromNumber(Math.exp(toNumber(r)))

const reciprocal = r => {
  let numerator = r[1]
  let denominator = r[0]
  if (denominator < 0) {
    numerator *= BigInt(-1)
    denominator *= BigInt(-1)
  }
  return [numerator, denominator]
}

const modulo = (a, b) => {
  const quotient = divide(normalize(a), normalize(b))
  return [intAbs(quotient[0] % quotient[1]), iOne]
}

const areEqual = (a, b) => {
  return (a[1] === b[1])
    ? a[0] === b[0]
    : a[0] * b[1] === a[1] * b[0]
}

const lessThan = (a, b) => {
  return (isNegative(a) !== isNegative(b))
    ? isNegative(a)
    : isNegative(subtract(a, b))
}

const greaterThan = (a, b) => {
  return (isPositive(a) !== isPositive(b))
    ? isPositive(a)
    : isPositive(subtract(a, b))
}

const lessThanOrEqualTo = (a, b) => lessThan(a, b) || areEqual(a, b)

const greaterThanOrEqualTo = (a, b) => greaterThan(a, b) || areEqual(a, b)

const max = (a, b) => greaterThan(a, b) ? [a[0], a[1]] : [b[0], b[1]]

const min = (a, b) => lessThan(a, b) ? [a[0], a[1]] : [b[0], b[1]]

const toNumber = r => {
  // Return a JavaScript Number
  const num = Number(r[0]) / Number(r[1])  // May be imprecise.
  if (!isNaN(num)) { return num }
  const numStr = toStringSignificant(r, 20)
  return Number(numStr)
}

const toStringSignificant = (r, numSignificantDigits) => {
  // Return a string rounded to numSignificantDigits.
  if (isZero(r)) {
    return "0"
  } else {
    const quotient = intAbs(r[0] / r[1])
    if (quotient > 0) {
      return toString(r, numSignificantDigits - String(quotient).length)
    } else {
      const inverseQuotientLength = String(intAbs(r[1] / r[0])).length
      return toString(r, inverseQuotientLength + numSignificantDigits - 1)
    }
  }
}

const toString = (r, numDigitsAfterDecimal) => {
  // Return a string rounded to numDigitsAfterDecimal.
  if (isZero(r)) {
    return "0"
  } else if (numDigitsAfterDecimal < 0) {
    const N = -numDigitsAfterDecimal
    const significand = toString(divide(r, [BigInt(10) ** BigInt(N), iOne]), 0)
    return significand + "0".repeat(N)
  } else {
    const [numerator, denominator] = normalize(r)
    const quotient = numerator / denominator
    let remainder = numerator % denominator
    let result = String(quotient)
    if (remainder === iZero && numDigitsAfterDecimal > 0) {
      result += "." + "0".repeat(numDigitsAfterDecimal)
    } else if (remainder !== iZero) {
      remainder = intAbs(remainder)
      const newNumerator = remainder * (BigInt(10) ** BigInt(numDigitsAfterDecimal))
      let fractus = newNumerator / denominator
      const residue = newNumerator % denominator
      if (numDigitsAfterDecimal === 0) {
        return (intAbs(iTwo * residue) >= intAbs(denominator))
          ? String(quotient + iOne)
          : result
      }
      if (intAbs(iTwo * residue) >= intAbs(denominator)) {
        fractus = fractus + iOne
      }
      result += "." + String(fractus).padStart(numDigitsAfterDecimal, "0")
    }
    return result
  }
}

export const Rnl = Object.freeze({
  fromNumber,
  fromString,
  normalize,
  isRational,
  isInteger,
  isZero,
  isNegative,
  isPositive,
  negate,
  abs,
  increment,
  decrement,
  exp,
  floor,
  ceil,
  add,
  subtract,
  multiply,
  divide,
  reciprocal,
  gcd,
  modulo,
  one,
  pi,
  power,
  sqrt,
  two,
  areEqual,
  lessThan,
  greaterThan,
  lessThanOrEqualTo,
  greaterThanOrEqualTo,
  max,
  min,
  numberPattern,
  toNumber,
  toString,
  toStringSignificant,
  zero
})
