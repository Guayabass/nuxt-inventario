<template>
  <div class="w-screen h-screen bg-white">
    <Menubar
      :model="items"
      :pt="ptClasses"
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

const ptClasses = ref({
  root: "bg-primarycolor border-none",
  itemContent:
    "hover:bg-secondarycolor hover:rounded active:rounded focus:rounded",
  itemIcon: "text-thirdcolor",
});
</script>

<style>
:root{
  --p-menubar-item-focus-background: #80ED99;
  --p-menubar-item-border-radius: 4px;
  --p-menubar-base-item-border-radius: 4px;
}

</style>
