<template>
  <div class="compose">
    <textarea class="textarea" rows="4" v-model="text"/>
    <button class="submit" @click="submit(text)">Submit answer</button>
  </div>
</template>

<script>
export default {
  name: 'Compose',
  data: function() {
    return {
      text: '',
    }
  },
  
  methods: {
    submit(text) {
      this.text = ''
      this.onSubmit(text)
    }
  },
  props: {
    onSubmit: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compose {
  width: 90%;
  max-width: 800px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-align: left;
  margin: 10px auto;
}

.submit {
  font-family: "Source Code Pro", monospace;
  width: 100%;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  margin-top: 10px;
}

.textarea {
  border: 1px solid #eee;
  padding: 10px;
  width: 100%;
  background: none;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  resize: none;
  margin-bottom: 10px;
  line-height: 1.3;
}
</style>
