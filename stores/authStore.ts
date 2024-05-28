import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', () => {
    const isLogged = ref(false)
    const userLogged = ref(false)
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //   count.value++
    // }
    return { isLogged, userLogged } //PERSIST
  }, {
    persist: {
      storage: persistedState.sessionStorage,
    }
  }) 