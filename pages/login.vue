<template>
    <section className="h-screen w-screen m-0 p-0 box-border">
        <img className="absolute bottom-0 left-0" src="~/assets/icons/waves.svg" alt="">
        <div className="flex flex-col justify-center items-center">
            <img src="~/assets/icons/login.svg" alt="Man attempting to open a door">
            <form className="flex flex-col justify-center items-center">
                <img className="w-32" src="~/assets/icons/avatar.svg" alt="picture of a faceless man">
                <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">Sign in</h2>
                <div className="relative">
                    <i class="pi pi-user absolute text-primarycolor text-xl"></i>
                    <input type="text" placeholder="Username" className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display capitalize text-lg">
                </div>
                <div className="relative mt-8">
                    <i class="pi pi-lock absolute text-primarycolor text-xl"></i>
                    <input type="password" placeholder="Password" className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display capitalize text-lg">
                </div >
                <NuxtLink to="/forgotPassword">
                    <p className="mt-4 text-gray-600 font-bold font-display">Forgot Your Password?</p>
                </NuxtLink>
                <NuxtLink to="/Register">
                    <p className="mt-4 text-gray-600 font-bold font-display">Don't have an account? Register here!</p>
                </NuxtLink>
                <button className="py-3 px-20 bg-primarycolor rounded-full text-whte font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>
