<template>
  <div class="app">
    <MainVue/>
  </div>
</template>

<script>
import MainVue from './components/MainVue.vue'

export default {
  name: 'App',
  components: {
    MainVue
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body{
  margin: 0;
  padding:0;
}
</style>
