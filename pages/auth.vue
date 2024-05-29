<template>
  <div className="h-screen w-screen m-0 p-0 box-border">
    <img
      className="absolute bottom-0 left-0"
      src="~/assets/icons/waves.svg"
      alt=""
    />
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/authStore";
import register from "~/components/register.vue";
import login from "~/components/login.vue";

const authStore = useAuthStore();
const activeComponent = shallowRef(login);

const { isLogged } = storeToRefs(authStore);

watch(isLogged, () => {
  if (authStore.isLogged) {
    activeComponent.value = register;
  } else {
    activeComponent.value = login;
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from{
  transform: translateY(-200px);
}

.fade-leave-to{
  transform: translateY(200px);
}
</style>
