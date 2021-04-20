import { choose } from "../helpers"

function returnWithTheElixir(p) {
  return [
    whereDidYouGo(p),
    goingBackHome(p),
    lesson(p),
    friends(p),
    finalWords(p),
    thanks(p)
  ]
}

export {
  returnWithTheElixir
}

function whereDidYouGo(p) {
  return choose(
    `Where did you go from here?`,
    `How long before you could go back home?`,
    `Did you return to ${p.locations.home.name}?`,
    `How long before you could go back to ${p.locations.home.name}?`
  )
}

function goingBackHome(p) {
  if (p.plot === 'rebellion') {
    return choose(
      `Of course the ${p.organisations.evil} weren't completely defeated, but how did it feel to be able to return having struck such a critical blow?`,
      `What was it like going back? Did your ${choose('family', 'friends')} know the part you'd played?`,
    )
  } else if (p.plot === 'lost homeworld') {
    return `Of course there were still more secrets yet to uncover, but how did it feel to return home with everything you had learnt?`
  } else if (p.plot === 'explore') {
    return `Of course the ${p.locations.unexplored.name} still hid plenty of secrets, but how did it feel to return home having made such an important discovery?`
  }
}

function lesson() {
  return choose(
    `What did you learn from all this?`,
    `How do you think these events changed you?`,
    `What was the biggest way that these events changed you?`,
    `When you think back to the person you were before all this happened, what would you want to tell them?`,
    `What advice would you give to your younger self, before this all started?`
  )
}

function friends() {
  return choose(
    `Of the people you met along the way, who are you most grateful for?`,
    `Are you still in touch with the people you met along the way?`,
    `Which of the people you met had the most impact on you, do you think?`,
    `Are the people in your team still in touch wth each other? Are you still friends?`,
  )
}

function finalWords() {
  return choose(
    `Any final words for our listeners before we finish?`,
    `Finally, if there was one piece of advice or encouragement that you could give to our listeners, what would it be?`,
    `Any final reflections before we go? Anything else you'd like to share?`,
  )
}

function thanks() {
  return choose(
    `Thank you, both personally and on behalf of the University, for joining us and sharing your story!`,
    `I'm afraid that's all we have time for! Thanks again for joining us and sharing your experiences.`,
    `And that's all we have time for! Thanks again for joining us, it was a pleasure talking with you.`,
  )
}
