import { choose } from '../helpers'


function theOrdinaryWorld(p) {
  return [q1(p), q2(p), q3(p), q4(p), q5(p), q6(p)]
}


export {theOrdinaryWorld}

function q1() {
  const start = choose([
    "Before all this kicked off,",
    "As a young adult,",
  ])

  const end = choose([
    "what was your life like?",
    "what did you do?",
  ])

  return start + ' ' + end
}

function q2(p) {

  const home = p.locations.home

  const start = choose([
    `What was it like living on ${home.name},`,
    `How was it growing up on ${home.name},`,
  ])
  const options = {
    'planet': [
      `one of the ${home.region} worlds?`,
      `a planet in such a ${home.region === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
    'fleet': [
      `a ship travelling between the ${home.region} worlds?`,
      `a travelling fleet ${home.region === 'core' ? 'in the core' : 'on the frontier'}?`
    ],
    'station': [
      `a station orbiting a ${home.region} planet?`,
      `such a ${home.region === 'core' ? 'central' : 'remote'} station?`
    ],
    'asteroid': [
      `an asteroid base ${home.region === 'core' ? 'at the heart of civilisation' : 'at the edge of civilisation'}?`,
      `a terraformed asteroid in such a ${home.region === 'core' ? 'central' : 'remote'} part of the galaxy?`
    ],
    'moon': [`a moon of such a ${home.region === 'core' ? 'central' : 'remote'} planet?`],
    'city': [`such a ${home.region === 'core' ? 'central' : 'remote'} city?`]
  }

  return start + ' ' + choose(options[home.type])
}

function q3(p) {
  switch (p.plot) {
    case 'find home':
      return "Did you feel, growing up, like this was where you really belonged?"
    case 'rebel':
      return "Were you rebellious, growing up?"
    case 'explore':
      return "Were you much of an explorer growing up, or did you prefer to stay close to home?"
  }
}

function q4() {
  const first = choose("Was it a happy childhood?", "How were your teenage years?")
  const second = choose("Who were your friends back then?", "What was your family like?", "Who were your friends and family growing up?")

  return `${first} ${second}`
}

function q5(p) {
  const character = p.characters.childhood
  const pronouns = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  return `It sounds like ${character.name} had a big impact on you. Can you tell me a bit more about ${pronouns[character.gender]}?`
}

function q6(p) {
  const character = p.characters.childhood
  const pronouns = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  switch (p.armature) {
    case 'loyalty':
      return `Why did ${pronouns[character.gender]} leave you like that, do you know?`
    case 'honesty':
      return `Why do you think ${pronouns[character.gender]} lied to you about that?`
    case 'authenticity':
      return `Why do you think ${pronouns[character.gender]} tried so hard to fit in?`
  }
}