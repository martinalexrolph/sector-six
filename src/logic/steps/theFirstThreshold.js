import { choose, fullName, place } from '../helpers'

/*
params = {
  home: {
    type: 'planet',
    location:  'frontier'
  },
  characters: {
    childhood: {
      name: 'Bob',
      relationship: 'father',
      gender: 'male'
    },
    refusal: {
      name: 'Tii',
      gender: 'neutral'
    },
    mentor: {
      name: 'Tii',
      gender: 'neutral'
    },
  },
  adventure: {
    type: 'homeward', // Or 'rebellion', 'exploration',
    scope: 'individual', // Or 'group', 'faction',
    spark: 'invasion', 'murder', 'execution' 
  },

}
*/

// const crossingTheThreshold = [
//   "How did it feel, setting foot in such a strange place looking for such wanted... well, criminals, at that point. Outlaws at the very least.",
//   "Tell me a bit more about the spaceport. I think a lot of people know it as it is now, but it must have been so different back then!",
//   "Who did you meet first?",
//   "So that really was a point of no return, quite literally in a sense!",
// ]

function theFirstThreshold(params) {
  const obj1 = q1(params)
  const obj2 = q2(obj1.params)
  const obj3 = q3(obj2.params)
  const obj4 = q4(obj3.params)
  const obj5 = q5(obj3.params)

  return {
    questions: [
      obj1.question,
      obj2.question,
      obj3.question,
      obj4.question,
      obj5.question,
    ],
    params: obj5.params
  }
}

export {theFirstThreshold}

function q1(params) {
  let question
  if (params.adventure.type === 'exploration') {
    question = `An expedition like this is a truly dangerous proposition. Were you scared?`
  } else if (params.adventure.type === 'rebellion') {
    const prefix = choose([
      'Taking a stand against',
      'Opposing',
      'Fighting for freedom from',
    ])
    question = `${prefix} the ${params.adventure.oppressor} was an incredibly dangerous thing to do. Were you scared?`
  } else if (params.adventure.type === 'homeward') {
    question = `You were going out and seeking knowledge about your past that powerful people wanted to keep hidden. Were you scared?`
  }

  return {
    question, params
  }
}

function q2(params) {
  let action
  if (params.adventure.type === 'rebellion') {
    action = `standing up to them`
  } else if (params.adventure.type === 'exploration') {
    action = `venturing into the ${params.adventure.location}`
  } else {
    if (params.adventure.scope === 'faction') {
      action = `learning about our origins`
    } else {
      action = `learning about your origins`
    }
  }
  let question = `Deep down, what was it that you really hoped to achieve by ${action}?`

  return {
    question, params
  }
}

function q3(params) {
  const spark = choose(['invasion', 'execution', 'murder'])
  const name = spark === 'invasion' ? place() : fullName()
  let question = `The ${spark} of ${name} was the spark that really lit the fire. What did you do when you heard the news?`
  // let question = `Once you had learnt what you needed to from ${params.characters.mentor.name}, what was your first move?`

  params.adventure.spark = spark

  return {
    question, params
  }
}

function q4(params) {
  let question = `There's no backing out after something like that! Was it your choice to act at that moment, or did circumstances force your hand?`

  return {
    question, params
  }
}

function q5(params) {
  let question = `Of course it wasn't just dangerous - there was something else in your way. Can you tell us about that?`

  return {
    question, params
  }
}


