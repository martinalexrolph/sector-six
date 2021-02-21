<template>
  <div class="compose">
    <textarea
      class="textarea"
      @keypress.enter.prevent="submit(text)"
      rows="4"
      v-model="text"
      enterkeyhint="send"
    />
    <button class="submit" @click="submit(text)">
      >
    </button>
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
  text-align: left;
  margin: 0 auto 10px;
  display: flex;
}

.submit {
  width: 50px;
  font-size: 20px;
  padding: 10px;
  font-weight: 700;
}

.textarea {
  width: 100%;
  resize: none;
  margin-right: 10px;
}

@media screen and (max-width: 700px) {
  .compose {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 0;
  }

  .textarea {
    font-size: 16px
  }
}
</style>
