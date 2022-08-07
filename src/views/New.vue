<template>
  <div class="menu-container">
    <div>
      <div class="title-1">--- NEW GAME ---</div>
    </div>

    <div class="menu-box">
      <h2>Identity Record</h2>
      <p>Please confirm your personal details</p>
      <div class="input-row">
        <label>NAME:</label>
        <input v-model="name"/>
      </div>
      <div class="input-row">
        <label>ORIGIN:</label>
        <input v-model="home"/>
      </div>
      <div class="input-row">
        <label>AGE:</label>
        <input v-model="age"/>
      </div>
      <div class="input-row">
        <label>PRONOUNS:</label>
        <select v-model="gender">
          <option value='male'>he/him</option>
          <option value='female'>she/her</option>
          <option value='neutral'>they/them</option>
        </select>
      </div>

      <h2>Options</h2>
      <div class="input-row">
        <label>LENGTH:</label>
        <select v-model="length">
          <option value='short'>Short interview (~15-20 minutes playtime)</option>
          <option value='long'>Long interview (~1-2 hour playtime)</option>
        </select>
      </div>
    </div>

    <div class="row-of-buttons">
      <button class="button" @click="goHome()">&lt; MAIN MENU</button>
      <button class="button" :disabled="!name" @click="newGame()">BEGIN ></button>
    </div>
  </div>
</template>

<script>
import { saveGame } from '../logic/saving'
import { newGameState } from '../logic/state'
import { location, firstName, lastName, integer, choose } from '../logic/helpers'
import { nanoid } from 'nanoid'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  data: function() {
    const gender = choose('male', 'female', 'neutral')
    return {
      name: `${firstName(gender)} ${lastName()}`,
      home: location().name,
      age: integer(16, 40),
      gender: gender,
      length: 'short'
    }
  },
  methods: {
    async newGame() {
      const gameState = newGameState(this.name, this.home, this.gender, this.length)
      const gameId = nanoid(10)
      await saveGame(gameId, gameState)
      this.$router.push({name: 'Game', params: {gameId: gameId}})
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

@media screen and (max-width: 500px) {
  .title-1 {
    font-size: 20px;
  }
}
</style>
