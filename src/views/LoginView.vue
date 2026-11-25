<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function toRegister() {
    router.push('/register')
}
</script>

<template>
    <main class="container auth-page py-5">
        <section class="card auth-card">
            <div class="card-body p-4 p-md-5">
                <p class="text-primary fw-semibold text-uppercase mb-2">Welcome back</p>
                <h1 class="h2 fw-bold mb-4">Log in</h1>
                <form @submit.prevent>
                    <div class="mb-3">
                        <label class="form-label" for="username">Username</label>
                        <input class="form-control" type="text" name="username" id="username" autocomplete="username" required>
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="password">Password</label>
                        <input class="form-control" type="password" name="password" id="password" autocomplete="current-password" required>
                    </div>
                    <button class="btn btn-primary w-100 mb-3" type="submit">Log in</button>
                    <p class="text-center text-secondary mb-0">
                        New here?
                        <button class="btn btn-link p-0 align-baseline" type="button" @click="toRegister">Create an account</button>
                    </p>
                </form>
            </div>
        </section>
    </main>
</template>
