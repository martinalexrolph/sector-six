/*

Call to Adventure

First the character hears about or learns about the adventure,
then experiences something that makes them want to act

*/

import { choose, them } from "../helpers"

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
    return choose(
      `When did you first get a glimpse of the oppressive rule of the ${p.organisations.evil}?`,
      `When did you first realise that the ${p.organisations.evil} were not benevolent rulers?`,
      `What was your first experience of the brutality of the ${p.organisations.evil}?`,
    )
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
      `Did they know you witnessed that?`,
      `That's a remarkable claim - what made you believe then when they said they witnessed that?`
    )
  }
}

function q3(p) {
  if (p.plot === 'rebellion') {
    return choose(
      `Was this your first encounter with ${p.characters.enemy.title} ${p.characters.enemy.name} of the ${p.organisations.evil}?`,
      `What did ${p.characters.enemy.title} ${p.characters.enemy.name} do to make you hate ${them(p.characters.enemy.gender)}, and the ${p.organisations.evil}, so much?`
    )
  }

  return ''
}
