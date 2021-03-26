<template>
  <div class="container">
    <div>
      <div class="title-1">STORIES FROM</div>
      <div class="title-2" style="font-weight: 500; margin-bottom: -25px;">SECTOR</div>
      <div class="title-2">SIX</div>
    </div>

    <div class="primary-button">
      <button class="button" @click="learnToPlay()">LEARN TO PLAY</button>
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="newGame()">NEW GAME</button>
      <button class="button" @click="loadGame()">LOAD GAME</button>
      <button class="button" @click="completedGames()">COMPLETED GAMES</button>
      <button class="button" @click="goTo('All Questions')">TEST ALL QUESTIONS</button>
      <!-- <button class="button">OPTIONS</button> -->
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="exit()">EXIT</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: Object
  },
  methods: {
    newGame() {
      this.$router.push({name: 'New'})
    },
    loadGame() {
      this.$router.push({name: 'Load'})
    },
    completedGames() {
      this.$router.push({name: 'Complete'})
    },
    learnToPlay() {
      this.$router.push({name: 'Learn'})
    },
    goTo(routeName) {
      this.$router.push({name: routeName})
    },
    exit() {
      window.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px;
  max-width: calc(100% - 20px);
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
  font-size: 35px;
  line-height: 1;
  font-weight: 400;
  margin-bottom: -10px;
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
}

.primary-button .button {
  font-size: 30px;
}

.secondary-buttons .button {
  margin: 8px auto;
}

@media screen and (max-height: 700px) {
  .primary-button .button {
    font-size: 26px;
  }

  .button {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .title-1 {
    font-size: 18px;
  }

  .title-2 {
    font-size: 80px;
    line-height: 0.9;
    margin-bottom: 4px;
  }

  .container {
    padding: 15px 10px;
  }
}

@media screen and (max-width: 700px) {
  .primary-button .button {
    font-size: 26px;
  }

  .title-1 {
    font-size: 20px;
  }

  .title-2 {
    font-size: 90px;
  }
}

@media screen and (max-width: 500px) {
  .primary-button .button {
    font-size: 18px;
  }

  .title-1 {
    font-size: 16px;
  }

  .title-2 {
    font-size: 70px;
  }
}


</style>
