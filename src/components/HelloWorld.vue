<template>
  <div class="hello">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Click me!</button>
    <input v-model="message" />

    <ol>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        <ToDo v-bind:todo="todo"></ToDo>
      </li>
    </ol>
  </div>
</template>

<script>
import ToDo from './ToDo'

export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 0,
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  props: {
    msg: String
  },
  components: {
    ToDo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
