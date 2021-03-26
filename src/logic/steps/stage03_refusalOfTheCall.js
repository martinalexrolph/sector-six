import { choose } from '../helpers'

function refusalOfTheCall(p) {
  return [q1(p), q2(p), q3(p), q4(p)]
}

export {refusalOfTheCall}

function q1(p) {
  if (p.plot === 'rebellion') {
    if (p.scope === 'individual') {
      return `Why didn't you take a stand there and then? Were you able to?`
    } else {
      return `Did you know about the rebellion that was starting to gather momentum?`
    }
  } else if (p.plot === 'lost homeworld') {
    if (p.scope === 'individual') {
      return `Was it fear of the ${p.organisations.evil} that stopped you investigating further? Or was it something else?`
    } else {
      return `Did you know about the search expedition that was being planned?`
    }
  } else if (p.plot === 'explore') {
    if (p.scope === 'individual') {
      return `Why didn't you start investigating?`
    } else {
      return `Why didn't you get involved in the expedition? What was holding you back?`
    }
  }
}

function q2(p) {
  switch (p.armature) {
    case 'take risks':
      return `So even with ${p.characters.refusal.name} by your side, you weren't willing to take that risk?`
    case 'tell the truth':
      return `Why did you lie to ${p.characters.refusal.name} about that?`
  }
}

function q3(p) {
  let action = ''
  if (p.scope === 'individual') {
    if (p.plot === 'lost homeworld') {
      action = 'start planning an expedition to find your ancestral home'
    } else if (p.plot === 'explore') {
      action = 'start planning an expedition'
    } else if (p.plot === 'rebellion') {
      action = 'start fighting back'
    }
  } else {
    if (p.plot === 'lost homeworld') {
      action = `defy the ${p.organisations.evil} and join the search for your ancestral home`
    } else if (p.plot === 'explore') {
      action = 'join the expedition'
    } else if (p.plot === 'rebellion') {
      action = 'join the uprising'
    }
  }
  return `But we know, since we're having this conversation, that you did eventually ${action}. What changed?`
}

function q4() {
  const persuader = choose(['book', 'person', 'accident', 'incident', 'article', 'film', 'experience', 'artefact'])
  return `What was it about this ${persuader} that gave you the push you needed?`
}
