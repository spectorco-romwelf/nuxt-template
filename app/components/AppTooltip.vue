<script setup>
defineProps(['text']);
</script>

<template>
  <UTooltip :arrow="true" :delay-duration="0" :text="text" :ui="{ content: 'bg-black text-white text-sm px-2 py-4', arrow: 'fill-black' }">
    <slot />
  </UTooltip>
</template>

<style scoped></style>
