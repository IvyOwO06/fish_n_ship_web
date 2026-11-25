<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { logout } = useAuth()

logout()
router.push('/')
</script>

<template>

</template>
