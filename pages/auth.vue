<template>
  <login v-if="authStore.isLogged" />
  <register v-else/>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore()
</script>

<style>

</style>