import { choose } from '../helpers'

function theReward(p) {
  return [q1(p), q2(p), /*q3(p)*/]
}

export {theReward}

function q1() {
  return `So close! What was the final step?`
}

function q2(p) {
  const rewards = [
    'had reached your goal'
  ]
  if (p.plot === 'rebel') {
    rewards.push(`could cripple the ${p.organisations.evil}, right here`)
    rewards.push(`could deal a huge blow to the ${p.organisations.evil}`)
  } else if (p.plot === 'find home') {
    rewards.push(`had the answer`)
    rewards.push(`knew`)
  } else if (p.plot === 'explore') {
    rewards.push(`had a true glimpse of what was out there`)
    rewards.push(`had made the ${p.locations.unexplored.name} safe to explore`)
  }
  return `Incredible! After enduring so much, finally you ${choose(rewards)}. How did that feel?`
}

// function q3() {
//   return choose(
//     `What did you expect the consequences of this would be?`
//   )
// }

// function q3() {
//   return choose(
//     `That being done... where did you go from there?`,
//     `What was the next step?`,
//     `Was there anything else you had to do?`
//   )
// }

// function q4() {
//   return choose(
//     `How did that go?`,
//     `Did you make it out?`,
//     `Did you manage?`
//   )
// }