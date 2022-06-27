<script setup>
import { useSpeechRecognition } from './composable/useSpeechRecognition';

const { isListening, isSupported, result, error, stop, start } = useSpeechRecognition({
  lang: 'en-US',
  continuous: true,
  interimResults: true,
})
</script>

<template>
  <div class="app">
    <div v-if="!isSupported">
      Your browser does not support SpeechRecognition API,
      <a href="https://caniuse.com/mdn-api_speechrecognition" target="_blank">more details</a>
    </div>
    <div v-else>
      <header>
        <h1> Speech Recognition </h1>
        <i class="header-icon fas fa-microphone-alt"></i>
      </header>
      <main>
        <div class="mic-buttons">
          <!-- To handle the controls -->
          <button v-if="!isListening" @click="start">
            Speak
          </button>
          <button v-if="isListening" class="orange" @click="stop">
            Stop
          </button>
        </div>
        <h2> English Transcript </h2>
        <!-- Conditionals to handle errors -->
        <p v-if="error">{{ error }}</p>
        <div v-else>
          <textarea v-model="result" class="text-transcript" cols="30" rows="10">  </textarea>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
* {
  background-color: #fff0f5;
  margin: 0px;
  padding: 5px;
}

header {
  display: flex;
}

h1 {
  font-size: 2rem;
}

.header-icon {
  font-size: 2rem;
}

main {
  margin: 20px;
}

.mic-buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.mic-buttons button {
  border: none;
  display: flex;
  background-color: white;
  box-shadow: 2px 2px 4px grey;
  font-size: 1rem;
  line-height: 2rem;
  color: #00acc1;
  border-radius: 10px;
  padding: 10px 20px;
}

.text-transcript {
  background-color: white;
  border: none;
  width: 100%;
  border-radius: 20px 0px 20px 0px;
  padding: 10px;
}
</style>

