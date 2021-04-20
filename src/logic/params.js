/*
plot:
  rebellion
  explore
  defend
  lost homeworld

scope:
  individual
  society
  civilisation

armature:
  tell the truth
  take risks
  money is not everything?
*/

import { choose, character, location, evilTitle } from "./helpers";

function getParams({name, home, gender}) {
  const params = {
    protagonist: name,
    gender: gender,
    // plot: choose('rebellion', 'explore', 'homeworld'),
    // Could add: defend, steal (or heist), rescue
    plot: 'rebellion',
    scope: choose('individual', 'organisation'),
    // scope: 'individual',
    armature: choose('take risks', 'tell the truth'),
    // armature: 'take risks',
    organisations: {
      evil: choose('Regime', 'Authority', 'Imperium', 'Alliance', 'Dynasty', 'Administration', 'Syndicate'),
      good: choose('Alliance', 'Collective', 'Senate', 'Union')
    },
    characters: {
      childhood: character(),
      refusal: character(),
      mentor: character(),
      nemesis: character(),
      ally: character(),
      enemy: {
        ...character(),
        title: evilTitle()
      }
    },
    locations: {
      home: location(),
      // home: {name: 'Xyzzy', type: 'moon', region: 'core'},
      mentor: location(),
      threshold: location(),
      unexplored: {
        name: choose('Unknown Regions', 'Outer Rim', 'Gateway Systems', 'Great Nebula', 'Abyss'),
        type: 'sector'
      },
      climax: location(),
      resurrection: choose('home', 'threshold', 'climax'),
    }
  };

  params.locations.home.name = home

  console.log(params)
  return params
}

export { getParams }