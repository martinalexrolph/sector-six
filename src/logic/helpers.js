function choose(...options) {
  // A single argument which is an array of options
  if (options.length === 1 && Array.isArray(options[0])) {
    return options[0][Math.floor(Math.random() * options[0].length)];
  }

  // Each argument is an option
  return options[Math.floor(Math.random() * options.length)];
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

function character() {
  const gender = choose(['male', 'female', 'neutral'])
  const name = firstName(gender)

  return {gender, name}
}

function locationName() {	
	var vowels = {  '1': ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
			'2': ["a", "e", "o", "u"],
			'3': ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"],
			'4': ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
			'5': ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
			'6': ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"] },
		mtx = [[1,1, 2,2, 5,5],
			[2,2, 3,3, 6,6],
			[3,3, 4,4, 5,5],
			[4,4, 3,3, 6,6],
			[3,3, 4,4, 2,2, 5,5],
			[2,2, 1,1, 3,3, 6,6],
			[3,3, 4,4, 2,2, 5,5],
			[4,4, 3,3, 1,1, 6,6],
			[3,3, 4,4, 1,1, 4,4, 5,5],
			[4,4, 1,1, 4,4, 3,3, 6,6]],
		fn = function(i) { return Math.floor(Math.random() * vowels[i].length); },
		name,
		comp,
		i, il,
		c = 0
	
  name = '';
  comp = mtx[c % mtx.length];
  for (i=0, il=comp.length/2; i<il; i++) {
    name += vowels[comp[i*2]][fn(comp[i*2+1])]
  }

  return name.charAt(0).toUpperCase() + name.slice(1)
}

function location() {
  const region = choose('core', 'frontier')
  const type = choose('city', 'fleet', 'station', 'asteroid', 'planet', 'moon')
  const name = locationName()

  return {
    region, type, name
  }
}


export {
  choose,
  firstName,
  lastName,
  fullName,
  place,
  character,
  location
}