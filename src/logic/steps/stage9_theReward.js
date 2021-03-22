import { choose } from '../helpers'



  // const theOrdeal = [
  //   "So you travelled to Theria. Was the journey eventful?",
  //   "What was your role when you arrived?",
  //   "How did that go?",
  //   "So despite the setback, ultimately the first step was complete. What next?",
  //   "Do you know why the First Hand was there? Had he been tipped off?",
  //   "How frustrating that he got away! But at least you got out alive too.",
  //   "And so, with the help of your squadmates, you finally came to the final goal of the mission. Talk me through what you had to do here?",
  //   "And with the Authority standing between you and your goal...",
  //   "That's such a price to pay for striking against the Authority. What was going through your mind at that moment?"
  // ]


function theReward(p) {
  return [q1(p), q2(p), q3(p), q4(p)]
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

function q3() {
  choose(
    `Can you explain why this was such a big deal?`,
    `What did you expect the consequences of this would be?`
  )
}

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