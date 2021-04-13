import { DEAD, FLUID, LIVE, ROOFLIVE, HORIZ, SNOW, RAIN, WIND, EQ } from "./utils"

export function deflect(beam, nodes, spans, actions, deflections, liveLoadPatterns) {
  // We already have deflections for each load type on each span.
  // In this function, we superimpose the live load patterns and find the
  // maximum and minimum deflections.
  const [dmD, dmL, dmLr, dmS, dmF, dmH, dmR, dmW, dmE] = deflections
  const loadFactors = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  const numSpans = spans.length - 1
  let deflectionMax = 0
  let deflMaxCase = 0
  let deflectionMin = 0
  let deflMinCase = 0

  if (beam.EI === 1) { return [0, 0, 0, 0] }

  for (let i = 0; i < beam.numPatterns; i++) {
    const loadPattern = liveLoadPatterns[i]

    let dm = new Array(beam.numDegreesOfFreedom + 1).fill(0)
    if (beam.gotType[DEAD]) { dm = dm.map((e, i) => e + dmD[i]) }
    if (beam.gotType[FLUID]) { dm = dm.map((e, i) => e + dmF[i]) }
    if (beam.gotType[LIVE]) { dm = getLiveDM(dm, dmL, loadPattern, numSpans) }
    if (beam.gotType[HORIZ]) { dm = dm.map((e, i) => e + dmH[i]) }
    if (beam.gotType[ROOFLIVE]) { dm = getLiveDM(dm, dmLr, loadPattern, numSpans) }
    if (beam.gotType[SNOW]) { dm = getLiveDM(dm, dmS, loadPattern, numSpans) }
    if (beam.gotType[RAIN]) { dm = dm.map((e, i) => e + dmR[i]) }
    if (beam.gotType[WIND]) { dm = dm.map((e, i) => e + dmW[i]) }
    if (beam.gotType[EQ]) { dm = dm.map((e, i) => e + dmE[i]) }

    const mam = populateMAM(loadFactors, i, loadPattern, beam, nodes, spans, actions)

    let iDM = 0
    for (let iSpan = 1; iSpan <= numSpans; iSpan++) {
      for (let k = 0; k < spans[iSpan].segments.length; k++) {
        const seg = spans[iSpan].segments[k]
        let v1 = 0
        let vEnd = 0
        let m1 = 0
        let mEnd = 0
        seg.theta1 = new Array(beam.numPatterns).fill(0)
        seg.delta1 = new Array(beam.numPatterns).fill(0)
        let slopeEnd = 0
        let deflectionEnd = 0
        let deflectionMid = 0
        if (k === 0) {
          // This is the first segment in the span.
          v1 = -mam[5 * iSpan - 3]
          m1 = mam[5 * iSpan - 2]
        } else {
          v1 = vEnd + seg.Pf
          m1 = mEnd - seg.Mf
          seg.theta1[i] = slopeEnd
          seg.delta1[i] = deflectionEnd
        }

        // get enough deflection detail to pick a place for the deflection diagram
        vEnd = v1 + seg.w1f[combern] * seg.length
          + 0.5 * seg.slope[combern] * seg.length ** 2
        if (Math.abs(vEnd) < 0.00000000000001) { vEnd = 0 }
        mEnd = m1 + v1 * seg.length
          + 0.5 * seg.w1f[combern] * seg.length ** 2
          + seg.slope[combern] * seg.length ** 3 / 6
        if (Math.abs(mEnd) < 0.00000000000001) { mEnd = 0 }
        slopeEnd = seg.theta1[i] + (m1 * seg.length
          + 0.5 * v1 * seg.length ** 2
          + seg.w1f[i] * seg.length ** 3 / 6
          + seg.slope[i] * seg.length ** 4 / 24) / beam.EI

        deflectionMid = seg.delta1[i] + seg.theta1[i] * 0.5 * seg.length
          + (0.5 * m1 * (0.5 * seg.length) ** 2
          + v1 * (0.5 * seg.length) ** 3 / 6
          + seg.w1f[i] * (0.5 * seg.length) ** 4 / 24
          + seg.slope[i] * (0.5 * seg.length) ** 5 / 120) / beam.EI

        deflectionEnd = seg.delta1[i] + seg.theta1[i] * seg.length
          + (0.5 * m1 * seg.length ** 2 + v1 * seg.length ** 3 / 6
          + seg.w1f[i] * seg.length ** 4 / 24
          + seg.slope[i] * seg.length ** 5 / 120) / beam.EI

        if (seg.delta1[i] > deflectionMax) {
          deflectionMax = seg.delta1[i]
        }
        if (seg.delta1[i] < deflectionMin) {
          deflectionMin = seg.delta1[i]
          deflMaxCase = i
        }
        if (deflectionEnd > deflectionMax) {
          deflectionMax = deflectionEnd
          deflMaxCase = i
        }
        if (deflectionEnd < deflectionMin) {
          deflectionMin = deflectionEnd
          deflMinCase = i
        }
        if (deflectionMid > deflectionMax) {
          deflectionMax = deflectionMid
          deflMaxCase = i
        }
        if (deflectionMid < deflectionMin) {
          deflectionMin = deflectionMid
          deflMinCase = i
        }
      }
    }
  }

  return [deflectionMax, deflectionMin, deflMaxCase, deflMinCase]
}

const getLiveDM = (a, b, loadPattern, numSpans) => {
  if (loadPattern.length === 1) {
    a = a.map((e, i) => e  + b[i])
  } else {
    for (let k = 1; k <= numSpans; k++) {
      if (loadPattern.includes(k)) {
        a = a.map((e, i) => e + b[i][k])
      }
    }
  }
  return a
}
