import { choose } from '../helpers'

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

function theMentor(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p)]
}

export {theMentor}

function q1() {
  return `Why didn't you feel ready?`
}

function q2() {
  return 'Did you know at the time what it was that you really needed to learn? Or was that something you only found out later?'
}

function q3(p) {
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }
  const mentor = p.characters.mentor

  return choose([
    `It's interesting to me that so few people know about how much of a pivotal role ${mentor.name} played for you. What was so important about ${pronouns[mentor.gender]}?`,
    `That you trained under ${mentor.name} is well known, but can you share something about ${pronouns[mentor.gender]} that not many other people know?`
  ])
}

function q4(p) {
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  return `Did ${p.characters[choose(['refusal', 'childhood'])].name} approve of you training with ${pronouns[p.characters.mentor.gender]}?`
}

function q5(p) {
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }
  const mentor = p.characters.mentor

  return choose([
    `I sense that ${mentor.name} was more to you than just a ${choose(['teacher', 'trainer', 'mentor'])} - what was your relationship with ${pronouns[mentor.gender]} like?`,
    `I sense an undertone of ${choose(['resentment', 'bitterness', 'unhappiness'])} when you talk about your training. Did you not get on well?`,
  ])
}
