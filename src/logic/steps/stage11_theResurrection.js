import { choose } from "../helpers"

function theResurrection(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}

export {
  theResurrection
}

function q1(p) {
  return `But this journey had one more obstacle in store... can you tell us about what happened on ${p.locations.resurrection.name}?`
}

function q2(p) {
  const questions = [`What was a ${p.organisations.evil} fleet doing there?`]

  if (p.plot === 'find home' || p.plot === 'explore') {
    questions.push(`Why did the ${p.organisations.evil} try to stop you returning?`)
  } else if (p.plot === 'rebellion') {
    questions.push(`How did the ${p.organisations.evil} know to ambush you here?`)
  }

  return choose(questions)
}

function q3(p) {
  if (p.armature === 'take risks') {
    return `It must have taken such courage to try that, in the face of such danger!`
  } else if (p.armature === 'tell the truth') {
    return `A mistake like that... the crew could have turned on you! What made you admit it?`
  }
}

function q4() {
  return `What did you have to do to survive?`
}

function q5(p) {
  if (p.plot === 'rebellion') {
    return `How did it feel to face off against ${p.characters.enemy.title} ${p.characters.enemy.name} one final time?`
  } else if (p.plot === 'find home') {
    return `Why was ${p.characters.enemy.title} ${p.characters.enemy.name} so determined to stop you returning with what you'd learnt?`
  } else if (p.plot === 'explore') {
    return `You set out to explore, not to fight! So how did you manage to defeat ${p.characters.enemy.title} ${p.characters.enemy.name}?`
  }
}

function q6(p) {
  if (p.plot === 'rebellion') {
    return `How did you make it back to the ${p.organisations.good}?`
  } else if (p.plot === 'find home') {
    return `How did you make it back to ${p.locations.home.name}?`
  } else if (p.plot === 'explore') {
    return `How did you make it out of the ${p.locations.unexplored.name}?`
  }
}