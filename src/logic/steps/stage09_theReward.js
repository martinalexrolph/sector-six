import { choose } from '../helpers'

function theReward(p) {
  return [q1(p), q2(p), /*q3(p)*/]
}

export {theReward}

// TODO: bit of weird question
function q1() {
  return `So close! What was the final step?`
}

function q2(p) {
  const rewards = [
    'had reached your goal'
  ]
  if (p.plot === 'rebellion') {
    rewards.push(`could cripple the ${p.organisations.evil}, right here`)
    rewards.push(`could deal a huge blow to the ${p.organisations.evil}`)
  } else if (p.plot === 'lost homeworld') {
    rewards.push(`had the answer`)
    rewards.push(`knew`)
  } else if (p.plot === 'explore') {
    rewards.push(`had a true glimpse of what was out there`)
    rewards.push(`had made the ${p.locations.unexplored.name} safe to explore`)
  }
  return choose(
    `Incredible! After enduring so much, finally you ${choose(rewards)}. How did that feel?`,
    `You'd overcome so much, and now you ${choose(rewards)}. What were you thinking at that moment?`,
  )
}

// Perhaps need to underline that the 