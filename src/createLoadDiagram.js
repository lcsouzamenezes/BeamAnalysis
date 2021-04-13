import { Draw } from "./draw"
import { round } from "./utils"

export function createLoadDiagram(beam, nodes, spans) {
  // Spin up a canvas context. We'll use it to measure text width.
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = '12px Arial'
  // const w = ctx.measureText("loading").width

  beam.xDiagram = 90  // x coordinate at left end of diagram line, px
  beam.yLoad = 80    // y coordiate of load diagram
  beam.xScale = 300 / nodes[nodes.length - 1].x

  // Begin creating the SVG that will display the diagram.
  let svg = `<defs>
<style type="text/css">
  svg { background-color: #fff; }
  text, tspan { font: 12px Arial; }
  circle { stroke:#000; fill:#fff; }
  polygon { stroke:#000; fill: #000; fill-opacity:1.0 }
  line { stroke:#000; }
  path { stroke:#000; fill:#fff; fill-opacity: 0.0 }
</style>
</defs>
<text x='20' y='${beam.yLoad + 2}'>loads</text>
<text x='20' y='${beam.yLoad + 16}'>(${beam.SI ? 'kN, m' : 'kips, ft'})</text>
<path d='M${beam.xDiagram} ${beam.yLoad} h300' stroke-width='1.5px'/>\n`

  // Draw restraints
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].fixity !== "continuous") {
      svg += Draw.restraint(nodes[i], beam)
    }
  }

  // Write the span length below each span, but only if there are no loads in the way.
  for (let i = 0; i < spans.length; i++) {
    let okay = true // initialize
    if (spans[i].length * beam.xScale < 30) { continue }
    if (okay) {
      for (let j = 1; j < spans[i].segments.length; j++) {
        if (spans[i].segments[j].P[0] > 0) { okay = false; break }
      }
    }
    if (okay) {
      const x = beam.xDiagram + beam.xScale * (nodes[i].x + spans[i].length / 2)
      // eslint-disable-next-line max-len
      const unit = beam.SI ? "" : "′"
      // eslint-disable-next-line max-len
      svg += `<text x='${x}' y='${beam.yLoad + 15}' text-anchor='middle'>${spans[i].length}${unit}</text>\n`
    }
  }

  // Draw nodal loads
  for (let i = 0; i < nodes.length; i++) {
    const x = beam.xDiagram + beam.xScale * nodes[i].x
    if (Math.abs(nodes[i].P[0]) > 0) {
      svg += Draw.pointForce(x, beam.yLoad, nodes[i].P[0], nodes[i].fixity)
    }
    if (Math.abs(nodes[i].M[0]) > 0) {
      svg += Draw.pointMoment(x, beam.yLoad, nodes[i].M[0])
    }
  }

  // Draw span loads
  const wScale = 20 / beam.wMax
  let wPrev = 0
  let line = `<path d='M${beam.xDiagram} ${beam.yLoad}`
  for (let i = 0; i < spans.length; i++) {
    for (let j = 0; j < spans[i].segments.length; j++) {
      const seg = spans[i].segments[j]
      const x = beam.xDiagram + beam.xScale * seg.xOfLeftEnd
      if (Math.abs(seg.P[0]) > 0) {
        svg += Draw.pointForce( x, beam.yLoad, seg.P[0], "continuous")
      }
      if (Math.abs(seg.M[0]) > 0) {
        svg += Draw.pointMoment(x, beam.yLoad, seg.M[0])
      }
      // Draw a line segment for the service load.
      const xEnd = x + beam.xScale * seg.length
      if (seg.w1[0] !== wPrev) {
        line += `V${beam.yLoad + seg.w1[0] * wScale}` // vertical load discontinuiy.
      }
      const yEnd = beam.yLoad + seg.w2[0] * wScale
      line += `L${xEnd} ${yEnd}`
      wPrev =  seg.w2[0]
    }
  }
  if (wPrev !== 0) { line += `V${beam.yLoad}` }
  line += `'/>\n`
  svg += line

  // Write in the line load values
  let lastSegUniform = false
  let firstSegment
  let xFirstSegment = 0
  const segments = []
  for (let i = 0; i < spans.length; i++) {
    for (let j = 0; j < spans[i].segments.length; j++) {
      segments.push(spans[i].segments[j])
    }
  }
  const numSegments = segments.length
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    if (seg.w1[0] === seg.w2[0] && Math.abs(seg.w1[0]) > 0) {
      lastSegUniform = true
      if (i === 0 || seg.w1[0] !== segments[i - 1].w1[0] || lastSegUniform === false) {
        firstSegment = i
        xFirstSegment = beam.xScale * seg.xOfLeftEnd
      }
      if (i === numSegments - 1 || segments[i + 1].w1[0] !== segments[i + 1].w2[0]
        || seg.w1[0] !== segments[i + 1].w1[0]) {
        // This segment is the end of a uniform load.
        // Find a place to write the load value
        const lenSegLoad = i < numSegments - 1
          ? segments[i + 1].xOfLeftEnd - segments[firstSegment].xOfLeftEnd
          : beam.length - segments[firstSegment].xOfLeftEnd
        if (lenSegLoad * beam.xScale > 30) {
          let noBust = true // initialize the value
          const fudge = seg.w1[0] > 0 ? 10 : -4
          const yy = beam.yLoad + wScale * seg.w1[0] + fudge
          const str = round(Math.abs(seg.w1[0]), 3)
          // try the middle of the uniform load.  See if there is a point load there
          for (let j = firstSegment + 1; j <= i; j++) {
            if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
              - (segments[firstSegment].xOfLeftEnd + lenSegLoad / 2))) < 35) {
              if (segments[j].M[0] || segments[j].P[0] !== 0) {
                noBust = false
                break
              }
            }
          }
          if (noBust) {
            const x = beam.xDiagram + xFirstSegment + beam.xScale * lenSegLoad / 2
            svg += Draw.text(str, x, yy)
          } else {
            // try the 1/3 point
            noBust = true
            for (let j = firstSegment + 1; j <= i; j++) {
              if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
                - (segments[firstSegment].xOfLeftEnd + lenSegLoad / 3))) < 35) {
                if (segments[j].M[0] || segments[j].P[0] !== 0) {
                  noBust = false
                  break
                }
              }
            }
            if (noBust) {
              const x = beam.xDiagram + xFirstSegment + beam.xScale * lenSegLoad / 3 - 17
              svg += Draw.text(str, x, yy)
            } else {
              // try the 2/3 point
              noBust = true
              for (let j = firstSegment + 1; j <= i; j++) {
                if (beam.xScale * (Math.abs(segments[j].xOfLeftEnd
                  - (segments[firstSegment].xOfLeftEnd + 2 * lenSegLoad / 3))) < 5) {
                  if (segments[j].M[0] || segments[j].P[0] !== 0) {
                    noBust = false
                    break
                  }
                }
              }
              if (noBust) {
                const x = beam.xDiagram + xFirstSegment + beam.xScale * 2 * lenSegLoad / 3
                svg += Draw.text(str, x, yy)
              } else {
                if (i === 0) {
                  svg += Draw.text(str, beam.xDiagram  - 35, yy)
                }
              }
            }
          }
        }
      }
    } else {
      // We've got a distributed sloping load
      lastSegUniform = false
      const s = i === 0
        ? 0
        : (segments[i - 1].w2[0] - segments[i - 1].w1[0]) / segments[i - 1].length
      const s2 = (seg.w2[0] - seg.w1[0]) / seg.length
      const s3 = i === numSegments - 1
        ? 0
        : (segments[i + 1].w2[0] - segments[i + 1].w1[0]) / segments[i + 1].length
      if (Math.abs(s2 - s) > 0.05 || i === 0) {
        if (Math.abs(seg.w1[0]) > 0.05) {
          if (seg.length * beam.xScale > 20) {
            const str = round(Math.abs(seg.w1[0]), 3)
            const x = beam.xDiagram + beam.xScale * seg.xOfLeftEnd
            const fudge = seg.w1[0] > 0 ? 10 : -5
            const yy = beam.yLoad + wScale * seg.w1[0] + fudge
            svg += Draw.text(str, x, yy)
          }
        }
      }
      if (Math.abs(s2 - s3) > 0.05  || i === numSegments - 1
        || Math.abs(seg.w2[0] - segments[i + 1].w1[0]) > 0) {
        if (Math.abs(seg.w2[0]) > 0.05) {
          if (seg.length * beam.xScale > 20) {
            const str = round(Math.abs(seg.w2[0]), 3)
            const x = beam.xDiagram + beam.xScale * (seg.xOfLeftEnd + seg.length) - 30
            const fudge = seg.w2[0] > 0 ? 10 : -5
            const yy = beam.yLoad + wScale * seg.w2[0] + fudge
            svg += Draw.text(str, x, yy)
          }
        }
      }
    }
  }



  return svg
}
