import { choose } from "../helpers"

function theResurrection(p) {
  return [
    changeInPlan(p),
    newThreat(p),
    graspTheArmature(p),
    whatWasTheThreat(p),
    newPlan(p),
    fightTheEnemy(p),
    finalSacrifice(p),
    howDidItGo(p),
    success(p),
  ]
}

export {
  theResurrection
}

function changeInPlan() {
  return choose(
    `Why the change in plan?`,
    `What stopped you?`,
    `What happened? Where did you go instead?`
  )
}

function newThreat(p) {
  if (p.locations.resurrection === 'home') {
    return choose(
      `Why was ${p.locations.home.name} under threat? Did the ${p.organisations.evil} know that was your home?`,
      `Who told you that ${p.locations.home.name} was at risk?`,
      `Why was ${p.locations.home.name} threatened?`,
      `How did the ${p.organisations.evil} know to target ${p.locations.home.name}?`
    )
  } else if (p.locations.resurrection === 'threshold') {
    return choose(
      `Why was ${p.locations.threshold.name} under threat? Did ${p.organisations.evil} know what you had done there?`,
      `Why was a ${p.organisations.evil} fleet gathering at ${p.locations.threshold.name}?`,
      `Why did the ${p.organisations.evil} suddenly take an interest in ${p.locations.threshold.name}?`,
      `How did the ${p.organisations.evil} know to target ${p.locations.home.name}?`
    )
  } else if (p.locations.resurrection === 'climax') {
    return choose(
      `What happened to make you turn back to ${p.locations.climax.name}?`,
      `Why were the ${p.organisations.evil} gathering their forces at ${p.locations.climax.name}? Did you know what they were planning?`,
      `You sound like you had no choice. Why did you have to head back to ${p.locations.climax.name}?`,
    )
  }
}

function graspTheArmature(p) {
  if (p.armature === 'take risks') {
    return `It must have taken such courage to try that, in the face of such danger!`
  } else if (p.armature === 'tell the truth') {
    return `A mistake like that... the crew could have turned on you! What made you admit it?`
  }
}

function whatWasTheThreat(p) {
  return choose(
    `What awaited you on ${p.locations[p.locations.resurrection].name}?`,
    `What were the ${p.organisations.evil} doing when you arrived?`,
    `Was it clear what the ${p.organisations.evil}'s plan was on ${p.locations[p.locations.resurrection].name}?`
  )
}

function newPlan() {
  return choose(
    `So you needed a new plan! What did you have to do?`,
    `How could you possibly go about stopping that from happening?`,
    `Did you think you were going to be able to protect them? How?`,
    `Did you have a plan for how to stop it?`
  )
}


function fightTheEnemy(p) {
  if (p.plot === 'rebellion') {
    return `How did it feel to face off against ${p.characters.enemy.title} ${p.characters.enemy.name} one final time?`
  } else if (p.plot === 'lost homeworld') {
    return `Why was ${p.characters.enemy.title} ${p.characters.enemy.name} so determined to stop you returning with what you'd learnt?`
  } else if (p.plot === 'explore') {
    return `You set out to explore, not to fight! So how did you manage to defeat ${p.characters.enemy.title} ${p.characters.enemy.name}?`
  }
}

function finalSacrifice() {
  return choose(
    `Was ${choose('his', 'her', 'their')} sacrifice worth it?`,
    `That's an incredible sacrifice to make. How did you find the courage?`,
    `It's incredible that your team were willing to make that sacrifice. How did it play out?`
  )
}

function howDidItGo() {
  return choose(
    `What happened?`,
    `How did you manage that?`
  )
}

function success(p) {
  const options = {
    'rebellion': {
      'take risks': {
        'individual': `Your victory here, against all the odds and at huge personal risk, was truly awe-inspiring. Did you realise the impact that your actions were going to have in terms of inspiring the nascent rebellion?`,
        'organisation': `Without your actions, and without the risks that you and your team had to take, it seems likely that the ${p.organisations.good} might not have been able to defeat the ${p.organisations.evil} here. How did that feel?`
      },
      'tell the truth': {
        'individual': `Your victory here really opened people's eyes to the oppressive rule of the ${p.organisations.evil} and helped people see past their endless lies and propoganda. Did you realise that this was the start of the rebellion?`,
        'organisation': `Defeating the ${p.organisations.evil} here was a huge step forward for the ${p.organisations.good} and I think it really opened people's eyes to the truth about the ${p.organisations.evil}. How did it feel to be part of that?`
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
