<template>
  <div class="container">
    {{ question.text }}
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  font-weight: 700;
  text-align: left;
  border-radius: 4px;
  margin: 10px 0;
}
</style>
