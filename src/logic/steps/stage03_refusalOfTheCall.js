import { choose } from '../helpers'

function refusalOfTheCall(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}

export {refusalOfTheCall}

function q1(p) {
  if (p.plot === 'rebellion') {
    if (p.scope === 'individual') {
      return choose(
        `When did you first get the feeling that you might be able to fight the ${p.organisations.evil}, even if you had to do it alone?`,
        `How old were you when you first started seriously considering taking things into your own hands and rebelling against the rule of the ${p.organisations.evil}?`
      )
    } else {
      return choose(
        `When did you first learn about the rebellion that was starting to gather momentum?`,
        `How old were you when you first considered joining the nascent rebellion?`,
      )
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
  const options = {
    'rebellion': {
      'take risks': {
        'individual': `Even just discussing this was a huge risk. Did you tell anyone?`,
        'organisation': `Even just mentioning the ${p.organisations.good} could have put you at risk - did you tell anyone?`
      },
      'tell the truth': {
        'individual': `Did you tell your ${choose('family', 'friends')} the truth about what you were considering, or did you keep it a secret from them?`,
        'organisation': `Did you tell your ${choose('family', 'friends')} that you were considering joining the ${p.organisations.good}, or did you keep that a secret from them?`
      },
    },
    'find home': {
      'take risks': {
        'individual': '',
        'organisation': ''
      },
      'tell the truth': {
        'individual': '',
        'organisation': ''
      },
    },
  }

  return options[p.plot][p.armature][p.scope]
}

function q3(p) {
  const part1 = choose(
    `At least ${p.characters.refusal.name} was on your side!`,
    `I'm glad you were able to confide in ${p.characters.refusal.name} at least.`
  )
  if (p.scope === 'individual') {
    return choose(
      `${part1} Did you take action at that point?`,
      'Did you start making plans then?',
    )
  } else if (p.scope === 'organisation') {
    return choose(
      `${part1} Did you try and join up?`,
      `${part1} Did you try and make contact?`,
    )
  }
}

function q4(p) {
  switch (p.armature) {
    case 'take risks':
      return `So even with ${p.characters.refusal.name} by your side, you weren't willing to take that risk?`
    case 'tell the truth':
      return `Why did you lie to ${p.characters.refusal.name} about that?`
  }
}

function q5(p) {
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

function q6() {
  const persuader = choose(['book', 'person', 'accident', 'incident', 'article', 'film', 'experience', 'artefact'])
  return `What was it about this ${persuader} that gave you the push you needed?`
}
