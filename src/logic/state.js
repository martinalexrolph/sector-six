import { choose, integer } from "./helpers"
import { heroJourney } from "./questions"

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

function newGameState(name, home, gender) {
  const {questions, params} = heroJourney({name, home, gender})
  const introduction = questions.shift()
  const firstQuestion = questions.shift()

  const titles = ['An Unlikely Hero', 'A Journey To Remember']
  if (params.plot === 'rebellion') {
    titles.push('A Rebel With A Cause')
    titles.push('Fighting the Power')
  } else if (params.plot === 'lost homeworld') {
    titles.push('Finding Home')
    titles.push('Origin Story')
  } else if (params.plot === 'explore') {
    titles.push('The Great Unknown')
    titles.push('The True Frontier')
  }

  return {
    name: name,
    completed: false,
    introduction: {
      title: `Episode ${integer(3, 20)}: ${choose(titles)}`,
      text: introduction
    },
    messages: [{
      text: firstQuestion,
      type: 'question'
    },],
    questions: questions
  }
}

export {
  newGameState
}