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
  return [
    q1(p),
    q2(p),
    q3(p),
    q4(p),
    q5(p),
    theEnemyIsNotDead(p),
    q6(p),
    q7(p),
    q8(p),
    q9(p)
  ]
}

export {testsAlliesEnemies}



function q1(p) {
  const spark = choose(['invasion of', 'execution of', 'murder of', 'discovery on', 'events on'])
  const name = ['invasion of', 'discovery on', 'events on'].includes(spark) ? place() : fullName()
  const effect = choose(
    'was the spark that really lit the fire',
    'really changed things'
  )
  const actor = p.scope === 'individual' ? 'you' : `the ${p.organisations.good}`
  return `The ${spark} ${name} ${effect}. How did ${actor} respond?`
}



function q2(p) {
  const they = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  const wereThey = {
    male: 'was he',
    female: 'was she',
    neutral: 'were they'
  }
  return choose(
    `It was during this that you met ${p.characters.ally.name}, right? How ${wereThey[p.characters.ally.gender]} involved?`,
    `How did ${p.characters.ally.name} get involved?`,
    `What was ${p.characters.ally.name}'s role in all this?`,
    `Where did ${p.characters.ally.name} come in?`,
    `${p.characters.ally.name} joined you for this, didn't ${they[p.characters.ally.gender]}?`,
  )
}

function q3(p) {
  const them = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  switch (p.armature) {
    case 'tell the truth':
      return `Did you believe him?`
    case 'take risks':
      return `Were you worried about getting involved with ${them[p.characters.ally.gender]}?`
  }
}

function q4(p) {
  if (p.scope === 'individual') {
    if (p.plot === 'explore') {
      return `Were there any other difficulties you had to overcome before you could set off?`
    } else if (p.plot === 'rebellion') {
      return `What was your next move?`
    } else if (p.plot === 'lost homeworld') {
      return `How did you find out the co-ordinates?`
    }
  } else {
    return 'What was your next assignment, once you were part of the team?' 
  }
}

// TODO: Make it really obvious that the enemy does not get killed here! Otherwise the resurrection doesn't make sense
// TODO: Need more of your 'relationship' with the enemy so that they mean more to you.
function q5(p) {
  return choose(
    `What was it like facing off against ${p.characters.enemy.title} ${p.characters.enemy.name}?`,
    `${p.characters.enemy.title} ${p.characters.enemy.name} was notoriously brutal. How did you escape?`,
  )
}

function theEnemyIsNotDead(p) {
  return choose(
    `Of course, that wasn't the last you'd see of each other - but we'll come back to that. Where did you go from there?`,
    `How did the ${p.characters.enemy.title} survive?`,
    `Anyone who has heard your story knows that this wasn't the last time you crossed paths with the ${p.characters.enemy.title}. Did you suspect, at this point, that you'd meet each other again?`
  )
}

function q6(p) {
  if (p.plot === 'lost homeworld') {
    return `The discovery of ${p.locations.climax.name} was what made you and your team famous. But first you had one final challenge to overcome. Can you tell us a little about that?`
  } else if (p.plot === 'explore') {
    return `Obviously what you're really known for is what you did when the mission reached the ${p.locations.unexplored.name}. First you had to get there - can you tell us about the launch?`
  } else if (p.plot === 'rebellion') {
    return choose(
      `Obviously what you're really known for is what you did on ${p.locations.climax.name}. But before that could begin, you had one final challenge to overcome. Can you tell us a little about that?`,
      `I'm sure everyone wants to hear you talk about the events on ${p.locations.climax.name}, but before that there was an incident that not so many people know about that nearly derailed everything. Can you tell us about that?`
    )
  }
}

// Why didn't you follow the armature?
function q7(p) {
  const character = choose(p.characters.refusal, p.characters.ally)
  switch (p.armature) {
    case 'take risks':
      return `Why not? Sure, it was dangerous, but ${character.name} needed your help!`
    case 'tell the truth':
      return `Why didn't you just tell ${character.name} the truth? That would have saved so much trouble.`
  }
}

function q8() {
  return `How did you fix the mess you'd made?`
}

function q9(p) {
  if (p.locations.home.type === 'fleet') {
    return `That must have been especially difficult for someone who grew up on a spaceship rather than solid ground!`
  } else if (p.locations.home.type === 'planet') {
    return `I can't imagine growing up on a ${p.locations.home.region} world prepared you for anything like that!`
  } else if (p.locations.home.type === 'asteroid') {
    return `I can't imagine growing up in the confines of an asteroid could have prepared you for anything like that!`
  } else if (p.locations.home.type === 'station') {
    return `I can't imagine growing up in the confines of a station could have prepared you for anything like that!`
  } else if (p.locations.home.type === 'city') {
    return `I can't imagine growing up in a city like ${p.locations.home.name} could have prepared you for anything like that!`
  } else if (p.locations.home.type === 'moon') {
    return `I can't imagine growing up on ${p.locations.home.name} could have prepared you for anything like that!`
  }
}