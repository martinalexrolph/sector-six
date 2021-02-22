import { choose, firstName } from '../helpers'

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
    }
  },
  adventure: {
    type: 'homeward', // Or 'rebellion', 'exploration', 'defence'
    scope: 'individual', // Or 'group', 'faction', 'civilization'
  }
}
*/

function theOrdinaryWorld() {
  const initialParams = {
  }

  const obj1 = q1(initialParams)
  const obj2 = q2(obj1.params)
  const obj3 = q3(obj2.params)
  const obj4 = q4(obj3.params)
  const obj5 = q5(obj4.params)

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


export {theOrdinaryWorld}

function q1(params) {
  const start = choose([
    "Before all this kicked off,",
    "As a young adult,",
  ])

  const end = choose([
    "what was your life like?",
    "what did you do?",
  ])

  return {
    question: start + ' ' + end,
    params: params
  }
}

function q2(params) {
  params.home = {
    type: choose(['planet', 'fleet', 'station', 'asteroid']),
    location: choose(['core', 'frontier'])
  }

  const start = choose([
    "What was it like living on",
    "How was it growing up on",
  ])
  const options = {
    'planet': [
      `one of the ${params.home.location} worlds?`,
      `a planet in such a ${params.home.location === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
    'fleet': [
      `a ship travelling between the ${params.home.location} worlds?`,
      `a travelling fleet ${params.home.location === 'core' ? 'in the core' : 'on the frontier'}?`
    ],
    'station': [
      `a station orbiting a ${params.home.location} planet?`,
      `such a ${params.home.location === 'core' ? 'central' : 'remote'} station?`
    ],
    'asteroid': [
      `an asteroid base ${params.home.location === 'core' ? 'at the heart of civilisation' : 'at the edge of civilisation'}?`,
      `a terraformed asteroid in such a ${params.home.location === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
  }

  return {
    question: start + ' ' + choose(options[params.home.type]),
    params: params
  }
}

function q3(params) {
  return {
    question: "Was it a happy childhood? Who were your friends and family growing up?",
    params: params
  }
}

function q4(params) {

  const relationship = choose(['father', 'mother', 'uncle', 'aunt', 'friend', 'brother', 'sister'])
  let gender;
  if (['father', 'uncle', 'brother'].includes(relationship)) {
    gender = 'male'
  } else if (['mother', 'aunt', 'sister'].includes(relationship)) {
    gender = 'female'
  } else {
    gender = choose(['male', 'female', 'neutral'])
  }
  const name = firstName(gender)

  params.characters = {
    childhood: { name, relationship, gender }
  }

  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  return {
    question: `I sounds like you were especially close to your ${relationship} ${name}. Can you tell me a bit more about ${pronouns[gender]}?`,
    params: params
  }
}

function q5(params) {
  params.adventure = {
    type: choose(['homeward', 'rebellion', 'exploration', 'defence']),
    scope: choose(['individual', 'group', 'faction'])
  }

  let question
  switch (params.adventure.type) {
    case 'homeward':
      question = "Did you feel, growing up, like this was where you really belonged?"
      break
    case 'rebellion':
      question = "Were you rebellious, growing up?"
      break
    case 'exploration':
      question = "Were you much of an explorer growing up, or did you prefer to stay close to home?"
      break
    case 'defence':
      question = "Did you feel safe and secure growing up?"
      break
  }

  return { question, params }
}

