import { choose, locationName } from '../helpers'

function theFirstThreshold(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p), q7(p)]
}

export {theFirstThreshold}

function q1(p) {
  if (p.plot === 'explore' || p.plot === 'lost homeworld') {
    if (p.scope === 'individual') {
      return `How did you find the lost homeworld was in the ${locationName()} ${choose('Cluster', 'Nebula', 'Rift')}? The ${p.organisations.evil} had tried so hard to keep that a secret.`
    } else {
      return choose([
        `How did you go about trying to make contact with the ${p.organisations.good}'s expedition leaders?`
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
  } else if (p.plot === 'lost homeworld') {
    const part1 = choose(
      `You were going out and seeking knowledge about your past that the ${p.organisations.evil} wanted to keep hidden.`,
      `The ${p.organisations.evil} wanted this part of your history buried forever.`
    )
    const part2 = choose(
      'Were you scared?',
      'Did you worry about the repercussions?',
      'Did that give you pause, or did it just make you more determined?'
    )
    return `${part1} ${part2}`
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
    `How did you get past?`,
    `Did you have to kill anyone to get through?`,
    `Were you injured?`
  )

  return `${part1} ${part2}`
}

// TODO: write this question!
function q7(p) {
  if (p.scope === 'individual') {
    return choose(
      `Phew! At least you managed to make contact, even if it was a close shave!`,
      `It sounds like you were lucky to make it! How did it feel, meeting them?`
    )
  } else {
    return choose(
      `Phew! At least you got what you came for, even if it was a close shave!`,
      `Phew! At least you managed to make contact, even if it was a close shave!`
    )
  }
}
