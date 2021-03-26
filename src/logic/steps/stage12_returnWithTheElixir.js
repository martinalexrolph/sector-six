import { choose } from "../helpers"

function returnWithTheElixir(p) {
  return [q1(p), q2(p), q3(p), q4(p)]
}

export {
  returnWithTheElixir
}

function q1(p) {
  if (p.plot === 'rebellion') {
    return `Of course the ${p.organisations.evil} weren't completely defeated, but how did it feel to be able to return home having struck such a critical blow?`
  } else if (p.plot === 'lost homeworld') {
    return `Of course there were still more secrets yet to uncover, but how did it feel to return home with everything you had learnt?`
  } else if (p.plot === 'explore') {
    return `Of course the ${p.locations.unexplored.name} still hid plenty of secrets, but how did it feel to return home having made such an important discovery?`
  }
}

function q2() {
  return choose(
    `Do you think these events changed you?`
  )
}

function q3(p) {
  return `Can you tell us a bit about the effect that your actions had on ${p.locations.home.name}, your home, and also the ${p.organisations.good} in general?`
}

function q4() {
  return `Thank you, both personally and on behalf of the University, for joining us and sharing your story!`
}