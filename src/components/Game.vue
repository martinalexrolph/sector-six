<template>
  <div class="game">

    <div class="messages">
      <Introduction v-bind:introduction="gameState.introduction"/>
      <div v-for="(message, index) in gameState.messages" v-bind:key="index">
        <Question v-if="message.type === 'question'" v-bind:question="message"/>
        <Answer v-if="message.type === 'answer'" v-bind:answer="message"/>
      </div>
    </div>
    <Compose v-bind:onSubmit="submitAnswer" />
    <NextQuestion v-bind:question="{text: gameState.questions[0]}"/>
  </div>
</template>

<script>
import { newGameState } from '../logic/state'
import Question from './Question'
import Answer from './Answer'
import Compose from './Compose'
import NextQuestion from './NextQuestion'
import Introduction from './Introduction'

export default {
  name: 'HelloWorld',
  data() {
    return {
      gameState: newGameState(),
    }
  },
  mounted() {

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
    }
  },
  props: {

  },
  components: {
    Question, Answer, Compose, NextQuestion, Introduction
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.messages {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  overflow: scroll;
  flex-grow: 1;
}
</style>
