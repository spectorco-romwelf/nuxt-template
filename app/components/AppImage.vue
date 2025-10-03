<script setup>
defineProps({
  src: String,
  width: String,
  height: String,
  alt: String,
});
</script>

<template>
  <NuxtImg :src="src" :key="src" :alt="alt" :width="width" :height="height" :placeholder="[width, height]" loading="lazy" />
</template>

<style scoped></style>
