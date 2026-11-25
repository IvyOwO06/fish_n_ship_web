<script setup>
const props = defineProps({
  id: Number,
  name: String,
  image: String,
  price: Number,
})

const emit = defineEmits(['addToCart'])

function addToCart() {
  emit('addToCart', {
    id: props.id,
    name: props.name,
    price: props.price,
  })
}
</script>

<template>
  <div class="col">
    <div class="card h-100 shadow-sm">
      <img v-if="image" :src="image" :alt="name" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <h2 class="h5 card-title">{{ name }}</h2>
        <p class="card-text fs-5 fw-semibold mt-auto">€{{ price }}</p>
        <button class="btn btn-primary" @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>
