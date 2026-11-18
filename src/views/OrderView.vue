<script setup>
import OrderCard from '@/components/OrderCard.vue';
var fishes = {
    fish: [
        {
            id: 1,
            name: "Salmon",
            price: 12.49
        },
        {
            id: 2,
            name: "Tuna",
            price: 8.49
        },
        {
            id: 3,
            name: "Trout",
            price: 4.99
        },
        {
            id: 4,
            name: "Cod",
            price: 9.99
        },
        {
            id: 5,
            name: "Swordfish",
            price: 15.99
        },
        {
            id: 6,
            name: "Mackerel",
            price: 6.49
        },
        {
            id: 7,
            name: "Herring",
            price: 3.99
        },
        {
            id: 8,
            name: "Catfish",
            price: 7.49
        },
        {
            id: 9,
            name: "Sardine",
            price: 2.99
        }
    ]
};
</script>

<template>
    <main>
        <OrderCard
        v-for="fish in fishes.fish"
        :key="fish.id"
        :name="fish.name"
        :price="fish.price"
        />
    </main>
</template>