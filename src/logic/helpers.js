import { boysName, constellation, girlsName, neutralName } from "./names";

function choose(...options) {
  // A single argument which is an array of options
  if (options.length === 1 && Array.isArray(options[0])) {
    return options[0][Math.floor(Math.random() * options[0].length)];
  }

  // Each argument is an option
  return options[Math.floor(Math.random() * options.length)];
}

function integer(from, to) {
  return Math.floor(Math.random() * (to - from) + from)
}

function firstName(gender) {
  if (gender === 'male') {
    return boysName()
  } else if (gender === 'female') {
    return girlsName()
  } else {
    return neutralName()
  }
}

function lastName() {
  const dramaticNames = () => `${choose('Star', 'Sky', 'Sun', 'Lune', 'Light', 'Jet', 'Dust')}${choose('path', 'smith', 'trail', 'line', 'walk', 'son')}`

  const nameFunctions = [
    dramaticNames, locationName, constellation
  ]

  return choose(nameFunctions)()
}

function fullName() {
  return `${firstName()} ${lastName()}`
}

function numberedPlanet() {
  const star = locationName()
  const number = choose(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'IIX', 'IX'])
  return `${star} ${number}`
}

function place() {
  return choose([
    numberedPlanet,
    locationName
  ])()
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

function evilTitle() {
  return choose(
    'Colonel',
    'Lieutenant',
    'Commander',
    'Artificer',
    'Admiral',
    'Marshall',
    'Captain',
    'Major',
    'Sergeant',
    'Centurion',
    'Praetor',
    'Imperator',
    'Officer',
    'Overseer'
  )
}


export {
  choose,
  integer,
  firstName,
  lastName,
  fullName,
  place,
  character,
  location,
  evilTitle,
  locationName
}