<template>
  <div v-if="!loading" class="game">
    <button class="home-button" @click="goHome()">
      &lt; HOME
    </button>
    <div class="main-container">
      <div class="messages">
        <div v-for="(question, index) in questions" v-bind:key="index">
          <Question v-bind:question="{text: question}"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { heroJourney } from '../logic/questions'
import Question from '../components/Question'

export default {
  name: 'HelloWorld',
  data() {
    return {
      questions: heroJourney(),
    }
  },
  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    }
  },
  props: {

  },
  components: {
    Question,
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
