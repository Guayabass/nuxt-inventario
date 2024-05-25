export default defineNuxtRouteMiddleware(() => {
    const user = ref(false)
    if (!user){
        return navigateTo('/auth');
    }
})

