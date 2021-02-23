import { choose } from '../helpers'

/*
params = {
  home: {
    type: 'planet',
    location:  'frontier'
  },
  characters: {
    childhood: {
      name: 'Bob',
      relationship: 'father',
      gender: 'male'
    }
  },
  adventure: {
    type: 'homeward', // Or 'rebellion', 'exploration', 'defence'
    scope: 'individual', // Or 'group', 'faction',
    location: 'Unknown Regions' // if it's an exploration
  }
}
*/

function callToAdventure(params) {
  const obj1 = q1(params)
  const obj2 = q2(obj1.params)
  const obj3 = q3(obj2.params)

  return {
    questions: [
      obj1.question,
      obj2.question,
      obj3.question
    ],
    params: obj3.params
  }
}

export {callToAdventure}

function q1(params) {
  let question

  if (params.adventure.type === 'rebellion') {
    params.adventure.oppressor = choose(['Regime', 'Authority', 'Imperium', 'Alliance', 'Dynasty', 'Administration'])
  } else if (params.adventure.type === 'exploration') {
    params.adventure.location = choose(['Unknown Regions', 'Outer Rim', 'Gateway Systems', 'Great Nebula', 'Abyss'])
  } // else if (params.adventure.type === 'defence') {
  //   if (params.adventure.scope === 'individual') {
  //     params.adventure.threat = choose(['Syndicate', 'Belters', 'System Mafia', 'Righteous'])
  //   } else {
  //     params.adventure.threat = choose(['Alpha', 'Incursors', 'Outland Raiders', 'Righteous'])
  //   }
  // }

  if (params.adventure.scope === 'faction') {
    if (params.adventure.type === 'rebellion') {
      params.adventure.yourFaction = choose(['Resistance', 'Uprising', 'Rebellion'])
    } else {
      params.adventure.yourFaction = choose(['Alliance', 'Collective', 'Senate'])
    }
  }

  if (params.adventure.type === 'homeward') {
    if (params.adventure.scope === 'individual') {
      question = "Do you remember where you were when you first learnt that you were so far from your original family?"
    } else if (params.adventure.scope === 'group') {
      question = 'Do you remember where you were when you first learnt about the exile your ancestors went through?'
    } else if (params.adventure.scope === 'faction') {
      question = `Do you remember where you were when you first heard about the guidestone and learnt that this sector was not the original home of the ${params.adventure.yourFaction}?`
    }
  } else if (params.adventure.type === 'rebellion') {
    if (params.adventure.scope === 'individual') {
      question = `When did you first learn about the injustices that eventually led to you taking a stand against the ${params.adventure.oppressor}?`
    } else if (params.adventure.scope === 'group') {
      question = `When did you first learn about the injustices perpetuated against your people by the ${params.adventure.oppressor}?`
    } else if (params.adventure.scope === 'faction') {
      question = `When did you first get a glimpse of the oppressive rule of the ${params.adventure.oppressor}?`
    }
  } else if (params.adventure.type === 'exploration') {
    if (params.adventure.scope === 'individual') {
      question = `Do you remember where you were when you first learnt about the ${params.adventure.location} that you would later be famous for exploring?`
    } else if (params.adventure.scope === 'group') {
      question = `Do you remember where you were when you first learnt that there was an expedition from your ${params.home.type} to the ${params.adventure.location}?`
    } else if (params.adventure.scope === 'faction') {
      question = `Do you remember where you were when you first learnt about the ${params.adventure.yourFaction}'s expedition to the ${params.adventure.location} which your ${params.home.type} was contributing to?`
    }
  } // else if (params.adventure.type === 'defence') {
  //   if (params.adventure.scope === 'individual') {
  //     question = `When did you first discover that your life was in danger from the ${params.adventure.threat}?`
  //   } else if (params.adventure.scope === 'group') {
  //     question = `When did you first hear rumours of the threat the posed to your ${params.home.type} by the ${params.adventure.threat}?`
  //   } else if (params.adventure.scope === 'faction') {
  //     question = `When did you first hear rumours of the threat the posed to the ${params.adventure.yourFaction} by the ${params.adventure.threat}?`
  //   }
  // }
  
  return {
    question, params
  }
}

function q2(params) {
  let question
  if (params.adventure.type === 'homeward') {
    question = `There's a big step between learning something like that and actually going to find your origins. What was it that really made you take this seriously?`
  } else if (params.adventure.type === 'exploration') {
    if (params.adventure.scope === 'individual') {
      question = 'Were you tempted to start planning an expedition there right away?'
    } else {
      question = 'Were you tempted to try and get involved with the expedition right away?'
    }
  } else if (params.adventure.type === 'rebellion') {
    question = 'Did you you see it as a fight worth getting involved in right away?'
  }

  return {
    question, params
  }
}

function q3(params) {
  const question = choose([
    'So in a sense it was luck - and bad luck at that! - which set you on your path?',
    'So this was very much your own calling?',
    'What was it they said that convinced you to try?',
    "Do you think you'd have tried if you hadn't been asked to?"
  ])

  return {
    question, params
  }
}
