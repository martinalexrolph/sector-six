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

function q1(p) {
  if (p.scope === 'individual') {
    return choose(
      `Did you feel like you had the skills you needed?`,
      `Did you feel that your life up to this point had prepared you for anything like this?`,
    )
  } else {
    const group = p.plot === 'rebellion' ? 'rebels' : 'expedition'
    return choose(
      `Did you feel equipped to join the ${group}, like you had useful skills to offer?`,
      `Once you'd decided that you wanted to join the ${group}, did you feel that you had useful skills to offer?`,
    )
  }
}

function q2() {
  return choose(
    `Ok, so you had a lot to learn there. Did you actively seek out a mentor?`,
    `What was it you felt you really had to learn?`,
    `How did you find someone to teach you?`,
  )
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

  const characters = [
    p.characters.refusal.name,
    p.characters.childhood.name,
    'your family',
    'your friends'
  ]

  return choose(
    `Did ${choose(characters)} approve of you training with ${pronouns[p.characters.mentor.gender]}?`,
    `Why did ${choose(characters)} dislike ${pronouns[p.characters.mentor.gender]} so much?`,
    `What prompted ${choose(characters)} to join you in training?`,
  )
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
