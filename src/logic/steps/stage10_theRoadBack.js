import { choose } from "../helpers"

function theRoadBack(p) {
  return [leave(p), someoneFailedTheArmature(p), celebration(p), whatWereTheConsequences(p), whatDidYouWantToDoNext(p)]
}

export {theRoadBack}

function leave(p) {
  return choose(
    `How did you leave ${p.locations.climax.name}?`,
    `Was it easy to get off ${p.locations.climax.name}?`,
  )
}

// Another character failed to follow the armature, with serious consequences.
function someoneFailedTheArmature(p) {
  const questions = {
    'rebellion': {
      'take risks': `But this was so important... why did ${p.characters.ally.name} back out?`,
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

function celebration() {
  return choose(
    'Did you allow yourself a moment of celebration?',
    'Were the rest of the team as happy as you?',
    'What did you success mean to you and the team?',
    'Did you success give you a sense of confidence?'
  )
}

function whatWereTheConsequences(p) {
  return choose(
    `What stopped you from properly celebrating?`,
    `What was the first sign that things weren't over for you and your team?`,
    `Were you afraid that the ${p.organisations.evil} would be out for revenge?`,
    `Did you think the worst was behind you at this point?`
  )
}

// Todo: the road back should be a sort of fake-out ending. Things seem to be going well and then... bam!

// function q2(p) {
//   return choose(
//     `Why weren't the ${p.organisations.good} able to help you any more?`,
//     `Why was ${p.locations.home.name} under threat? Did the ${p.organisations.evil} know that was your home?`,
//     `What would have the consequences of letting them leave ${p.locations.climax.name} have been?`,
//     `What was ${p.characters.enemy.title} ${p.characters.enemy.name} doing there?`
//   )
// }

// function whatDidYouHaveToDo() {
//   return choose(
//     `What did you have to do?`,
//     `Where did you have to go?`,
//     `How did you try and prevent that?`
//   )
// }

// TODO: hard to link these two questions together, another question in between to add more context



function whatDidYouWantToDoNext() {
  return choose(
    `Where did you head next?`
  )
}

// function q4() {
//   return choose(
//     `What made this so difficult?`,
//     `What did you need to do?`,
//     `I don't imagine this was part of the plan, so how did you decide what to do next?`
//   )
// }

// function q5() {
//   return choose(
//     `How did you manage to ${choose('survive', 'break through', 'evade that')}?`,
//     `How did you succeed?`,
//     `How did you manage?`,
//     `Did you make it?`
//   )
// }
