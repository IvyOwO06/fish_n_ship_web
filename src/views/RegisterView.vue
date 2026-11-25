<script setup>

</script>

<template>
    <main class="container auth-page py-5">
        <section class="card auth-card">
            <div class="card-body p-4 p-md-5">
                <p class="text-primary fw-semibold text-uppercase mb-2">Join Fish 'n Ship</p>
                <h1 class="h2 fw-bold mb-4">Create an account</h1>
                <form @submit.prevent>
                    <div class="mb-3">
                        <label class="form-label" for="username">Username</label>
                        <input class="form-control" type="text" name="username" id="username" autocomplete="username" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control" type="email" name="email" id="email" autocomplete="email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="password">Create password</label>
                        <input class="form-control" type="password" name="password" id="password" autocomplete="new-password" required>
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="cpassword">Confirm password</label>
                        <input class="form-control" type="password" name="cpassword" id="cpassword" autocomplete="new-password" required>
                    </div>
                    <button class="btn btn-primary w-100" type="submit">Create account</button>
                </form>
            </div>
        </section>
    </main>
</template>
