<template>
  <div v-if="!loading" class="game">
    <div class="main-container">
      <div class="messages" id="messages">
        <Introduction v-bind:introduction="gameState.introduction"/>
        <div v-for="(message, index) in gameState.messages" v-bind:key="index">
          <Question v-if="message.type === 'question'" v-bind:question="message"/>
          <Answer v-if="message.type === 'answer'" v-bind:answer="message"/>
        </div>
      </div>
    </div>
    <Compose v-bind:onSubmit="submitAnswer" />
    <NextQuestion v-bind:question="{text: gameState.questions[0]}"/>
  </div>
</template>

<script>
import { newGameState } from '../logic/state'
import { saveGame, loadGame } from '../logic/saving'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Compose from '../components/Compose'
import NextQuestion from '../components/NextQuestion'
import Introduction from '../components/Introduction'

export default {
  name: 'HelloWorld',
  data() {
    return {
      loading: true
    }
  },
  async mounted() {
    const value = await loadGame(this.$route.params.gameId)
    console.log(value)
    if (value) {
      this.gameState = value
    } else {
      this.gameState = newGameState()
    }
    this.loading = false
  },
  methods: {
    submitAnswer(text) {
      this.gameState.messages.push({
        text: text,
        type: 'answer'
      })
      this.gameState.messages.push({
        text: this.gameState.questions.shift(),
        type: 'question'
      })
      var container = this.$el.querySelector("#messages");
      container.scrollTop = container.scrollHeight;

      saveGame(this.$route.params.gameId, this.gameState)
    }
  },
  props: {

  },
  components: {
    Question, Answer, Compose, NextQuestion, Introduction
  }
}
</script>

<style scoped>
.game {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.messages {
  font-size: 20px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.main-container {
  width: 100%;
  overflow: scroll;
  flex-grow: 1;
}

@media screen and (max-width: 700px) {
  .messages {
    width: 100%;
    max-width: initial;
    border-radius: 0;
    border: none;
    font-size: 16px;
    margin-bottom: 3px;
    margin-top: 0;
  }
}
</style>
