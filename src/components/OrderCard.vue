<script setup>
const props = defineProps({
  id: Int16Array,
  name: String,
  image: String,
  price: Float16Array,
})

const emit = defineEmits(['addToCart'])

function addToCart() {
  emit('addToCart', props.id)
}

</script>

<template>
    <div class="order-card">
        <h3>{{ name }}</h3>

        <img :src="image" :alt="name">

        <p>{{ price }}</p>

        <button @click="addToCart">
            Add To cart
        </button>
    </div>
</template>