import { choose } from './helpers'
import { theOrdinaryWorld } from './steps/theOrdinaryWorld'
import { callToAdventure } from './steps/callToAdventure'
import { refusalOfTheCall } from './steps/refusalOfTheCall'
import { theMentor } from './steps/theMentor'
import { theFirstThreshold } from './steps/theFirstThreshold'

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

function heroJourney() {
  // New params:
  // home.type (planet, fleet, station, asteroid)
  // home.location (core, frontier)
  const step1 = theOrdinaryWorld()
  const step2 = callToAdventure(step1.params)
  const step3 = refusalOfTheCall(step2.params)
  const step4 = theMentor(step3.params)
  const step5 = theFirstThreshold(step4.params)

  // const theCallOfAdventure = [
  //   "When did you first feel the urge to do something about the Authority?",
  //   "Had you left home by this point? Where were you living?",
  //   "So the Authority took something very important from you. How did you react?",
  //   "So this was a pivotal moment, and you know something had to change."
  // ]

  // const refusalOfTheCall = [
  //   "The early seeds of the Uprising movement were already active where you were living, so why didn't you heed their call?",
  //   "Looking back, do you wish that you had done things differently, joined up then?",
  //   "How did it feel, going back to your old life after all this?"
  // ]

  // const meetingTheMentor = [
  //   "-=-=-=-",
  //   "But we know, since we're having this conversation, that you did eventually join up. What changed?",
  //   "How did Ada convince you to join?",
  //   "Did you feel equipped to join up, like you had useful skills to offer?",
  //   "So Ada trained you, but I sense that she meant more to you than that. What was your relationship with her like?",
  //   "So this is the moment you really decided to join up? Was the Uprising hard to contact?"
  // ]

  // const crossingTheThreshold = [
  //   "-=-=-=-",
  //   "How did it feel, setting foot in such a strange place looking for such wanted... well, criminals, at that point. Outlaws at the very least.",
  //   "Tell me a bit more about the spaceport. I think a lot of people know it as it is now, but it must have been so different back then!",
  //   "Who did you meet first?",
  //   "So that really was a point of no return, quite literally in a sense!",
  // ]

  const testsAlliesEnemies = [
    '-=-=-=-',
    "Iris? As in, the same Iris that led the assault on Artik IV?",
    "What was it like meeting her? Did you get a sense at the time of the massive role she would play?",
    "What was your first mission?",
    "Can you tell me a little bit about the people who you went on that mission with?",
    "What happened? Did you achieve your goal?",
    "He sounds like a nasty piece of work!",
    "Crazy that on your first mission you cross paths with the First Hand of the Authority... I don't envy you!",
    "Tell me about another of your missions.",
    "What was going through your head at that moment of betrayal?",
    "Did you get a sense of any weaknesses as a result of this?",
    "So by this point, you really knew what had to be done to take down the Authority."
  ]

  const theApproach = [
    "But knowing what has to be done, that's not enough on it's own. You needed a plan.",
    "Why did the plan require you to travel to Theria?",
    "Not everyone had the courage to stick around for this. Did anyone you know leave at this point?",
    "How did it feel to lose someone like that? Did it test your commitment?",
    "Where did the preparation take place?",
    "Who was on the team for the final push?"
  ]

  const theOrdeal = [
    "So you travelled to Theria. Was the journey eventful?",
    "What was your role when you arrived?",
    "How did that go?",
    "So despite the setback, ultimately the first step was complete. What next?",
    "Do you know why the First Hand was there? Had he been tipped off?",
    "How frustrating that he got away! But at least you got out alive too.",
    "And so, with the help of your squadmates, you finally came to the final goal of the mission. Talk me through what you had to do here?",
    "And with the Authority standing between you and your goal...",
    "That's such a price to pay for striking against the Authority. What was going through your mind at that moment?"
  ]

  const seizingTheSword = [
    "I wouldn't have thought that was a difficult choice... you were at your goal, why couldn't you just finish the job?",
    "Right, so it might not have been done in the way you expected but you did manage to carry out the task."
  ]

  const theRoadBack = [
    "That wasn't in the plan, right? You were supposed to be leaving straight away - what kept you?",
    "Did you manage to escape?",
    "How many of your teammates made it out?",
    "What happened on the way back?",
    "So you had no choice but to turn around. That must have been agonising, after going through so much."
  ]

  const resurrection = [
    "What did you have to do?",
    "After all this, you finally faced off against the First Hand and defeated him. How?",
    "Everything that you had been through seemed to lead up to this point. Do you think you could have managed this even three months before?",
    "How did it feel, facing off against someone who had stood in your way for so long?"
  ]

  const returnWithTheElixir = [
    "Now I know this wasn't the end of the war by any means, but did it feel like a turning point to you?",
    "What was it like, to finally have hope again?"
  ]

  const result = [
    ...step1.questions,
    ...step2.questions,
    ...step3.questions,
    ...step4.questions,
    ...step5.questions,
    ...testsAlliesEnemies,
    ...theApproach,
    ...theOrdeal,
    ...seizingTheSword,
    ...theRoadBack,
    ...resurrection,
    ...returnWithTheElixir
  ]

  return result
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
