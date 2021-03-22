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
  return `What happened when you arrived at ${p.locations.climax.name}?`
}

function q2() {
  return `How did you ${choose('survive', 'break through', 'evade that')}?`
}

function q3() {
  return `What was the next step in the plan?`
}

function q4(p) {
  const options = [
    `Where did the signal lead you?`,
    `How did you manage to land?`
  ]
  if (p.plot === 'find home') {
    if (p.scope === 'personal') {
      options.push(`Did you find who you were looking for?`)
    } else {
      options.push(`Did this match up with the theories?`)
    }
  } else if (p.plot === 'rebel') {
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
  } else if (p.plot === 'rebel') {
    sentence1 = choose(
      `So this... this was key to their whole operation, right in front of you!`
    )
  } else if (p.plot === 'find home') {
    sentence1 = choose(
      `So right here... this was where you could finally get the answers you needed.`
    )
  }
  const sentence2 = choose(
    `What was the next step?`,
    `What did you have to do?`,
    `What was your goal?`
  )
  return `${sentence1} ${sentence2}`
}

function q6() {
  return choose(
    `Did you succeed?`,
    `Did you manage?`,
  )
}

function q7(p) {
  if (p.armature === 'honesty') {
    return `Thank goodness you admitted the truth! Otherwise the consequences could have been catastrophic!`
  // } else if (p.armature === 'authenticity') {
    // return `Thank goodness you stopped trying to emulate ${p.characters.ally.name}! Instead it sounds like what you did was something only you could have done.`
  } else if (p.armature === 'loyalty') {
    return `Thank goodness you stood by them! It must have been so tempting to abandon the mission at that moment.`
  }
}