<script setup>
import AppHeader from './components/AppHeader.vue'
import { useCart } from './composables/useCart'
import { useAuth } from './composables/useAuth'

const { loggedIn } = useAuth()
const { cart } = useCart()
</script>

<template>
  <AppHeader />

  <nav class="navbar navbar-expand navbar-light bg-light border-bottom">
    <div class="container">
      <div class="navbar-nav gap-2">
        <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
        <RouterLink class="nav-link" active-class="active" to="/about">About us</RouterLink>
        <!-- <RouterLink v-if="loggedIn" class="nav-link" active-class="active" to="/order">Order</RouterLink> -->
        <RouterLink v-if="loggedIn" class="nav-link" to="/logout">Log out</RouterLink>
        <RouterLink v-else class="nav-link" to="/login">Log in</RouterLink>
        <RouterLink v-if="cart.length > 0" class="nav-link" active-class="active" to="/cart">Cart</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
