import { choose } from './helpers'



function shortGame(p) {
  return [
    intro(p),
    hello(p),
    involvement(p),
    motivation(p),
    // team(p),
    plan(p),
    arrival(p),
    breakthrough(p),
    next(p),
    complication(p),
    overcome(p),
    success(p),
    escape(p),
    reaction(p)
  ]
}

export {shortGame}

function intro(p) {
  const role = choose('pilot', 'gunner', 'comrade', 'navigator', 'engineer', 'marksman', 'operator', 'strategist', 'Commander', 'Sergeant', 'Lieutenant')
  const s1 = `I'm here in the ${p.organisations.good} base on ${p.locations.mentor.name} talking to ${p.organisations.good} ${role} ${p.protagonist} who's just returned from a daring raid on ${p.locations.climax.name}. `
  const s2 = `${{male: 'He and his team', female: 'She and her team', neutral: 'They and their team'}[p.gender]}` + choose(
    ` disrupted a slave convoy, freeing over 100 people from the grasp of the ${p.organisations.evil}.`,
    ` destroyed a mining operation key to the ${p.organisations.evil}'s plans.`,
    ` irreperably damaged a ${p.organisations.evil} military outpost.`,
    ` obliterated a military research lab where the ${p.organisations.evil} was creating chemical weapons.`,
    ` destroyed a weapons factory producing anti-starship cannons for the ${p.organisations.evil}.`
  )
  return s1 + s2
}

function hello(p) {
  return `Incredible! The blow you just struck against the ${p.organisations.evil} feels like it could be a turning point. How are you feeling?`
}

function involvement(p) {
  return choose(
    `How long have you been involved in the ${p.organisations.good}? Had you been on many missions before this one?`,
    `Just quickly, how did you get to the point where you're going on critical missions for the ${p.organisations.good}?`,
    `What motivated to join the ${p.organisations.good}, and the fight against the ${p.organisations.evil}?`,
  )
}

function motivation(p) {
  const s1 = choose(
    `Well you've ended up a long way from ${p.locations.home.name} that's for sure!`,
    `So in a funny way you're not so far from where you started!`,
    )
  return `${s1} For those that don't already know, what's special about ${p.locations.climax.name}? Why was it so important to the ${p.organisations.evil}?`
}

function plan() {
  return choose(
    `How did the plan come together? How did you know this was an important place to strike?`
  )
}

// function team() {
//   return `Who was on your team?`
// }

function arrival(p) {
  return choose(
    `How did you get to ${p.locations.climax.name}?`
    // `What happened when you arrived at ${p.locations.climax.name}?`,
    // `Who led the way to ${p.locations.climax.name}?`,
    // `How did you approach ${p.locations.climax.name}?`,
    // `Was ${p.locations.climax.name} hard to get to?`
  )
}

function breakthrough() {
  return choose(
    `How did you evade detection?`,
    `How come they didn't spot you?`,
    `How did you get past the patrols?`,
    `Incredible! How did you manage that?`

    // `How did you ${choose('survive', 'break through', 'evade detection')}?`,
    // `What did you have to do to ${choose('get past', 'slip through', 'survive')}?`
  )
}

function next() {
  return choose(
    `What was the next step?`,
    `What did you have to do next?`,
    `What was the plan then?`,
  )
}

function complication(p) {
  return choose(
    `Did you realise ${p.characters.enemy.title} ${p.characters.enemy.name} would be there?`,
    `Oh no... ${p.characters.enemy.title} ${p.characters.enemy.name} is one of the most feared pilots in the sector!`,
    `How did the presence of ${p.characters.enemy.title} ${p.characters.enemy.name} change the plan?`,
  )
}

function overcome(p) {
  const enemy = choose(
    `the ${p.characters.enemy.title}`,
    `${p.characters.enemy.name}`,
    `that foul ${{male: 'man', female: 'lady', neutral: 'person'}[p.gender]}`,
  )
  return choose(
    `How did you defeat ${enemy}?`,
    `How did you get past ${enemy}?`,
    `How did you ${choose('fight', 'talk')} your way out of that one?`,
  )
}

// TODO: 
function success() {
  return choose(
    `Did that go to plan?`,
    `How on earth did you manage that?!`,
  )
}

function escape(p) {
  return choose(
    `The ${p.organisations.evil} must have been hot on your heels! How did you make it out of there?`,
    `Did everyone make it out ok? That must have been close!`,
  )
}


function reaction(p) {
  return `What was the reaction like when you returned to ${p.locations.mentor.name}?`
}