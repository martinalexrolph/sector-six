<template>
  <div class="next-question" v-bind:class="{'walkthrough-highlight': highlighted}">
    <div class="heading">Current question:</div>
    <div class="outline">
      <b>{{ question }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThisQuestion',
  props: {
    question: String,
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
  margin-bottom: 6px;
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
