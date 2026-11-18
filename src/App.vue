<script setup>
import AppHeader from './components/AppHeader.vue';
var loggedIn = true
const username = "Sam"
</script>

<template>
  <AppHeader />

  <nav>
    <RouterLink to="/">Home</RouterLink><br>
    <RouterLink to="/about">About us</RouterLink><br>
    <RouterLink v-if="loggedIn" to="/order">Order</RouterLink><br v-if="loggedIn">
    <RouterLink v-if="loggedIn" to="">{{username}}</RouterLink>
    <RouterLink v-else to="/login">Log In</RouterLink><br>
  </nav>

  <RouterView />
</template>

<style scoped></style>
