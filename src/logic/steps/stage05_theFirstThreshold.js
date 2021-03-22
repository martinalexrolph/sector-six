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

function theFirstThreshold(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p)]
}

export {theFirstThreshold}

function q1(p) {
  if (p.plot === 'explore') {
    return `An expedition like this is a truly dangerous proposition. Were you scared?`
  } else if (p.plot === 'rebel') {
    const prefix = choose([
      'Taking a stand against',
      'Opposing',
      'Fighting for freedom from',
    ])
    return `${prefix} the ${p.organisations.evil} was an incredibly dangerous thing to do. Were you scared?`
  } else if (p.plot === 'find home') {
    return `You were going out and seeking knowledge about your past that powerful people wanted to keep hidden. Were you scared?`
  }
}

function q2(p) {
  let action
  if (p.plot === 'rebellion') {
    action = `standing up to them`
  } else if (p.plot === 'exploration') {
    action = `venturing into the ${p.locations.unexplored}`
  } else {
    if (p.scope === 'faction') {
      action = `learning about our origins`
    } else {
      action = `learning about your origins`
    }
  }
  return `Deep down, what was it that you really hoped to achieve by ${action}?`
}

function q3() {
  const spark = choose(['invasion', 'execution', 'murder'])
  const name = spark === 'invasion' ? place() : fullName()
  return `The ${spark} of ${name} was the spark that really lit the fire. What did you do when you heard the news?`
}

function q4() {
  return `There's no backing out after something like that! Was it your choice to act at that moment, or did circumstances force your hand?`
}

function q5(p) {
  const pronouns1 = {
    male: 'his',
    female: 'her',
    neutral: 'their'
  }
  const pronouns2 = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  // In the call to adventure, you [lie/betray/try to emulate] the 'refusal' character
  switch (p.armature) {
    case 'loyalty':
      return `I'm glad that ${p.characters.refusal.name} gave you a second chance to prove your loyalty. Did you feel like you had to regain ${pronouns1[p.characters.refusal.gender]} trust?`
    case 'honesty':
      return `Do you think ${p.characters.refusal.name} believed you? After all, you'd lied to ${pronouns2[p.characters.refusal.gender]} before.`
    // case 'authenticity':
    //   return `That must have been quite unfamiliar. After all, you could no longer just follow ${p.characters.refusal.name}'s example, or indeed anyone else's.`
  }
}


