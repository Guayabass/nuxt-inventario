export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    if (!authStore.userLogged && to.path === '/dashboard' ){
        return abortNavigation('Please login first.')
    } else if (authStore.userLogged && to.path === '/auth') {
        return navigateTo('/dashboard');
    }
})

