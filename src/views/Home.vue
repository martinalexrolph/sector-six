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
      <button class="button">NEW GAME</button>
      <button class="button">LOAD GAME</button>
      <button class="button">OPTIONS</button>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  methods: {
    newGame() {
      this.$router.push({name: 'Game', params: {gameId: nanoid(10)}})
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
  padding: 10px;
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
  font-family: "Source Code Pro", monospace;
  width: 400px;
  background: none;
  border-radius: 4px;
  border: 1px solid #eee;
  font-size: 30px;
  font-weight: 400;
  padding: 10px;
  outline: none;
  font-weight: 700;
  color: #fff;
  display: block;
  margin: 0 auto;
  box-shadow: 0px 0px 6px #49ff4e70, inset 0px 0px 6px #49ff4e70;
  text-shadow: 0px 0px 6px #49ff4e70;
}

.button:hover {
  background: #444
}

.secondary-buttons .button {
  font-size: 20px;
  margin: 8px auto;
}


</style>
