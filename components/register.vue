<template>
    <img className="absolute bottom-0 left-0" src="~/assets/icons/waves.svg" alt="">
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img src="~/assets/icons/signup.svg" alt="Sign up form"
            className="lg:block hidden w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto">
        <form className="flex flex-col justify-center items-center">
            <img className="w-32 hover:scale-150 transition-all duration-500" src="~/assets/icons/avatar.svg"
                alt="picture of a faceless man">
            <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">Sign up</h2>
            <div className="relative">
                <i class="pi pi-user absolute text-primarycolor text-xl"></i>
                <input type="text" placeholder="Username"
                    className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display capitalize text-lg">
            </div>
            <div className="relative mt-8">
                <i class="pi pi-lock absolute text-primarycolor text-xl"></i>
                <input type="password" placeholder="Password"
                    className="pl-8 border-b-2 focus:outline-none focus:border-primarycolor transition-all duration-500 font-display capitalize text-lg">
            </div>
                <p @click="onClick" className="mt-4 text-gray-600 font-bold font-display cursor-pointer">Already have an account? Login here!</p>
            <button
                className="py-3 px-20 bg-primarycolor rounded-full text-whte font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Register</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore()

//const registerDB = async () => {}

const onClick = () => {
    authStore.isLogged = !authStore.isLogged
}
</script>

<style scoped></style>