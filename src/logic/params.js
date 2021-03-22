/*
plot:
  rebel
  explore
  defend
  find home

scope:
  individual
  society
  civilisation

armature:
  loyalty
  love
  honesty
  // authenticity
*/

import { choose, character, location } from "./helpers";

function getParams() {
  const params = {
    plot: choose('rebel', 'explore', 'find home'),
    // plot: 'rebel',
    // scope: choose('individual', 'society', 'civilisation'),
    scope: 'civilisation',
    armature: choose('loyalty', 'honesty'),
    // armature: 'loyalty',
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
        title: 'First Hand'
      }
    },
    locations: {
      home: location(),
      // home: {name: 'Xyzzy', type: 'moon', region: 'core'},
      mentor: location(),
      unexplored: {
        name: choose('Unknown Regions', 'Outer Rim', 'Gateway Systems', 'Great Nebula', 'Abyss'),
        type: 'sector'
      },
      climax: location()
    }
  };

  console.log(params)
  return params
}

export { getParams }