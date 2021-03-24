import { choose } from "../helpers"

function callToAdventure(p) {
  return [q1(p), q2(p), q3(p)]
}

export {callToAdventure}


// TODO: needs a better call to adventure for the 'explore' plt. Perhaps a mysterious phenomena, signal or transmission?
function q1(p) {
  if (p.plot === 'find home') {
    if (p.scope === 'individual') {
      return "Do you remember where you were when you first learnt that you were so far from your original family?"
    } else if (p.scope === 'society') {
      return 'Do you remember where you were when you first learnt about the exile your ancestors went through?'
    } else if (p.scope === 'civilisation') {
      return `Do you remember where you were when you first heard about the guidestone and learnt that this sector was not the original home of the ${p.organisations.good}?`
    }
  } else if (p.plot === 'rebellion') {
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
  } else if (p.plot === 'rebellion') {
    return choose(
      `What was it like to experience that first-hand?`,
      `What did you see? Did they know you witnesed that?`,
      `Who witnessed that? Was it someone close to you?`
    )
  }
}

// TODO: An extra question, 'What really drove your anger towards the Syndicate?' or something. A straightforward 'What was your call to adventure?' question.

function q3(p) {
  if (p.plot === 'find home') {
    return `What made you so determined to look for answers?`
  } else if (p.plot === 'explore') {
    return `What gave you this drive to explore?`
  } else if (p.plot === 'rebellion') {
    return `Why did this make you want to fight back?`
  }
}