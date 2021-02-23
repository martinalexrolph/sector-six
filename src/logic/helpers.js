function choose(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function firstName(gender) {
  const masculineNames = [
    "Jon", "Burton", "Frank", "Marco", "Graw", 
  ]

  const feminineNames = [
    "Ada", "Iris", "Mary", "Jo", "Kelene"
  ]

  const neutralNames = [
    "Alex", "Ko", "Tii", "Ton", "Rowan"
  ]

  if (gender === 'male') {
    return choose(masculineNames.concat(neutralNames))
  } else if (gender === 'female') {
    return choose(feminineNames.concat(neutralNames))
  } else {
    return choose(feminineNames.concat(masculineNames.concat(neutralNames)))
  }
}

function lastName() {
  return choose([
    'Skywalker',
    'Inita',
    'Oiwha',
    'Starpath',
    'Orion',
    'Bern'
  ])
}

function fullName() {
  return `${firstName()} ${lastName()}`
}

function numberedPlanet() {
  const star = choose([
    'Artik',
    'Teres',
    'Threll',
    'Centaura',
    'Quirran'
  ])
  const number = choose(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'IIX', 'IX'])
  return `${star} ${number}`
}

function place() {
  return choose([
    numberedPlanet()
  ])
}


export {
  choose,
  firstName,
  lastName,
  fullName,
  place
}