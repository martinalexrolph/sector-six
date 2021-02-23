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
    },
    refusal: {
      name: 'Tii',
      gender: 'neutral'
    }
  },
  adventure: {
    type: 'homeward', // Or 'rebellion', 'exploration', 'defence'
    scope: 'individual', // Or 'group', 'faction'
  }
}
*/


// const refusalOfTheCall = [
//   "The early seeds of the Uprising movement were already active where you were living, so why didn't you heed their call?",
//   "Looking back, do you wish that you had done things differently, joined up then?",
//   "How did it feel, going back to your old life after all this?"
// ]

function refusalOfTheCall(params) {
  const obj1 = q1(params)
  const obj2 = q2(obj1.params)
  const obj3 = q3(obj2.params)
  const obj4 = q4(obj3.params)

  return {
    questions: [
      obj1.question,
      obj2.question,
      obj3.question,
      obj4.question
    ],
    params: obj4.params
  }
}

export {refusalOfTheCall}

function q1(params) {
  let question
  if (params.adventure.scope === 'individual') {
    if (params.adventure.type === 'rebellion') {
      question = `Why didn't you take a stand? What was holding you back?`
    } else {
      question = `Why didn't you start investigating? What was holding you back?`
    }
  } else {
    if (params.adventure.type === 'homeward') {
      question = `Why didn't you take action right away? What was holding you back?`
    } else {
      question = `Why didn't you get involved? What was holding you back?`
    }
  }

  return {
    question, params
  }
}

function q2(params) {
  const link = choose(['connection', 'relationship', 'encounter'])
  const gender = choose(['male', 'female', 'neutral'])
  const name = firstName(gender)
  const prefix = choose(['What changed in your', 'What was it about your'])
  const question = `${prefix} ${link} with ${name} that made you more reluctant?`

  params.characters.refusal = { gender, name }

  return {
    question, params
  }
}

function q3(params) {
  const question = 'But eventually you must have changed your mind. What happened?'

  return {
    question, params
  }
}

function q4(params) {
  const persuader = choose(['book', 'person', 'accident', 'incident', 'article', 'film', 'experience', 'artefact'])
  const question = `What was it about this ${persuader} that gave you the push you needed?`

  if (['book', 'film', 'article', 'artefact'].includes(persuader)) {
    params.objects.refusal = persuader
  }

  return {
    question, params
  }
}
