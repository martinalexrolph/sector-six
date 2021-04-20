import { choose } from '../helpers'

function theReward(p) {
  return [q1(p)]
}

export {theReward}

function q1(p) {
  if (p.plot === 'rebellion') {
    return choose(
      `Incredible! After enduring so much, how did it feel to cripple the ${p.organisations.evil}'s operation?`,
      `You'd overcome so much, and now your actions had dealt a huge blow to the ${p.organisations.evil}. What were you thinking at that moment?`,
      `After everything you'd endured, how did it feel to hit back at the ${p.organisations.evil} in such a powerful way?`,
    )
  }
    
  const rewards = [
    'had reached your goal'
  ]
  if (p.plot === 'lost homeworld') {
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
