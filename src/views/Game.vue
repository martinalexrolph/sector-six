<template>
  <div v-if="!loading" class="game">
    <button class="home-button" @click="goHome()">
      &lt; HOME
    </button>

    <div class="main-container outline">
      <div class="messages">
        <Introduction v-bind:introduction="gameState.introduction"/>
        <div v-for="(message, index) in gameState.messages" v-bind:key="index">
          <Question v-if="message.type === 'question'" v-bind:question="message"/>
          <Answer v-if="message.type === 'answer'" v-bind:answer="message"/>
        </div>
        <div class="end-of-messages"></div>
      </div>
    </div>

    <div class="controls">
      <ThisQuestion v-if="!gameState.completed" v-bind:question="gameState.questions[0]"/>
      <Compose v-if="!gameState.completed" v-bind:onSubmit="submitAnswer" v-bind:onUndo="undo" v-bind:canUndo="gameState.messages.length > 1" />
      <NextQuestion v-if="!gameState.completed" v-bind:questions="gameState.questions"/>
      <div class="game-complete" v-if="gameState.completed">
        <div class="interview-over">--- INTERVIEW OVER ---</div>
        
        <div>
          <router-link class="button" to='/new'>NEW GAME</router-link>
          <router-link class="button" to='/'>MAIN MENU</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newGameState } from '../logic/state'
import { saveGame, loadGame } from '../logic/saving'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Compose from '../components/Compose'
import ThisQuestion from '../components/ThisQuestion'
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
      console.log(this.gameState.questions);
      if (this.gameState.questions.length > 1) {
        this.gameState.messages.push({
          text: this.gameState.questions.shift(),
          type: 'question'
        })
      } else {
        this.gameState.completed = true
      }

      this.gameState.messages.push({
        text: text,
        type: 'answer'
      })

      this.$nextTick(function() {
        const el = this.$el.getElementsByClassName('end-of-messages')[0];
        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }
      })

      saveGame(this.$route.params.gameId, this.gameState)
    },
    undo() {
      const lastAnswer = this.gameState.messages.pop().text
      const lastQuestion = this.gameState.messages.pop().text
      this.gameState.questions.unshift(lastQuestion)
      return lastAnswer
    },
    goHome() {
      this.$router.push({name: 'Home'})
    }
  },
  props: {

  },
  components: {
    Question, Answer, Compose, NextQuestion, ThisQuestion, Introduction
  }
}
</script>

<style scoped>
.game {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: hidden;
}

.messages {
  font-size: 20px;
  width: 100%;
}

.main-container {
  width: 100%;
  max-width: 750px;
  height: calc(100vh - 60px);
  margin: 30px;
  overflow: auto;
  flex-grow: 1;
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
  text-align: center;
  margin: 0 auto 10px;
}

.button {
  width: 400px;
  font-size: 20px;
  margin: 8px auto;
}

.interview-over {
  margin-bottom: 18px;
  font-size: 30px;
  font-weight: 700;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 550px;
  margin-right: 30px;
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
