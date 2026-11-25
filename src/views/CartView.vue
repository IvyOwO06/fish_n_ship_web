<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import CartCard from '@/components/CartCard.vue'
import { useCart } from '@/composables/useCart'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { cart, clearCart } = useCart()
const { loggedIn } = useAuth()

function emptyCart() {
    clearCart()
    router.push('/')
}

function placeOrder() {
    console.log("Order placed", cart.value)
    clearCart()
    router.push('/')
}

const totalPrice = computed(() =>
    cart.value.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0),
)
</script>

<template>
    <main class="container py-4">
        <CartCard v-for="item in cart" :key="item.id" :name="item.name" :price="item.price" :quantity="item.quantity" />

        <p class="fs-4 fw-bold text-end">Total: €{{ totalPrice.toFixed(2) }}</p>
        <div v-if="cart.length > 0" class="d-flex flex-wrap justify-content-end gap-2">
            <button class="btn btn-outline-danger" @click="emptyCart">
                Empty Cart
            </button>
            <button v-if="loggedIn" class="btn btn-outline-primary" @click="placeOrder">
                Place Order
            </button>
        </div>
    </main>
</template>
