<template>
  <div class="answer">
    {{ answer.text }}
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    answer: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer {
  width: 100%;
  font-weight: 400;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}

</style>
