import { choose, integer } from "./helpers"
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

function newGameState(name, home) {
  const {questions, params} = heroJourney({name, home})
  const firstQuestion = questions.shift()

  const titles = ['An Unlikely Hero', 'A Journey To Remember']
  if (params.plot === 'rebellion') {
    titles.push('A rebellion With A Cause')
    titles.push('Fighting the Power')
  } else if (params.plot === 'find home') {
    titles.push('Finding Home')
    titles.push('Origin Story')
  } else if (params.plot === 'explore') {
    titles.push('The Great Unknown')
    titles.push('The True Frontier')
  }

  let about = 'the part he played'
  if (params.scope === 'individual') {
    if (params.plot === 'rebellion') {
      about = `the time he fought back against the ${params.organisations.evil}`
    } else if (params.plot === 'find home') {
      about = `his search for answers`
    } else if (params.plot === 'explore') {
      about = `his voyage into the ${params.locations.unexplored.name}`
    }
  }

  return {
    name: name,
    completed: false,
    introduction: {
      title: `Episode ${integer(3, 20)}: ${choose(titles)}`,
      text: `This episode, to mark the ${choose(10, 15, 20, 25, 30)}th anniversary of the events at ${params.locations.climax.name}, we are interviewing ${name} about ${about}.`
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