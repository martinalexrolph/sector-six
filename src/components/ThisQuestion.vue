<template>
  <div class="next-question outline">
    <div class="heading">Question:</div>
    <b>- {{ question }}</b>
  </div>
</template>

<script>
export default {
  name: 'ThisQuestion',
  props: {
    question: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next-question {
  width: 90%;
  max-width: 800px;
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
  margin-bottom: 6px;
  font-size: 14px;
  background: #222;
  width: 200px;
  font-style: italic;
}
</style>
