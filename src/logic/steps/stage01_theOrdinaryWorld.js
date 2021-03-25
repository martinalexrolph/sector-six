/*

The Ordinary World

A few questions about their childhood, including one that foreshadows the plot and one that
introduces the armature.

*/

import { choose, firstName, lastName, location } from '../helpers'


function theOrdinaryWorld(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}


export {theOrdinaryWorld}

function q1() {
  const part1 = `Hello, my name is ${firstName()} ${lastName()} from ${location().name} University's history department - thanks for joining us to share your story! Let's start by giving a little context for your story.`
  const start = choose([
    "Before all this kicked off,",
    "As a young adult,",
  ])

  const end = choose([
    "what was your life like?",
    "what did you do?",
  ])

  return part1 + ' ' + start + ' ' + end
}

function q2(p) {

  const home = p.locations.home

  const options = {
    'planet': [
      `What was it like living on ${home.name}, one of the ${home.region} worlds?`,
      `How was it growing up on ${home.name}, a planet in such a ${home.region === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
    'fleet': [
      `What was it like living on ${home.name}? That's one of the traveller ships, right? Between the ${home.region} worlds?`,
      `How was it growing up on ${home.name}? Must have been strange, travelling ${home.region === 'core' ? 'the core' : 'the frontier'} in a trading fleet?`
    ],
    'station': [
      `What was it like living on ${home.name} Station in the galaxy's ${home.region === 'core' ? 'core' : 'frontier'}?`,
      `How was it growing up on ${home.name}, such a ${home.region === 'core' ? 'central' : 'remote'} station?`
    ],
    'asteroid': [
      `What was it like living on ${home.name}, an asteroid base at the ${home.region === 'core' ? 'heart' : 'edge'} of civilisation?`,
      `How was it growing up on ${home.name}, a terraformed asteroid in such a ${home.region === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
    'moon': [`What was it like living on ${home.name}, a moon at the ${home.region === 'core' ? 'heart' : 'edge'} of civilisation?`],
    'city': [`How was it growing up on ${home.name}, such a ${home.region === 'core' ? 'central' : 'remote'} city?`]
  }

  return choose(options[home.type])
}

function q3(p) {
  switch (p.plot) {
    case 'find home':
      return choose(
        "Did you feel, growing up, like this was where you really belonged?"
      )
    case 'rebellion':
      return choose(
        "Were you rebellious, growing up?",
        "Did you respect authority as a child?",
        "Did you follow the rules as a kid? Or were you a rebel?"
      )
    case 'explore':
      return choose(
        "Were you much of an explorer growing up, or did you prefer to stay close to home?"
      )
  }
}

function q4() {
  const first = choose("Was it a happy childhood?", "How were your teenage years?")
  const second = choose("Who were your friends back then?", "What was your family like?", "Who were your friends and family growing up?")

  return `${first} ${second}`
}

function q5(p) {
  const character = p.characters.childhood
  const them = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }
  const wereThey = {
    male: 'was he',
    female: 'was she',
    neutral: 'were they'
  }

  const part1 = choose(
    `It sounds like ${character.name} had a big impact on you.`,
    `${character.name} sounds like quite a character!`,
  )

  const part2 = choose(
    `Can you tell me a bit more about ${them[character.gender]}?`,
    `What ${wereThey[character.gender]} like to grow up with?`,
  )

  return `${part1} ${part2}`
}


// Someone else fails to embody the armature
function q6(p) {
  const character = p.characters.childhood
  const pronouns = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  switch (p.armature) {
    case 'take risks':
      return `Why didn't ${pronouns[character.gender]} take that chance? Did ${pronouns[character.gender]} think it was too risky?`
    case 'tell the truth':
      return `Why do you think ${pronouns[character.gender]} ${choose('lied to', 'misled')} you about that?`
  }
}