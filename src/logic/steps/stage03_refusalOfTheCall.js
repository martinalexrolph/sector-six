import { choose } from '../helpers'

function refusalOfTheCall(p) {
  return [q1(p), q2(p), q3(p), q4(p)]
}

export {refusalOfTheCall}

function q1(p) {
  if (p.scope === 'individual') {
    if (p.plot === 'rebel') {
      return `Why didn't you take a stand? What was holding you back?`
    } else {
      return `Why didn't you start investigating? What was holding you back?`
    }
  } else {
    if (p.plot === 'find home') {
      return `Why didn't you take action right away? What was holding you back?`
    } else {
      return `Why didn't you get involved? What was holding you back?`
    }
  }
}

function q2(p) {
  const pronouns1 = {
    male: 'he',
    female: 'she',
    neutral: 'they'
  }

  const pronouns2= {
    male: 'him',
    female: 'her',
    neutral: 'them'
  }

  switch (p.armature) {
    case 'loyalty':
      return `So ${p.characters.refusal.name} actually asked you to, and despite everything that ${pronouns1[p.characters.refusal.gender]} meant to you, you abandoned ${pronouns2[p.characters.refusal.gender]}?`
    case 'honesty':
      return `Why did you lie to ${p.characters.refusal.name} about that? After everything you two had been through together?`
    // case 'authenticity':
    //   return `Why did you try to do what ${p.characters.refusal.name} did? I know you two were close but surely you could tell that wasn't the right path for you?`
  }


  const link = choose(['connection', 'relationship', 'encounter'])
  const prefix = choose(['What changed in your', 'What was it about your'])
  return `${prefix} ${link} with ${p.characters.refusal.name} that made you more reluctant?`
}

function q3(p) {
  let action = ''
  if (p.scope === 'individual') {
    if (p.plot === 'find home') {
      action = 'start looking for your ancestral home'
    } else if (p.plot === 'explore') {
      action = 'start planning an expedition'
    } else if (p.plot === 'rebel') {
      action = 'start fighting back'
    }
  } else {
    if (p.plot === 'find home') {
      action = 'join the search for your ancestral home'
    } else if (p.plot === 'explore') {
      action = 'join the expedition'
    } else if (p.plot === 'rebel') {
      action = 'join the uprising'
    }
  }
  return `But we know, since we're having this conversation, that you did eventually ${action}. What changed?`
}

function q4() {
  const persuader = choose(['book', 'person', 'accident', 'incident', 'article', 'film', 'experience', 'artefact'])
  return `What was it about this ${persuader} that gave you the push you needed?`
}
