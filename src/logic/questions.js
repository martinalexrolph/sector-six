import { choose } from './helpers'

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

export {
  introductoryQuestions
}

