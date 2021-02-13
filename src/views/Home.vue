<template>
  <div class="container">
    <div>
      <div class="title-1">----- MEMORIES OF THE -----</div>
      <div class="title-2">REBELLION</div>
      <div class="title-1">----- by Martin Rolph -----</div>
    </div>

    <div class="primary-button">
      <button class="button" @click="newGame()">LEARN TO PLAY</button>
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="newGame()">NEW GAME</button>
      <button class="button" @click="loadGame()">LOAD GAME</button>
      <button class="button">OPTIONS</button>
    </div>
  </div>
</template>

<script>
// import { nanoid } from 'nanoid'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  methods: {
    newGame() {
      // this.$router.push({name: 'Game', params: {gameId: nanoid(10)}})
      this.$router.push({name: 'New'})
    },
    loadGame() {
      this.$router.push({name: 'Load'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px;
  height: 100%;
  text-align: center;
  padding: 50px 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}

.title-1 {
  font-size: 24px;
  line-height: 1;
  font-weight: 400;
  padding-right: 2px;
}

.title-2 {
  font-size: 120px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -5px;
  margin-bottom: 7px;
}

.button {
  width: 400px;
  font-size: 30px;
}

.secondary-buttons .button {
  font-size: 20px;
  margin: 8px auto;
}


</style>
