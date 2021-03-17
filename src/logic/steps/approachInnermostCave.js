// import { choose, firstName, place } from '../helpers'

/*
params = {
  home: {
    type: 'planet',
    location:  'frontier'
  },
  characters: {
    childhood: {
      name: 'Bob',
      relationship: 'father',
      gender: 'male'
    },
    refusal: {
      name: 'Tii',
      gender: 'neutral'
    },
    mentor: {
      name: 'Tii',
      gender: 'neutral'
    },
  },
  adventure: {
    type: 'homeward', // Or 'rebellion', 'exploration',
    scope: 'individual', // Or 'group', 'faction',
    spark: 'invasion', 'murder', 'execution' 
  },

}
*/

  // const theApproach = [
  //   "But knowing what has to be done, that's not enough on it's own. You needed a plan.",
  //   "Why did the plan require you to travel to Theria?",
  //   "Not everyone had the courage to stick around for this. Did anyone you know leave at this point?",
  //   "How did it feel to lose someone like that? Did it test your commitment?",
  //   "Where did the preparation take place?",
  //   "Who was on the team for the final push?"
  // ]


const questionFunctions = [
  function(params) {
    let question = 'Question one'
  
    return {
      question, params
    }
  },
  function(params) {
    let question = ''
  
    return {
      question, params
    }
  },
]

function approachInnermostCave(params) {
  let questions = []
  for (let i = 0; i < questionFunctions.length; i++) {
    const result = questionFunctions[i](params)
    questions.push(result.question)
    params = result.params
  }
  return {questions, params}
}

export {approachInnermostCave}