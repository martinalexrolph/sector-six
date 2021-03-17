/*
plot:
  rebel
  explore
  defend
  reclaim

scope:
  personal
  society
  civilisation

armature:
  loyalty
  love
  honesty
  authenticity
*/

import { choose, character, location } from "./helpers";

function getParams() {
  const params = {
    plot: choose('rebel', 'explore', 'find home'),
    scope: choose('individual', 'society', 'civilisation'),
    armature: choose('loyalty', 'honesty', 'authenticity'),
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
      enemy: character()
    },
    locations: {
      home: location(),
      mentor: location(),
      unexplored: {
        name: choose('Unknown Regions', 'Outer Rim', 'Gateway Systems', 'Great Nebula', 'Abyss'),
        type: 'sector'
      }
    }
  };

  console.log(params)
  return params
}

export { getParams }