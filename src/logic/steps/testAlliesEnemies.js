import { choose, firstName, place } from '../helpers'

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

// const testsAlliesEnemies = [
//   '-=-=-=-',
//   "Iris? As in, the same Iris that led the assault on Artik IV?",
//   "What was it like meeting her? Did you get a sense at the time of the massive role she would play?",
//   "What was your first mission?",
//   "Can you tell me a little bit about the people who you went on that mission with?",
//   "What happened? Did you achieve your goal?",
//   "He sounds like a nasty piece of work!",
//   "Crazy that on your first mission you cross paths with the First Hand of the Authority... I don't envy you!",
//   "Tell me about another of your missions.",
//   "What was going through your head at that moment of betrayal?",
//   "Did you get a sense of any weaknesses as a result of this?",
//   "So by this point, you really knew what had to be done to take down the Authority."
// ]

function testsAlliesEnemies(params) {
  const obj1 = q1(params)
  const obj2 = q2(obj1.params)
  const obj3 = q3(obj2.params)
  const obj4 = q4(obj3.params)
  const obj5 = q5(obj4.params)
  const obj6 = q6(obj5.params)
  const obj7 = q7(obj6.params)
  const obj8 = q8(obj7.params)
  const obj9 = q9(obj8.params)
  const obj10 = q10(obj9.params)

  return {
    questions: [
      obj1.question,
      obj2.question,
      obj3.question,
      obj4.question,
      obj5.question,
      obj6.question,
      obj7.question,
      obj8.question,
      obj9.question,
      obj10.question,
    ],
    params: obj10.params
  }
}

export {testsAlliesEnemies}

function q1(params) {
  console.log(params);

  let question = ''
  if (params.adventure.type === 'exploration' || params.adventure.type === 'homeward') {
    question = choose([
      `What was the first challenge you had to overcome to prepare for your voyage?`
    ])
  } else if (params.adventure.type === 'rebellion') {
    if (params.adventure.scope === 'personal') {
      question = `What was the first thing you tried to do to undermine the ${params.adventure.oppressor}?`
    } else {
      params.adventure.rebels = choose(['Rebellion', 'Uprising', 'Resistance', 'Union'])
      question = choose([
        `Was it hard to join up with the ${params.adventure.rebels}?`
      ])
    }
  }

  return {
    question, params
  }
}

function q2(params) {
  const gender = choose(['male', 'female', 'neutral'])
  const name = firstName(gender)
  params.characters.allies = [{ name, gender }]

  let question = `What did ${params.characters.allies[0].name} bring to the table?`

  return {
    question, params
  }
}

function q3(params) {
  let question = 'How did you meet?'

  return {
    question, params
  }
}

function q4(params) {
  let question = 'How did you overcome that?'

  return {
    question, params
  }
}

function q5(params) {
  let question = 'What was the next thing you had to do?'

  return {
    question, params
  }
}

function q6(params) {
  let question = `What was it like crossing paths with the person that ordered the ${params.adventure.spark}?`

  return {
    question, params
  }
}

function q7(params) {
  params.climax = {
    location: place()
  }
  let question = `Obviously what you're really known for is what you did on ${params.climax.location}. But before that could begin, you had one final challenge to overcome. Can you tell us a little about that?`

  return {
    question, params
  }
}

function q8(params) {
  let question = `Who was in your team for this? How was ${choose([params.characters.mentor, params.characters.refusal, params.characters.childhood, params.characters.allies[0]]).name} involved?`

  return {
    question, params
  }
}

function q9(params) {
  let question = `How did it go?`

  return {
    question, params
  }
}

function q10(params) {
  let question = ''
  if (params.home.type === 'fleet') {
    question = `That must have been especially difficult for someone who grew up on a spaceship rather than solid ground!`
  } else if (params.home.type === 'planet') {
    question = `I can't imagine growing up on a ${params.home.location} world prepared you for anything like that!`
  } else if (params.home.type === 'asteroid') {
    question = `I can't imagine growing up in the confines of an asteroid could have prepared you for anything like that!`
  } else if (params.home.type === 'station') {
    question = `I can't imagine growing up in the confines of a station could have prepared you for anything like that!`
  }

  return {
    question, params
  }
}
