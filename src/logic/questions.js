import { choose } from './helpers'
import { getParams } from './params'
import { theOrdinaryWorld } from './steps/stage01_theOrdinaryWorld'
import { callToAdventure } from './steps/stage02_callToAdventure'
import { refusalOfTheCall } from './steps/stage03_refusalOfTheCall'
import { theMentor } from './steps/stage04_theMentor'
import { theFirstThreshold } from './steps/stage05_theFirstThreshold'
import { testsAlliesEnemies } from './steps/stage06_testAlliesEnemies'
import { approachInnermostCave } from './steps/stage07_approachInnermostCave'
import { theOrdeal } from './steps/stage08_theOrdeal'
import { theReward } from './steps/stage09_theReward'
import { theRoadBack } from './steps/stage10_theRoadBack'
import { theResurrection } from './steps/stage11_theResurrection'
import { returnWithTheElixir } from './steps/stage12_returnWithTheElixir'
// import { testsAlliesEnemies } from './steps/testAlliesEnemies'
// import { approachInnermostCave } from './steps/approachInnermostCave'

function introductoryQuestions() {
  return firstQuestions().concat(homeworldQuestions())
}

function firstQuestions() {
  const firstNames = ['John', 'Bob', 'Jane', 'Charlotte']
  const lastNames = ['Smith', 'Skywalker', 'Artemis']
  return [
    `Thank you for agreeing to take part in this project and discuss your story and the part you played in the Rebellion. My name is ${choose(firstNames)} ${choose(lastNames)} from Correl City University's history department. Why don't you start by telling us your name and where you grew up?`
  ]
}

function homeworldQuestions() {

  const questions = [];

  questions.push(choose([
    "What was it like growing up on a planet so far from the core?",
    "What was it like growing up on the most densely populated city in the galaxy?",
    "What was it like growing up on one of the core worlds?",
    "What was it like growing up on a travelling fleet?",
    "What was it like growing up on a trading vessel?",
  ]))

  return questions
}

function heroJourney({name, home}) {
  // New params:
  // home.type (planet, fleet, station, asteroid)
  // home.location (core, frontier)

  const params = getParams({name, home});

  const mentorAndThreshold = Math.random() < 0.5 ?
    [...theMentor(params), ...theFirstThreshold(params)] :
    [...theFirstThreshold(params), ...theMentor(params)]

  const questions = [
    ...theOrdinaryWorld(params),
    ...callToAdventure(params),
    ...refusalOfTheCall(params),
    ...mentorAndThreshold,
    ...testsAlliesEnemies(params),
    ...approachInnermostCave(params),
    ...theOrdeal(params),
    ...theReward(params),
    ...theRoadBack(params),
    ...theResurrection(params),
    ...returnWithTheElixir(params),
    // ...step2.questions,
    // ...step3.questions,
    // ...step4.questions,
    // ...step5.questions,
    // ...step6.questions,
    // ...step7.questions,
    // ...theOrdeal,
    // ...seizingTheSword,
    // ...theRoadBack,
    // ...resurrection,
    // ...returnWithTheElixir
  ]

  return {questions, params}
}

export {
  introductoryQuestions,
  heroJourney
}

/*

Opening

Hook

Plot Point One

Pinch Point

The Mid Point

Pinch Point

Plot Point Two

Resolution

---

Part 1:
Hook
Introduce the hero
Establish stakes
Foreshadow future events
Prepare for Plot Point One

*/

// Part One

// function hook() {
//   return []
// }

// function introduceTheHero() {
//   return []
// }

// function establishStakes() {
//   return []
// }

// function foreshadowFutureEvents() {
//   return []
// }

// function prepareForPlotPointOne() {
//   return []
// }

// // Plot Point One

// function plotPointOne() {
//   return []
// }
