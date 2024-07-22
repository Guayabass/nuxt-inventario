<template>
  <div class="w-screen h-screen bg-white">
    <Menubar
      :model="items"
      :ptOptions="{ mergeSections: false }"
      :pt="{
        root: 'bg-primarycolor border-none',
        itemContent:
          'hover:bg-secondarycolor hover:rounded focus:bg-secondarycolor focus:rounded active:bg-secondarycolor active:rounded',
        itemIcon: 'text-thirdcolor',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>
