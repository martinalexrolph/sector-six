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
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="goHome()">&lt; MAIN MENU</button>
      <button class="button" :disabled="!name" @click="newGame()">BEGIN ></button>
    </div>
  </div>
</template>

<script>
import { saveGame } from '../logic/saving'
import { newGameState } from '../logic/state'
import { location, firstName, lastName, integer } from '../logic/helpers'
import { nanoid } from 'nanoid'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  data: function() {
    return {
      name: `${firstName()} ${lastName()}`,
      home: location().name,
      age: integer(16, 40)
    }
  },
  methods: {
    async newGame() {
      const gameState = newGameState(this.name, this.home)
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


.button {
  width: 300px;
  max-width: calc(50% - 10px);
  margin: 0 5px;
}

.secondary-buttons {
  display: flex;
  justify-content: center;
}

</style>
