/*

Call to Adventure

First the character hears about or learns about the adventure,
then experiences something that makes them want to act

*/

import { choose } from "../helpers"

function callToAdventure(p) {
  return [q1(p), q2(p), q3(p)]
}

export {callToAdventure}


// TODO: needs a better call to adventure for the 'explore' plt. Perhaps a mysterious phenomena, signal or transmission?
function q1(p) {
  if (p.plot === 'lost homeworld') {
    if (p.scope === 'individual') {
      return "How did you first learn about the lost planet your ancestors once called home?"
    } else if (p.scope === 'organisation') {
      return `How did you first hear the rumours about the ${p.organisations.good}'s lost homeworld?`
    }
  } else if (p.plot === 'rebellion') {
    return `When did you first get a glimpse of the oppressive rule of the ${p.organisations.evil}?`
  } else if (p.plot === 'explore') {
    if (p.scope === 'individual') {
      return `Do you remember where you were when you first learnt about the ${p.locations.unexplored.name} that you would later be famous for exploring?`
    } else if (p.scope === 'organisation') {
      return `Do you remember where you were when you first learnt about the ${p.organisations.good}'s expedition to the ${p.locations.unexplored.name}?`
    }
  }
}

function q2(p) {
  if (p.plot === 'lost homeworld') {
    return choose(
      `What effect did seeing that artifact have on you?`,
      `Did you take the ${choose('report', 'article', 'book')} seriously?`,
      `Did you believe ${choose('his', 'her', 'their')} story?`
    )
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
  if (p.plot === 'lost homeworld') {
    return `What attracted you to this mystery?`
  } else if (p.plot === 'explore') {
    return `What gave you this drive to explore?`
  } else if (p.plot === 'rebellion') {
    return choose(
      `Why did this make you want to fight back?`,
      `How did this change your view of the ${p.organisations.evil}?`
    )
  }
}