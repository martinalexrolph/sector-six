<template>
  <div class="menu-container">
    <div>
      <div class="title-1">--- RULES ---</div>
    </div>

    <div class="menu-box">
      <h2>INTRODUCTION</h2>
      <p>
        Stories from Sector Six is a simple sci-fi journalling game, somewhere between a solo RPG and a creative-writing exercise. The goal is simply to create a memorable character and story, guided by the game, by creating a retrospective interview about your character's involvement in an important moment in the history of Sector Six.
      </p>

      <h2>HOW TO PLAY</h2>
      <p>
        The interviewer will ask you a series of questions that you must answer. There will be around 60 questions; once you have answered them all, the game will end and you will have told a unique story and created a memorable character.
      </p>
      <p>
        However, you are not completely free to answer as you wish. Stories from Sector Six is a game of writing creatively within constraints.
      </p>
      <p>
        What are the constraints?
      </p>
      <p>
        You will be shown the next two questions that the interviewer will ask. Your goal is to create an interview which flows and tells a coherent story, meaning that every round you should aim to write an answer which answers the first question in a way that makes the follow-up question makes sense, while keeping consistency with your earlier answers.
      </p>
      <p>
        The questions are procedurally generated by the computer to create a variety of story arcs and events, so that no two games are the same. It is important that you let yourself be guided by the questions rather than approaching with a firm idea of where you want the story to go.
      </p>
      <p>
        The questions may take you and your character to unexpected places, leading them to do things that you might not have expected. Lean into this: allow yourself to be surprised at the development of your character and the world around them.
      </p>

      <h2>AN EXAMPLE QUESTION AND ANSWER</h2>
      <p>
        For example, if the question is <b>"What happened when you arrived at Zeta IV?"</b> and you are told that the next questions will be <b>"How did it feel to be betrayed like that?"</b> and <b>"What happened to the crew?</b>, your answer to the question should involve some form of betrayal, and might include reference to a ship or something else that has a crew, so that when the interviewer asks about the betrayal and the fate of the crew, it's not a bizarre non-sequitur but rather a coherent interview. For example, you might say:
      </p>
      <p>
        <i>"The approach was easy, the forward team had managed to disable the defence grid in time which was lucky. But as soon as we landed, we were surrounded! A whole squad of imperial troopers jumped out of hiding, and Jen was out front, dressed in the finest imperial armour. She must have been a mole all along - and to think I trusted her completely!"</i>
      </p>

      <h3>Now you're ready to begin!</h3>
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="goHome()">&lt; MAIN MENU</button>
      <button class="button" @click="newGame()">NEW GAME ></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: Object
  },
  methods: {
    newGame() {
      this.$router.push({name: 'New'})
    },
    goHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-1 {
  font-size: 30px;
  line-height: 1;
  font-weight: 700;
  padding-right: 2px;
}


.button {
  width: 300px;
  max-width: calc(50% - 10px);
  margin: 0 5px;
}

.button:hover {
  background: #444
}

.secondary-buttons {
  display: flex;
  justify-content: center;
}

</style>
