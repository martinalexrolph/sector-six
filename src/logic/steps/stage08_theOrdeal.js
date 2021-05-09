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


function theOrdeal(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p), q7(p)]
}

export {theOrdeal}

function q1(p) {
  return choose(
    `What happened when you arrived at ${p.locations.climax.name}?`,
    `Who led the way to ${p.locations.climax.name}?`,
    `How did you approach ${p.locations.climax.name}?`,
    `Was ${p.locations.climax.name} hard to get to?`
  )
}

function q2() {
  return choose(
    `How did you ${choose('survive', 'break through', 'evade that')}?`,
    `What did you have to do to ${choose('get past', 'slip through', 'survive')}?`
  )
}

function q3() {
  return choose(
    `What was the next step in the plan?`,
    `Once you were there, what was the next step?`,
    `Where did you need to go from there?`,
    `What did you have to do then?`,
    `Did the next step go to plan?`
  )
}

function q4(p) {
  const options = [
    `Where did the signal lead you?`,
    `How did you manage to land?`
  ]
  if (p.plot === 'lost homeworld') {
    if (p.scope === 'individual') {
      options.push(`Did you find what you were looking for?`)
    } else {
      options.push(`Did your findings match up with the theories?`)
    }
  } else if (p.plot === 'rebellion') {
    options.push(`How was the base laid out?`)
    options.push(`What was your target?`)
  } else if (p.plot === 'explore') {
    options.push(`Where was the energy field coming from?`)
    options.push(`Had you ever seen a ${choose('star', 'planet', 'structure')} like that before?`)
  }
  return choose(options)
}

function q5(p) {
  let sentence1 = ''
  if (p.plot === 'explore') {
    sentence1 = choose(
      `So this... this was the real reason why no-one had ever successfully ventured into the ${p.locations.unexplored.name}.`
    )
  } else if (p.plot === 'rebellion') {
    sentence1 = choose(
      `You were right at the beating heart of the ${p.organisations.evil}!`,
      `So this... this was key to their whole operation, right in front of you!`,
      `Here was where you could really strike back!`
    )
  } else if (p.plot === 'lost homeworld') {
    sentence1 = choose(
      `So right here... this was where you could finally get the answers you needed.`,
      `How incredible, to be the first people to set foot in this place for so long!`
    )
  }
  const sentence2 = choose(
    `What was the next step?`,
    `What did you have to do next?`,
    `What was the plan?`,
  )
  return `${sentence1} ${sentence2}`
}

function q6() {
  return choose(
    `How did you succeed?`,
    `How did you manage?`,
    `Did you make it?`
  )
}

// Good thing you followed the armature
function q7(p) {
  if (p.armature === 'tell the truth') {
    return `Thank goodness you admitted the truth! Otherwise, the consequences could have been catastrophic!`
  } else if (p.armature === 'take risks') {
    return `Good thing you took that risk! Otherwise, I can't imagine you could have succeeded.`
  }
}