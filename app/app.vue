<script setup>
const toaster = { position: 'top-center', progress: false, max: 3, expand: false, ui: { base: 'text-center mt-8' } };
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" color="#000" />
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
