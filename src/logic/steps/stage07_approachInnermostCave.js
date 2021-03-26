// import { choose, firstName, place } from '../helpers'

import { choose } from "../helpers"

  // const theApproach = [
  //   "But knowing what has to be done, that's not enough on it's own. You needed a plan.",
  //   "Why did the plan require you to travel to Theria?",
  //   "Not everyone had the courage to stick around for this. Did anyone you know leave at this point?",
  //   "How did it feel to lose someone like that? Did it test your commitment?",
  //   "Where did the preparation take place?",
  //   "Who was on the team for the final push?"
  // ]


function approachInnermostCave(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}

export {approachInnermostCave}

function q1(p) {
  if (p.plot === 'explore') {
    return `Can you tell us a little bit about why no-one had previously explored the ${p.locations.unexplored.name}?`
  } else if (p.plot === 'rebellion') {
    return `The ${p.organisations.evil} had a fearsome reputation and you were going to strike right at their heart. How did that feel?`
  } else if (p.plot === 'find home') {
    if (p.scope === 'individual') {
      return `You wouldn't expect learning about your family's origins to be such a challenge. Why was it so hard?`
    } else if (p.scope === 'organisation') {
      return `Why was tracing the path of your ancestors' exile so hard?`
    }
  }
}

function q2(p) {
  return choose(
    `Why was getting to ${p.locations.climax.name} so important?`,
    `How did you learn that what you were looking for was on ${p.locations.climax.name}?`,
    `Where did the plan to head for ${p.locations.climax.name} come from?`,
    `Who had the idea to aim for ${p.locations.climax.name}?`
  )
}

function q3(p) {
  if (p.scope === 'individual') {
    return `What was your plan?`
  } else {
    return `What was your part in the plan?`
  }
}

function q4() {
  return `Can you tell us a bit about your team?`
}

// How did it feel for someone else to not follow the armature?
function q5(p) {
  if (p.armature === 'take risks') {
    return `Couldn't they see that it was worth the risk?`
  } else if (p.armature === 'tell the truth') {
    return `How did it feel to be lied to like that?`
  }
}

function q6() {
  return choose(
    'And what about your ship? Was there a story there?',
    `The ship you flew in is now famous - but what's something about it not many people know?`
  )
}

// `If they'd ust accepted they weren't good at that`
// `Such a shame - if he's just admitted it wasn't for him that would have saved so much trouble`
// `Why did it take so long for him to realise this wasn't for him`
// `Do you think it would have been ok if ${choose('he', 'she', 'they')}'d have made it if they hadn't tried so hard to `
