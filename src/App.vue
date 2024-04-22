<template>
  <h1>TESTE CYPRESS FELIPE MOURÃO</h1>
  <HelloWorld msg="Conhecendo o Cypress com Vuejs!" />
  <input class="hello-world" />
  <button @click="hello">Clique aqui</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    hello() {
      alert("Tchau!");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
