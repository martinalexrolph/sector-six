<template>
  <div class="next-question">
    <b>Next question:</b> <i>{{ question.text }}</i>
  </div>
</template>

<script>
export default {
  name: 'NextQuestion',
  props: {
    question: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next-question {
  width: 90%;
  max-width: 800px;
  border: 1px solid #eee;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
  margin: 10px auto;
}
</style>
