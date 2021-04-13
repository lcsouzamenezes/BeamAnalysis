// Each of the methods in this module draws some item.

const circle = (x, y, radius) => `<circle cx='${x}' cy='${y}' r="${radius}"/>\n`

const restraint = (node, beam) => {
  let str = ""
  const x = beam.xDiagram + beam.xScale * node.x
  if (node.fixity === "hinge" || node.fixity === "proppedHinge") {
    str += circle(beam.xDiagram + beam.xScale * node.x, beam.yLoad, 4)
  }
  if (node.fixity === "pinned" || node.fixity === "proppedHinge") {
    // draw a triangle
    const y = node.fixity === "pinned" ? beam.yLoad + 0.75 : beam.yLoad + 4
    str += `<path d='M${x} ${y} l5 10 h-10 z' style='fill-opacity:1.0'/>\n`
  } else if (node.fixity === "fixed") {
    const xd = (node.x === 0 ? -1 : 1) * 7
    // eslint-disable-next-line max-len
    str += `<path d='M${x} ${beam.yLoad - 7} v14 m0 -14 l${xd} 7 M${x} ${beam.yLoad} l${xd} 7 M${x} ${beam.yLoad + 7} l${xd} 7'/>\n`
  } else if (node.fixity === "spring") {
    const y = beam.yLoad + .75
    str += `<path d='M${x} ${y} v3 l6 1.5 -12 3 12 3 -12 3 6 1.5 v3 m-6 0 h12'/>\n`
  }
  return str
}

const pointForce = (x, y, load, fixity, isReaction = false) => {
  const sgn = (load < 0 ? -1 : 1) // -1 is down
  const lengthAdjustment = fixity === "fixed"
    ? 7
    : fixity === "pinned" && isReaction
    ? 10
    : fixity === "proppedHinge" && isReaction
    ? 18
    : fixity === "hinge"
    ? 4
    : fixity === "spring" && isReaction
    ? 18
    : 0
  const length = 40 - lengthAdjustment
  // Reactions are drawn below the beam line. Imposed loads are drawn above the beam line.
  const yText = y + (isReaction ? 55 : -45)
  // Set x and y at the tip of the arrowhead
  if (isReaction) { y += lengthAdjustment + 0.75 } else { y -= 0.75 }
  if (sgn === -1 && isReaction) { y += length }
  if (sgn === 1 && !isReaction) { y -= length }
  // eslint-disable-next-line max-len
  const arrow = `<path d='M${x} ${y} l${sgn * 4} ${sgn * 8} h${-sgn * 3.5} v${sgn * (length - 8)} h${-sgn * 1} v${-sgn * (length - 8)} h${-sgn * 3}z' style='fill: #000; fill-opacity:1.0'/>\n`
  const text = `<text x='${x}' y='${yText}' text-anchor="middle">${String(load)}</text>\n`
  return arrow + text
}

const pointMoment = (x, y, load, isReaction = false) => {
  let isCounterClockwise = load >= 0 // = (load < 0 ? -1 : 1) // 1 is counter-clockwise
  load = Math.abs(load)
  let arrow
  let text
  if (!isReaction) {
    arrow = momentArrow(x, y, (isCounterClockwise ? 165 : 15), 150, isCounterClockwise)
    text = `<text x='${x}' y='${y - 25}' text-anchor="middle">${String(load)}</text>\n`
  } else {
    // The moment is a reaction
    isCounterClockwise = !isCounterClockwise
    if (x < 100) {  // left end
      arrow = momentArrow(x, y, (isCounterClockwise ? 260 : 100), 140, isCounterClockwise)
      text = `<text x='${x - 15}' y='${y - 15}' text-anchor='end'>${String(load)}</text>\n`
    } else {
      arrow = momentArrow(x, y, (isCounterClockwise ? 80 : 280), 140, isCounterClockwise)
      text = `<text x='${x + 16}' y='${y - 15}'>${String(load)}</text>\n`
    }
  }
  return arrow + text
}

const momentArrow = (xCtr, yCtr, thetaAtArrowPoint, subtendedAngle, isCounterClockwise) => {
  // Draw a circular arc with an arrowhead.
  // Find startAngle and endAngle: the begining and ending of the arc
  // theta = 0 at 3 o'clock.  theta is + for counterclockwise
  const startAngle = thetaAtArrowPoint * (Math.PI / 180)
  const sgn = isCounterClockwise ? 1 : -1
  const endAngle = startAngle - sgn * subtendedAngle * (Math.PI / 180)
  // sgn = 1 for counterclockwise, -1 for clockwise
  const diameter = 35
  const r = diameter / 2 // radius
  const arrowHeadLength = 8
  const startAnglePrime = startAngle - sgn * (2 * 0.9 * arrowHeadLength / diameter)
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

  let xStart = 0
  let yStart = 0
  let xEnd = 0
  let yEnd = 0
  if (sgn > 0) {
    xEnd = (xCtr + r * Math.cos(startAnglePrime)).toFixed(2)   // arrow end
    yEnd = (yCtr - r * Math.sin(startAnglePrime)).toFixed(2)
    xStart = (xCtr + r * Math.cos(endAngle)).toFixed(2)
    yStart = (yCtr - r * Math.sin(endAngle)).toFixed(2)
  } else {
    xStart = (xCtr + r * Math.cos(startAnglePrime)).toFixed(2)
    yStart = (yCtr - r * Math.sin(startAnglePrime)).toFixed(2)
    xEnd = (xCtr + r * Math.cos(endAngle)).toFixed(2)
    yEnd = (yCtr - r * Math.sin(endAngle)).toFixed(2)
  }

  const path = `<path d='M${xStart} ${yStart}A${r} ${r} 0 ${largeArcFlag} 0 ${xEnd} ${yEnd}'/>\n`

  // Draw the arrow head
  const xTip = xCtr + r * Math.cos(startAngle)
  const yTip = yCtr - r * Math.sin(startAngle)
  const alpha = startAngle - sgn * 100 / 180 * Math.PI // rotate by 100°
  const beta = 22.5 * Math.PI / 180    // angle subtended by half-arrowhead
  const x = Array(3).fill("")
  const y = Array(3).fill("")
  x[0] = xTip.toFixed(2)
  y[0] = yTip.toFixed(2)
  x[1] = (xTip + arrowHeadLength * Math.cos(alpha - beta)).toFixed(2)
  y[1] = (yTip - arrowHeadLength * Math.sin(alpha - beta)).toFixed(2)
  x[2] = (xTip + arrowHeadLength * Math.cos(alpha + beta)).toFixed(2)
  y[2] = (yTip - arrowHeadLength * Math.sin(alpha + beta)).toFixed(2)

  let polygon = "<polygon points='"
  for (let i = 0; i < x.length; i++) {
    polygon += `${x[i]} ${y[i]} `
  }
  polygon += "'/>\n"

  return path + polygon
}

const polyline = (x, y) => {
  let svg = `<path d='M${x[0]} ${y[0]}`
  for (let i = 1; i < x.length; i++) {
    svg += ` L${x[i]} ${y[i]}`
  }
  return svg + `'/>\n`
}

const text = (str, x, y, horizAlign) => {
  let svg = `<text x='${x}' y='${y}'>`
  if (horizAlign === "middle" || horizAlign === "right") {
    svg += `<tspan style='text-anchor: ${horizAlign}'>`
  }
  svg += str
  if (horizAlign === "middle" || horizAlign === "right") { svg += `</tspan>` }
  return svg + `</text>\n`
}

export const Draw = Object.freeze({
  pointForce,
  pointMoment,
  polyline,
  restraint,
  text
})

