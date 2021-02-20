import { heroJourney } from "./questions"

function exampleState() {
  return {
    messages: [
      {
        text: 'How did you first hear about the rebellion?',
        type: 'question'
      },
      {
        text: 'I was serving on a mining vessel in the asteroid fields off Artec IV. A transport came through from the Outer Rim, a few of the people on it had heard whispers about the rebellion and shared them quiety in the bars.',
        type: 'answer'
      },
      {
        text: 'What was it about your experiences on Artec IV that convinced you to join?',
        type: 'question'
      }
    ],
    questions: [
      'Another question?',
      'Yet more questions?'
    ]
  }
}

// function newGameState(name) {
//   const introQuestions = introductoryQuestions()
//   const firstQuestion = introQuestions.shift()

//   return {
//     name: name,
//     completed: false,
//     introduction: {
//       title: "An Oral History of the Rebellion",
//       text: `To celebrate the 30th anniversary of the defeat of the Empire at the Battle of Insulata Prime this year, we are interviewing people involved in the conflict. This week, we are speaking to ${name}.`
//     },
//     messages: [{
//       text: firstQuestion,
//       type: 'question'
//     },],
//     questions: introQuestions.concat([
//       "Before all this started you were working in the Outer Rim - what did you parents do?",
//       "What was your experience of the Empire growing up?",
//       "But something happened when you had just turned 22, right? Can you tell us more about that?",
//       "So maybe that planted the seed for your later involvement, would you say that?",
//       "When did you first hear about the Rebellion?",
//       "But I understand you didn't do anything at first - why not?",
//       "It was around that time that you left your homeworld for the first time, looking for work, right?",
//       "What was it about your experiences on Artec IV that convinced you to join?",
//       "Who was your first point of contact with the Rebellion?",
//       "How hard was it to get in touch with them? I guess they must have been pretty secretive!"
//     ])
//   }
// }

function newGameState(name) {
  const questions = heroJourney()
  const firstQuestion = questions.shift()

  return {
    name: name,
    completed: false,
    introduction: {
      title: "An Oral History of the Rebellion",
      text: `To celebrate the 30th anniversary of the defeat of the Empire at the Battle of Insulata Prime this year, we are interviewing people involved in the conflict. This week, we are speaking to ${name}.`
    },
    messages: [{
      text: firstQuestion,
      type: 'question'
    },],
    questions: questions
  }
}

export {
  exampleState,
  newGameState
}