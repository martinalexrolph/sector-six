<template>
  <div class="menu-container">
    <div>
      <div class="title-1">--- NEW GAME ---</div>
    </div>

    <div class="options">
      <div class="input-row">
        <label>NAME:</label>
        <input v-model="name"/>
      </div>
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="goHome()">&lt; GO BACK</button>
      <button class="button" @click="newGame()">BEGIN ></button>
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

.button:hover {
  background: #444
}

.options {
  width: 100%;
  box-shadow: 0px 0px 6px #49ff4e70, inset 0px 0px 6px #49ff4e70;
  background: none;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 460px;
  padding: 20px;
  overflow: scroll;
  text-align: left;
}

.secondary-buttons {
  display: flex;
  justify-content: center;
}

</style>
