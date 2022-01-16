<template>
  <div v-bind:class="{'walkthrough-highlight': highlighted}">
    <div class="heading">Your answer:</div>
    <div v-if="!showUndoConfirmation">
      <div class="compose" >
        <textarea
          class="textarea"
          @keypress.enter.prevent="submit(text)"
          v-model="text"
          enterkeyhint="send"
        />
        <div class="buttons">
          <button class="button primary" @click="submit(text)">
            SEND
          </button>
          <button class="button secondary" v-if="canUndo" @click="undo()">
            <!-- &#9100; -->UNDO
          </button>
        </div>
      </div>
    </div>

    <div class="compose" v-if="showUndoConfirmation">
      <div class="outline undo-message">
        <div><b>ARE YOU SURE YOU WANT TO UNDO?</b></div>
        You will lose the answer you are writing and will be able to edit your previous answer.
      </div>
      <div class="buttons">
        <button class="button primary" @click="confirmUndo()">YES</button>
        <button class="button secondary" @click="cancelUndo()">NO</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Compose',
  data: function() {
    return {
      text: '',
      showUndoConfirmation: false
    }
  },
  
  methods: {
    submit(text) {
      this.text = ''
      this.onSubmit(text)
    },
    undo() {
      this.showUndoConfirmation = true
    },
    cancelUndo() {
      this.showUndoConfirmation = false
    },
    confirmUndo() {
      this.showUndoConfirmation = false
      console.log(this.showUndoConfirmation)
      this.text = this.onUndo()
    }
  },
  props: {
    onSubmit: Function,
    onUndo: Function,
    canUndo: Boolean,
    highlighted: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compose {
  width: 100%;
  height: 180px;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  display: flex;
}

.heading {
  margin-bottom: 8px;
  font-size: 14px;
  width: 200px;
  font-style: italic;
  text-align: left;
}

.buttons {
  width: 75px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-shrink: 0;
}

.button {
  width: 100%;
  font-size: 20px;
  padding: 5px;
  flex-grow: 1;
  margin-bottom: 10px;
}

.button:last-child {
  margin-bottom: 0;
}

.primary {
  font-weight: 700;
  flex-grow: 1;
}

.secondary {
  flex-grow: 0;
  font-weight: 400;
}

.textarea {
  width: 100%;
  resize: none;
}

.undo-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

@media screen and (max-width: 700px) {
  .compose {
    width: 100%;
    margin-bottom: 0;
  }

  .textarea {
    font-size: 16px
  }
}
</style>
