<script setup>
const { locale } = useI18n();
</script>

<template>
  <div>
    <NuxtLink :to="`/${locale}/products-list`">Go to products</NuxtLink>
    <h1 @click="test">{{ $t('hello') }}</h1>
  </div>
</template>

<style scoped></style>
