<template>
    <div>
        Logged in
        <button @click="logout">log out</button>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const logout = () => {
    authStore.userLogged = false
    navigateTo('/auth')
}
</script>

<style>

</style>