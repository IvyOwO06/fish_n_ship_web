<script setup>
import { ref, onMounted } from 'vue'
import OrderCard from '@/components/OrderCard.vue'
import { useCart } from '@/composables/useCart'

const fishes = ref([])
const { addToCart } = useCart()

onMounted(async () => {
    const response = await fetch('/items.json')

    if (!response.ok) {
        throw new Error(`Could not load fish: ${response.status}`)
    }

    const data = await response.json()
    fishes.value = data.fish
})
</script>

<template>
    <main class="container py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <OrderCard v-for="fish in fishes" :key="fish.id" :id="fish.id" :name="fish.name" :price="fish.price"
                @add-to-cart="addToCart" />
        </div>
    </main>
</template>
