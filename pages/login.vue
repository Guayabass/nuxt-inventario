<template>
    <section className="h-screen w-screen m-0 p-0 box-border">
        <img className="absolute bottom-0 left-0" src="~/assets/icons/waves.svg" alt="">
        <div>
            <img src="~/assets/icons/login.svg" alt="Man attempting to open a door">
            <form action="">
                <img src="~/assets/icons/avatar.svg" alt="picture of a faceless man">
                <h2>Sign in</h2>
                <div>
                    <i class="pi pi-user"></i>
                    <input type="text" placeholder="Username">
                </div>
                <div>
                    <i class="pi pi-lock"></i>
                    <input type="password" placeholder="Password">
                </div>
                <NuxtLink to="/forgotPassword"><p className="">Forgot Your Password?</p></NuxtLink>
                <NuxtLink to="/forgotPassword"><p className="">Don't have an account? Register here!</p></NuxtLink>
                <button>Login</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>
