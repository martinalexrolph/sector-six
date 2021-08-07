<template>
  <div class="next-question" v-bind:class="{'walkthrough-highlight': highlighted}">
    <div class="heading" v-if="questions[1]">Upcoming questions</div>
    <div class="first-question outline" v-if="questions[1]">
      <b>{{ questions[1] }}</b>
    </div>
    <div v-if="questions[2]" class="outline">
      <b>{{ questions[2] }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NextQuestion',
  props: {
    questions: Array,
    highlighted: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next-question {
  width: 100%;
  text-align: left;
  margin: 10px auto;
}

.first-question {
  margin-bottom: 15px;
}

.end-of-interview {
  text-align: center;
}

.heading {
  margin-bottom: 8px;
  font-size: 14px;
  width: 200px;
  font-style: italic;
}
</style>
