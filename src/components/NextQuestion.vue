<template>
  <div class="next-question outline">
    <div class="heading">Upcoming questions</div>
    <div class="first-question" v-if="questions[0]">
      <b>{{ questions[0] }}</b>
    </div>
    <div v-if="questions[1]">
      <b>{{ questions[1] }}</b>
    </div>
    <div class="end-of-interview" v-if="!questions[1]">
      --- END OF INTERVIEW ---
    </div>
  </div>
</template>

<script>
export default {
  name: 'NextQuestion',
  props: {
    questions: Array
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
  background: #222;
  width: 200px;
  font-style: italic;
}
</style>
