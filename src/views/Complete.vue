<template>
  <div class="menu-container">
    <div>
      <div class="title-1">--- COMPLETED GAMES ---</div>
    </div>

    <div class="games">
      <button v-for="game in games" class="button game" :key="game.id" @click="loadGame(game.id)">
        <span class="game-name">{{game.name}}</span><br>{{game.updatedAt}}
        <span class="game-id">{{game.id}}</span>
      </button>
    </div>

    <div class="secondary-buttons">
      <button class="button" @click="goHome()">&lt; MAIN MENU</button>
    </div>
  </div>
</template>

<script>
import { getCompletedGames } from '../logic/saving'

export default {
  name: 'Question',
  props: {
    question: Object
  },
  async mounted() {
    this.games = await getCompletedGames()
  },
  data: function() {
    return {
      games: []
    }
  },
  methods: {
    loadGame(id) {
      this.$router.push({name: 'Game', params: {gameId: id}})
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
  width: 400px;
  font-size: 30px;
  display: block;
  margin: 0 auto;
}


.secondary-buttons .button {
  font-size: 20px;
  margin: 8px auto;
}

.games {
  width: 100%;
  box-shadow: 0px 0px 6px #49ff4e70, inset 0px 0px 6px #49ff4e70;
  background: none;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 460px;
  padding: 20px;
  overflow: auto;
}

.game {
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

.game:last-child {
  margin-bottom: 0;
}

.game-id {
  float: right
}

.game-name {
  font-weight: bold;
}

</style>
