import { choose, fullName, place } from '../helpers'

function theFirstThreshold(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p)]
}

export {theFirstThreshold}

function q1(p) {
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
    return `You were going out and seeking knowledge about your past that powerful people wanted to keep hidden. Were you scared?`
  }
}

function q2(p) {
  let action
  if (p.plot === 'rebellion') {
    action = `standing up to them`
  } else if (p.plot === 'explore') {
    action = `venturing into the ${p.locations.unexplored}`
  } else {
    if (p.scope === 'faction') {
      action = `learning about our origins`
    } else {
      action = `learning about your origins`
    }
  }
  return `Deep down, what was it that you really hoped to achieve by ${action}?`
}

function q3() {
  const spark = choose(['invasion', 'execution', 'murder'])
  const name = spark === 'invasion' ? place() : fullName()
  return `The ${spark} of ${name} was the spark that really lit the fire. What did you do when you heard the news?`
}

function q4(p) {
  return choose(
    `Why did you go to ${p.locations.threshold.name}?`,
    `How did you reach ${p.locations.threshold.name}?`,
  )
  // return `There's no backing out after something like that! Was it your choice to act at that moment, or did circumstances force your hand?`
}

// You failed to follow the armature in the past but now you've got a second chance
function q5(p) {
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


