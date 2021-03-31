import { choose } from "../helpers"

function theResurrection(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}

export {
  theResurrection
}

// TODO: Sounds forced/unnatural. If it's a rebellion, perhaps go back to the home planet/mmon/whatever rather than a new location?
function q1(p) {
  return `But this journey had one more obstacle in store... can you tell us about what happened on ${p.locations.resurrection.name}?`
}

function q2(p) {
  const questions = [`What was a ${p.organisations.evil} fleet doing there?`]

  if (p.plot === 'lost homeworld' || p.plot === 'explore') {
    questions.push(`Why did the ${p.organisations.evil} try to stop you returning?`)
  } else if (p.plot === 'rebellion') {
    questions.push(`How did the ${p.organisations.evil} know to ambush you here?`)
  }

  return choose(questions)
}

// TODO: needs another question here, otherwise the previous answer gets too long

function q3(p) {
  if (p.armature === 'take risks') {
    return `It must have taken such courage to try that, in the face of such danger!`
  } else if (p.armature === 'tell the truth') {
    return `A mistake like that... the crew could have turned on you! What made you admit it?`
  }
}

// TODO: sounds like foraging for food! Perhaps just 'How did you survive?'

function q4() {
  return `What did you have to do to survive?`
}

// TODO: need to make more of a thing of the enemy earlier in the game so that they are actually a nemesis
function q5(p) {
  if (p.plot === 'rebellion') {
    return `How did it feel to face off against ${p.characters.enemy.title} ${p.characters.enemy.name} one final time?`
  } else if (p.plot === 'lost homeworld') {
    return `Why was ${p.characters.enemy.title} ${p.characters.enemy.name} so determined to stop you returning with what you'd learnt?`
  } else if (p.plot === 'explore') {
    return `You set out to explore, not to fight! So how did you manage to defeat ${p.characters.enemy.title} ${p.characters.enemy.name}?`
  }
}

// TODO: that's not going to work if it's just an individual as they won't know who the good guys are. And I can see it being a potential continuity problem. Maybe just drop the question?
function q6(p) {
  if (p.plot === 'rebellion') {
    return `How did you make it back to the ${p.organisations.good}?`
  } else if (p.plot === 'lost homeworld') {
    return `How did you make it back to ${p.locations.home.name}?`
  } else if (p.plot === 'explore') {
    return `How did you make it out of the ${p.locations.unexplored.name}?`
  }
}