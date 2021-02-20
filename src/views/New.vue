<template>
  <div class="menu-container">
    <div>
      <div class="title-1">--- NEW GAME ---</div>
    </div>

    <div class="menu-box">
      <div class="input-row">
        <label>NAME:</label>
        <input v-model="name"/>
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
import { nanoid } from 'nanoid'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  data: function() {
    return {
      name: ''
    }
  },
  methods: {
    async newGame() {
      const gameState = newGameState(this.name)
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
