/*

The Ordinary World

A few questions about their childhood, including one that foreshadows the plot and one that
introduces the armature.

*/

import { choose, firstName, lastName, location } from '../helpers'


function theOrdinaryWorld(p) {
  return [introduction(p), q1(p), q2(p), q3(p), q4(p), q5(p), q6(p), q7(p)]
}


export {theOrdinaryWorld}

function introduction(p) {

  const their = {
    male: 'his',
    female: 'her',
    neutral: 'their'
  }

  const options = {
    'rebellion': {
      'individual': `Everyone knows the story of the Great Uprising that toppled the ${p.organisations.evil}, but the early days of the rebellion are less well known. This week, we are talking to ${p.protagonist} about ${their[p.gender]} actions almost five years previously which played a small but significant role in bringing the rule of the ${p.organisations.evil} to an end.`,
      'organisation': `This episode we're marking the ${choose(10, 15, 20, 25)}th anniversary of the ${p.organisations.good}'s victory over the ${p.organisations.evil} on ${p.locations.climax.name}. My guest is ${p.protagonist}, who played a key role in these events which led, ultimately, to the end of the rule of the ${p.organisations.evil}.`
    },
    'find home': {
      'individual': '[unfinished]',
      'organisation': '[unfinished]'
    }
  }

  return options[p.plot][p.scope]
  // let about = 'the part he played'
  // if (p.scope === 'individual') {
  //   if (p.plot === 'rebellion') {
  //     about = `the time he fought back against the ${p.organisations.evil}`
  //   } else if (p.plot === 'lost homeworld') {
  //     about = `his search for answers`
  //   } else if (p.plot === 'explore') {
  //     about = `his voyage into the ${p.locations.unexplored.name}`
  //   }
  // }
  // return `This episode, to mark the ${choose(10, 15, 20, 25, 30)}th anniversary of the events at ${p.locations.climax.name}, we are interviewing ${p.protagonist} about ${about}.`
}

function q1(p) {
  return choose(
    `Hello, my name is ${firstName()} ${lastName()} from ${location().name} University's history department - thanks for joining us!`,
    `Hello listeners! I'm your host ${firstName()} ${lastName()} coming to you from ${location().name}. Thanks for joining me, ${p.protagonist.split(' ')[0]}!`
  )
}

function q2() {
  const part1 = choose(
    `Let's start at the beginning, shall we?`,
    `Why don't we start by talking a little bit about your life before all this.`,
  )

  const part2 = choose(
    `What was your life like growing up?`,
    `What was your childhood like?`
  )

  return part1 + ' ' + part2
}

function q3(p) {

  const home = p.locations.home

  const options = {
    'planet': [
      `What was it like living on ${home.name}, one of the ${home.region} worlds?`,
      `How was it growing up on ${home.name}, a planet in the galactic ${home.region === 'core' ? 'core' : 'rim'}?`
    ],
    'fleet': [
      `What was it like living on ${home.name}? That's one of the traveller ships, right? Between the ${home.region} worlds?`,
      `How was it growing up on ${home.name}? Must have been strange, travelling ${home.region === 'core' ? 'the core' : 'the frontier'} in a trading fleet?`
    ],
    'station': [
      `What was it like living on ${home.name} Station ${home.region === 'core' ? 'in the heart of the galaxy' : 'at the edge of the galaxy'}?`,
      `How was it growing up on ${home.name}, such a ${home.region === 'core' ? 'central' : 'remote'} orbital station?`
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
  const they = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }
  const them = {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  const options = {
    'take risks': [
      `Why didn't you take that chance? Did you think it was too risky?`,
      `Why didn't ${they[character.gender]} take that chance? Did ${they[character.gender]} think it was too risky?`,
      `Why didn't they let you two take that chance?`
    ],
    'tell the truth': [
      `Why did you ${choose('lie to', 'mislead')} ${them[character.gender]} about that?`,
      `Why do you think ${they[character.gender]} ${choose('lied to', 'misled')} you about that?`,
      `Why do you think they ${choose('lied to', 'misled')} the two of you about that?`,
    ]
  }
  return choose(options[p.armature])
}

function q7(p) {
  switch (p.plot) {
    case 'lost homeworld':
      return choose(
        "Did you feel, growing up, like this was where you belonged?"
      )
    case 'rebellion':
      return choose(
        "Knowing what you ended up doing, I'd guess you were a bit of a rebel as a child as well. Is that true?",
        "Did you follow the rules as a kid? Or were you a bit of a rebel even back then?"
      )
    case 'explore':
      return choose(
        "Were you much of an explorer growing up, or did you prefer to stay close to home?"
      )
  }
}