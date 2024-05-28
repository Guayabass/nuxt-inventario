<template>
    <section className="h-screen w-screen m-0 p-0 box-border">
        <div className="h-screen w-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
            <img src="~/assets/icons/login.svg" alt="Man attempting to open a door"
                className="lg:block hidden w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto">
            <form className="flex flex-col justify-center items-center">
                <img className="w-32 hover:scale-150 transition-all duration-500" src="~/assets/icons/avatar.svg"
                    alt="picture of a faceless man">
                <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">Sign in</h2>
                <div className="relative">
                    <i class="pi pi-user absolute text-primarycolor text-xl"></i>
                    <input v-model="username" type="text" placeholder="Username"
                        className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display text-lg">
                </div>
                <div className="relative mt-8">
                    <i class="pi pi-lock absolute text-primarycolor text-xl"></i>
                    <input v-model="password" type="password" placeholder="Password"
                        className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display text-lg">
                </div>
                <NuxtLink to="/forgotPassword">
                    <p className="mt-4 text-gray-600 font-bold font-display">Forgot Your Password?</p>
                </NuxtLink>
                    <p @click="onClick" className="mt-4 text-gray-600 font-bold font-display cursor-pointer">Don't have an account? Register here!</p>
                <button
                    @click="checkLogin" className="py-3 px-20 bg-primarycolor rounded-full text-whte font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore()

const username = ref("")
const password = ref("")

const user = {
  username: 'test@gmail.com',
  password: '123456',
}
const checkLogin = () => {
    if (username.value === user.username && password.value === user.password ) {
        authStore.userLogged = true
        navigateTo('/dashboard');
    } 
}

const onClick = () => {
    authStore.isLogged = !authStore.isLogged
}
</script>