<script setup>
defineProps({
    name: String,
    price: Number,
    quantity: Number,
})
</script>

<template>
    <div class="card mb-3">
        <div class="card-body d-flex flex-wrap align-items-center justify-content-between gap-2">
            <h2 class="h5 mb-0">{{ name }}</h2>
            <p class="mb-0">€{{ price }}</p>
            <p class="mb-0">Quantity: {{ quantity }}</p>
        </div>
    </div>
</template>
