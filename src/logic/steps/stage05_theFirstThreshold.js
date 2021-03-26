import { choose } from '../helpers'

function theFirstThreshold(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}

export {theFirstThreshold}

// TODO: Needs attention, especially for the explore/find home plots
function q1(p) {
  if (p.plot === 'explore' || p.plot === 'find home') {
    if (p.scope === 'individual') {
      return `What was the first challenge you had to overcome to prepare for your voyage?`
    } else {
      return choose([
        `How did you go about trying to make contact with the ${p.organisations.good} expedition leaders?`
      ])
    }
  } else if (p.plot === 'rebellion') {
    if (p.scope === 'individual') {
      return `What was the first thing you tried to do to undermine the ${p.organisations.evil}?`
    } else {
      return choose([
        `How did you go about trying to join up with the ${p.organisations.good}?`
      ])
    }
  }
}

function q2(p) {
  return choose(
    `Why did you have to go to ${p.locations.threshold.name}?`,
    `How did you reach ${p.locations.threshold.name}?`,
  )
}

// You failed to follow the armature in the past but now you've got a second chance
function q3(p) {
  const them = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  switch (p.armature) {
    case 'take risks':
      return `Do you think ${p.characters.refusal.name} expected you to be able to leave your comfort zone like that?`
    case 'tell the truth':
      return `Do you think ${p.characters.refusal.name} believed you? After all, you'd lied to ${them[p.characters.refusal.gender]} before.`
  }
}

function q4(p) {
  if (p.plot === 'explore') {
    return `An expedition like this is a truly dangerous proposition. Were you scared?`
  } else if (p.plot === 'rebellion') {
    const prefix = choose([
      'Taking a stand against',
      'Opposing',
      'Fighting for freedom from',
    ])
    return `${prefix} the ${p.organisations.evil} was an incredibly dangerous thing to do. Were you scared?`
  } else if (p.plot === 'find home') {
    return `You were going out and seeking knowledge about your past that the ${p.organisations.evil} wanted to keep hidden. Were you scared?`
  }
}

function q5(p) {
  return choose(
    `What happened on ${p.locations.threshold.name}?`,
    `How did things unfold on ${p.locations.threshold.name}?`,
  )
}

function q6(p) {
  const part1 = choose(
    `That sounds incredibly dangerous.`,
    `I'm amazed you survived!`,
    `Why were there so many ${p.organisations.evil} soldiers there?`,
  )

  const part2 = choose(
    `How did you evade detection?`,
    `How did you get past them?`,
    `How did you to get past?`,
    `Did you have to kill anyone to get through?`,
    `Were you injured?`
  )

  return `${part1} ${part2}`
}
