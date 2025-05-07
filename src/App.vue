<script setup>
  import { RouterView } from "vue-router";
  import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-decoration: none;
  width: 50%;
  margin: 0 auto;
}

a{
  text-decoration: none;
  color: #2c3e50;
}
</style>