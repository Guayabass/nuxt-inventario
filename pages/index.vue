<template>
  <div class="w-screen h-screen">
    <Menubar
      :pt="{
        root: {
          class: [
            'relative',
            'flex',
            'items-center',
            'p-2',
            'rounded-md',
            'bg-surface-50 dark:bg-primarycolor',
            'border border-surface-200 dark:border-surface-700',
          ],
        },
      }"
      :model="items"
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
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>
