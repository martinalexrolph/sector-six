<template>
  <div class="compose">
    <textarea
      class="textarea"
      @keypress.enter.prevent="submit(text)"
      rows="3"
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
  font-family: "Source Code Pro", monospace;
  width: 50px;
  background: #ddd;
  border-radius: 4px;
  border: 1px solid #eee;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
  font-weight: 700;
}

.submit:focus, .submit:hover {
  background: #eee;
  border-color: #fff;
}

.textarea {
  font-family: "Source Code Pro", monospace;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  background: none;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  resize: none;
  line-height: 1.3;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  border-right: none;
}

textarea:focus {
  background: #444;
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
