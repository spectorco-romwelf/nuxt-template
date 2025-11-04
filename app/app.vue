<script setup>
const toaster = { position: 'top-center', progress: false, max: 3, expand: false, ui: { base: 'text-center mt-8' } };

useHead({
  title: 'Spector & Co.',
});
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" color="#000" />
  <UApp :toaster="toaster">
    <NuxtLayout>
      <!-- <Transition name="page" mode="out-in"> -->
      <NuxtPage />
      <!-- </Transition> -->
    </NuxtLayout>
  </UApp>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
