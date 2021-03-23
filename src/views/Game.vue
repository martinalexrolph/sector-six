<template>
  <div v-if="!loading" class="game">
    <button class="home-button" @click="goHome()">
      &lt; HOME
    </button>
    <div class="main-container">
      <div class="messages">
        <Introduction v-bind:introduction="gameState.introduction"/>
        <div v-for="(message, index) in gameState.messages" v-bind:key="index">
          <Question v-if="message.type === 'question'" v-bind:question="message"/>
          <Answer v-if="message.type === 'answer'" v-bind:answer="message"/>
        </div>
        <div class="end-of-messages"></div>
      </div>
    </div>
    <Compose v-if="!gameState.completed" v-bind:onSubmit="submitAnswer" />
    <NextQuestion v-if="!gameState.completed" v-bind:question="{text: gameState.questions[0]}"/>
    <div class="outline game-complete" v-if="gameState.completed">
      <b>Game complete!</b> Start a <router-link to='/new'>new game</router-link> or go to the <router-link to='/'>main menu</router-link>
    </div>
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
      gameState: null,
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

      if (this.gameState.questions.length) {
        this.gameState.messages.push({
          text: this.gameState.questions.shift(),
          type: 'question'
        })
      } else {
        this.gameState.completed = true
      }

      this.$nextTick(function() {
        const el = this.$el.getElementsByClassName('end-of-messages')[0];
        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }
      })

      saveGame(this.$route.params.gameId, this.gameState)
    },
    goHome() {
      this.$router.push({name: 'Home'})
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
  overflow: auto;
  flex-grow: 1;
  padding-top: 80px;
  padding-bottom: 20px;
}

.home-button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
}

.game-complete {
  width: 90%;
  max-width: 800px;
  text-align: left;
  margin: 0 auto 10px;
}

.button {
  width: 400px;
  font-size: 20px;
  margin: 8px auto;
}

@media screen and (max-width: 700px) {
  .main-container {
    padding-top: 40px;
  }

  .messages {
    width: 100%;
    max-width: initial;
    border-radius: 0;
    border: none;
    font-size: 16px;
    margin-bottom: 3px;
    margin-top: 0;
  }

  .game-complete {
    width: calc(100% - 20px);
    font-size: 16px;
    margin: 0 10px 10px;
  }
}
</style>
