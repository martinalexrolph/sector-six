<template>
  <div class="container">
    <div class="title-container">
      <div>
        <div class="title-1">STORIES FROM</div>
        <div class="title-2" style="font-weight: 500;">SECTOR</div>
        <div class="title-2">SIX</div>
      </div>

      <div class="overview">
        <p>
          A solo journalling RPG by Martin Rolph
        </p>
        <p>
          Somewhere between a game and a creative-writing exercise, in Stories from Sector Six the goal is simply to create a memorable character and story. Follow the prompts and create a retrospective interview about your character's involvement in an important moment in the history of Sector Six.  
        </p>
      </div>
    </div>

    <div style="max-width: 100%">
      <div class="primary-button">
        <button class="button" @click="learnToPlay()">LEARN TO PLAY</button>
      </div>

      <div class="secondary-buttons">
        <button class="button" @click="newGame()">NEW GAME</button>
        <button class="button" @click="loadGame()">LOAD GAME</button>
        <button class="button" @click="completedGames()">COMPLETED GAMES</button>
        <!-- <button class="button" @click="goTo('All Questions')">TEST ALL QUESTIONS</button> -->
        <!-- <button class="button">OPTIONS</button> -->
      </div>

      <div class="secondary-buttons" v-if="isElectron">
        <button class="button" @click="exit()">EXIT</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: Object
  },
  data() {
    return {
      isElectron: false
    }
  },
  async mounted() {
    this.isElectron = /electron/i.test(navigator.userAgent)
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
  width: 1000px;
  max-width: calc(100% - 20px);
  min-height: 100vh;
  text-align: center;
  padding: 50px 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

.title-1 {
  font-size: 25px;
  line-height: 1;
  font-weight: 400;
  text-align: left;
}

.title-2 {
  font-size: 100px;
  line-height: 0.75;
  font-weight: 700;
  letter-spacing: -5px;
  margin-bottom: 7px;
  text-align: left;
  margin-left: -8px;
}



.button {
  width: 400px;
}

.primary-button {
  max-width: 100%;
}

.primary-button .button {
  font-size: 30px;
}

.secondary-buttons .button {
  margin: 8px auto;
}

.secondary-buttons {
  margin: 30px 0;
  max-width: 100%;
}

.title-container {
  max-width: 400px;
}

.overview {
  font-size: 18px;
  text-align: left;
  margin-top: 40px;
}

@media screen and (max-width: 500px) {
  .title-1 {
    font-size: 20px;
  }

  .title-2 {
    font-size: 70px;
  }

  .overview {
    font-size: 14px;
  }

  .primary-button .button {
    font-size: 20px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    flex-direction: column;
    overflow: scroll;
  }

  .primary-button {
    margin-top: 20px;
  }
}
</style>
