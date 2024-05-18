import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', () => {
    const isLogged = ref(false)
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }
  
    return { isLogged }
  })