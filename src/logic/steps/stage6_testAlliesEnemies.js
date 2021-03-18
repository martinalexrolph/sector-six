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

function testsAlliesEnemies(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p), q7(p), q8(p), q9(p), q10(p)]
}

export {testsAlliesEnemies}

function q1(p) {
  if (p.plot === 'explore' || p.plot === 'find home') {
    return choose([
      `What was the first challenge you had to overcome to prepare for your voyage?`
    ])
  } else if (p.plot === 'rebel') {
    if (p.scope === 'individual') {
      return `What was the first thing you tried to do to undermine the ${p.organisations.evil}?`
    } else {
      return choose([
        `How did you go about trying to join up with the ${p.organisations.good}?`
      ])
    }
  }
}

function q2(p) {
  const pronouns = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  return choose(
    `It was during this that you met ${p.characters.ally.name}, right? How were they involved?`,
    `How did ${p.characters.ally.name} help?`,
    `${p.characters.ally.name} joined you for this, didn't ${pronouns[p.characters.ally.gender]}?`,
  )
}

function q3(p) {
  const pronouns1 = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  const pronouns2 = {
    male: 'his',
    female: 'her',
    neutral: 'their'
  }

  const pronouns3 = {
    male: 'he was',
    female: 'she was',
    neutral: 'they were'
  }
  const pronouns4 = {
    male: 'himself',
    female: 'herself',
    neutral: 'themselves'
  }
  switch (p.armature) {
    case 'honesty':
      return `That's quite a story! Was it true?`
    case 'loyalty':
      return `Did ${pronouns1[p.characters.ally.gender]} keep ${pronouns2[p.characters.ally.gender]} word?`
    case 'authenticity':
      return `Do you think ${pronouns3[p.characters.ally.gender]} really being honest with ${pronouns4[p.characters.ally.gender]}?`
  }
}

function q4() {
  return 'Did it go to plan?'
}


function q5(p) {
  if (p.scope === 'individual') {
    if (p.plot === 'explore') {
      return `Were there any other difficulties you had to overcome before you could set off?`
    } else if (p.plot === 'rebel') {
      return `What was your next move?`
    } else if (p.plot === 'find home') {
      return `How did you learn where you had to go?`
    }
  } else {
    return 'What was your first assignment, once you were part of the team?' 
  }
}


function q6(p) {
  return choose(
    `What was it like facing off against ${p.characters.enemy.name}? Did you realise at the time that he was the ${p.characters.enemy.title} of the ${p.organisations.evil}?`
  )
}

function q7(p) {
  if (p.plot === 'explore') {
    return `Obviously what you're really known for is what you did when the mission reached the ${p.locations.unexplored.name}. First you had to get there - can you tell us about the launch?`
  }
  return `Obviously what you're really known for is what you did on ${p.locations.climax.name}. But before that could begin, you had one final challenge to overcome. Can you tell us a little about that?`
}

function q8(p) {
  const character = choose(p.characters.mentor, p.characters.refusal, p.characters.ally)
  switch (p.armature) {
    case 'authenticity':
      return `What made you think you were the best person for that job? Surely things would have been easier if you'd left that to ${character.name}?`
    case 'loyalty':
      return `${character.name} had every reason to expect your support. Why give your word when you wouldn't keep it?`
    case 'honesty':
      return `Why didn't you just tell ${character.name} the truth? That would have saved so much trouble.`
  }
}

function q9() {
  return `How did you fix the mess you'd made?`
}

function q10(p) {
  if (p.locations.home.type === 'fleet') {
    return `That must have been especially difficult for someone who grew up on a spaceship rather than solid ground!`
  } else if (p.locations.home.type === 'planet') {
    return `I can't imagine growing up on a ${p.locations.home.region} world prepared you for anything like that!`
  } else if (p.locations.home.type === 'asteroid') {
    return `I can't imagine growing up in the confines of an asteroid could have prepared you for anything like that!`
  } else if (p.locations.home.type === 'station') {
    return `I can't imagine growing up in the confines of a station could have prepared you for anything like that!`
  }
}
