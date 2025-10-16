<script setup>
const { locale } = useI18n();
</script>

<template>
  <header class="sticky top-0 z-10 h-20 bg-white shadow">
    <nav class="main-container flex h-full items-center justify-between">
      <NuxtLink :to="`/${locale}`">
        <AppImage src="/logo.png" alt="Spector and Co. Logo" width="214" height="70" class="w-34" />
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped></style>
