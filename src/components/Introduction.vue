<template>
  <div class="container">
    <div class="title">{{ introduction.title }}</div>
    {{ introduction.text }}
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    introduction: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 40px;
  margin-bottom: 40px;
  line-height: 1.15;
  font-weight: 700;
  font-style: italic;
}

.container {
  width: 100%;
  font-weight: 400;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}
</style>
