// import { choose } from '../helpers'

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

function callToAdventure(p) {
  return [q1(p), q2(p)]
}

export {callToAdventure}

function q1(p) {
  if (p.plot === 'find home') {
    if (p.scope === 'individual') {
      return "Do you remember where you were when you first learnt that you were so far from your original family?"
    } else if (p.scope === 'society') {
      return 'Do you remember where you were when you first learnt about the exile your ancestors went through?'
    } else if (p.scope === 'civilisation') {
      return `Do you remember where you were when you first heard about the guidestone and learnt that this sector was not the original home of the ${p.organisations.good}?`
    }
  } else if (p.plot === 'rebel') {
    if (p.scope === 'individual') {
      return `When did you first learn about the injustices that eventually led to you taking a stand against the ${p.organisations.evil}?`
    } else if (p.scope === 'society') {
      return `When did you first learn about the injustices perpetuated against your people by the ${p.organisations.evil}?`
    } else if (p.scope === 'civilisation') {
      return `When did you first get a glimpse of the oppressive rule of the ${p.organisations.evil}?`
    }
  } else if (p.plot === 'explore') {
    if (p.scope === 'individual') {
      return `Do you remember where you were when you first learnt about the ${p.locations.unexplored.name} that you would later be famous for exploring?`
    } else if (p.scope === 'society') {
      return `Do you remember where you were when you first learnt that there was an expedition from your ${p.locations.home.type} to the ${p.locations.unexplored.name}?`
    } else if (p.scope === 'civilisation') {
      return `Do you remember where you were when you first learnt about the ${p.organisations.good}'s expedition to the ${p.locations.unexplored.name} which your ${p.locations.home.type} was contributing to?`
    }
  }

  return '-'
  
  
  // else if (params.adventure.type === 'defence') {
  //   if (params.adventure.scope === 'individual') {
  //     question = `When did you first discover that your life was in danger from the ${params.adventure.threat}?`
  //   } else if (params.adventure.scope === 'group') {
  //     question = `When did you first hear rumours of the threat the posed to your ${params.home.type} by the ${params.adventure.threat}?`
  //   } else if (params.adventure.scope === 'faction') {
  //     question = `When did you first hear rumours of the threat the posed to the ${params.adventure.yourFaction} by the ${params.adventure.threat}?`
  //   }
  // }
}

function q2(p) {
  if (p.plot === 'find home') {
    return `There's a big step between learning something like that and actually going to find your origins. What was it that really made you take this seriously?`
  } else if (p.plot === 'explore') {
    if (p.scope === 'individual') {
      return 'Were you tempted to start planning an expedition there right away?'
    } else {
      return 'Were you tempted to try and get involved with the expedition right away?'
    }
  } else if (p.plot === 'rebel') {
    return 'Did you you see it as a fight worth getting involved in right away?'
  }

  return '-'
}

// function q3() {
//   return choose(
//     'So in a sense it was luck - and bad luck at that! - which set you on your path?',
//     'So this was very much something that you stumbled upon on?',
//     'What was it they said that convinced you to try?',
//     "Do you think you'd have tried if you hadn't been asked to?"
//   )
// }
