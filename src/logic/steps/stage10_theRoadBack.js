import { choose } from "../helpers"

function theRoadBack(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p)]
}

export {theRoadBack}

function q1() {
  return `But of course actions have consequences... and things were far from over. Why weren't you able to turn back right away?`
}

// plot: choose('rebel', 'explore', 'find home'),
// armature: choose('loyalty', 'honesty', 'authenticity'),

function q2(p) {
  return choose(
    `Why weren't the ${p.organisations.good} able to help you any more?`,
    `Why was ${p.locations.home.name} under threat? Did the ${p.organisations.evil} know that was your home?`,
    `What would have the consequences of letting them leave ${p.locations.climax.name} have been?`,
    `What was ${p.characters.enemy.title} ${p.characters.enemy.name} doing there?`
  )
}

function q3(p) {
  const he = {
    'male': 'he',
    'female': 'she',
    'neutral': 'they'
  }
  const questions = {
    'rebel': {
      'loyalty': `You had every reason to believe ${p.characters.ally.name} was loyal... how could ${he[p.characters.ally.gender]} betray you?`,
      'honesty': `So everything ${p.characters.ally.name} told you was a lie? How did you find out?`,
      'authenticity': `ra`,
    },
    'explore': {
      'loyalty': `I understand that this wasn't an obvious choice but the crew said they'd support you whatever decision you made, so why did ${p.characters.ally.name} go behind your back?`,
      'honesty': `At what point did you find out that ${p.characters.ally.name} had lied to you and hadn't actually managed to do that?`,
      'authenticity': `ea`,
    },
    'find home': {
      'loyalty': `This discovery had such huge ramifications, not least for you personally... so surely ${p.characters.ally.name} must have known that you wouldn't have wanted them to do that?`,
      'honesty': `How did you find out that ${p.characters.ally.name} had lied to you?`,
      'authenticity': `fa`,
    }
  }

  return questions[p.plot][p.armature]
}

function q4(p) {
  if (p.scope === 'individual') {
    return `Did this cast your personal goals in a new light?`
  } else {
    return choose(
      `Did this change how you felt about the ${p.organisations.good}?`,
      `Did this affect how you saw your place in the ${p.organisations.good}?`
    )
  }
}

function q5() {
  return choose(`How did you overcome that?`)
}
