<script setup>
const { locale } = useI18n();
</script>

<template>
  <header>
    <NuxtLink :to="`/${locale}`"><AppImage src="/logo.png" alt="Spector and Co. Logo" width="214" height="70" /></NuxtLink>
    <nav></nav>
  </header>
</template>

<style scoped></style>
