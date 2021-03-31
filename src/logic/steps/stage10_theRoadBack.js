import { choose } from "../helpers"

function theRoadBack(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p)]
}

export {theRoadBack}

function q1() {
  return `But of course actions have consequences... and things were far from over. Why weren't you able to turn back right away?`
}

function q2(p) {
  return choose(
    `Why weren't the ${p.organisations.good} able to help you any more?`,
    `Why was ${p.locations.home.name} under threat? Did the ${p.organisations.evil} know that was your home?`,
    `What would have the consequences of letting them leave ${p.locations.climax.name} have been?`,
    `What was ${p.characters.enemy.title} ${p.characters.enemy.name} doing there?`
  )
}

// TODO: hard to link these two questions together, another question in between to add more context

// Another character failed to follow the armature, with serious consequences.
function q3(p) {
  const questions = {
    'rebellion': {
      'take risks': `This was so important to the cause... why did ${p.characters.ally.name} back out?`,
      'tell the truth': `So everything ${p.characters.ally.name} told you was a lie? How did you find out?`,
    },
    'explore': {
      'take risks': `I get that it was the safe option, but potentially at the cost of everything you had worked so hard for! Why do you think ${p.characters.ally.name} did that?`,
      'tell the truth': `At what point did you find out that ${p.characters.ally.name} had lied to you and hadn't actually managed to do that?`,
    },
    'lost homeworld': {
      'take risks': `This discovery had such huge ramifications... so surely ${p.characters.ally.name} could have seen that the risk was worth it?`,
      'tell the truth': `How did you find out that ${p.characters.ally.name} had lied to you?`,
    }
  }

  return questions[p.plot][p.armature]
}

// TODO: Not a natural question
function q4(p) {
  if (p.scope === 'individual') {
    return choose(
      `Did this make you see things differently?`,
      `Did this change your plans?`,
      `Did this change how you saw the situation?`
    )
  } else {
    return choose(
      `Did this change how you saw the situation?`,
      `Did this change your view of the ${p.organisations.good}?`,
      `Did this change how you felt about the ${p.organisations.good}?`,
      `Did this affect how you saw your place in the ${p.organisations.good}?`
    )
  }
}

// TODO: Sounds like therapy!
function q5() {
  return choose(
    `How did you overcome that?`,
    `How did you manage to ${choose('survive', 'break through', 'evade that')}?`
  )
}
