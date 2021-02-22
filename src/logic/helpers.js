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

export {
  choose,
  firstName
}