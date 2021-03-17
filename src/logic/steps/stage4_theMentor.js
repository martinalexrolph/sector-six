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
    type: 'homeward', // Or 'rebellion', 'exploration',
    scope: 'individual', // Or 'group', 'faction'
  },

}
*/

  // const meetingTheMentor = [
  //   "-=-=-=-",
  //   "But we know, since we're having this conversation, that you did eventually join up. What changed?",
  //   "How did Ada convince you to join?",
  //   "Did you feel equipped to join up, like you had useful skills to offer?",
  //   "So Ada trained you, but I sense that she meant more to you than that. What was your relationship with her like?",
  //   "So this is the moment you really decided to join up? Was the Uprising hard to contact?"
  // ]

function theMentor(params) {
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

export {theMentor}

function q1(params) {
  let question = `Why didn't you feel ready?`

  return {
    question, params
  }
}

function q2(params) {
  let question = 'Did you know at the time what it was that you really needed to learn? Or was that something you only found out later?'

  return {
    question, params
  }
}

function q3(params) {

  const gender = choose(['male', 'female', 'neutral'])
  const name = firstName(gender)
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }


  const question = choose([
    `It's interesting to me that so few people know about how much of a pivotal role ${name} played for you. What was so important about ${pronouns[gender]}?`,
    `That you trained under ${name} is well known, but can you share something about ${pronouns[gender]} that not many other people know?`
  ])

  params.characters.mentor = { name, gender }

  return {
    question, params
  }
}

function q4(params) {
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  let question = `Did ${params.characters[choose(['refusal', 'childhood'])].name} approve of you training with ${pronouns[params.characters.mentor.gender]}?`

  return {
    question, params
  }
}

function q5(params) {
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  const question = choose([
    `I sense that ${params.characters.mentor.name} was more to you than just a ${choose(['teacher', 'trainer', 'mentor'])} - what was your relationship with ${pronouns[params.characters.mentor.gender]} like?`,
    `I sense an undertone of ${choose(['resentment', 'bitterness', 'unhappiness'])} when you talk about your training. Did you not get on well?`,
  ])

  return {
    question, params
  }
}
