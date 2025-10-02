<script setup>
const { locale } = useI18n();
// const { data } = $fetch('http://testin.ca/decdout-api/products');
</script>

<template>
  <div>
    <NuxtLink :to="`/${locale}/products`">Go to products</NuxtLink>
    <h1>{{ $t('hello') }}</h1>
  </div>
</template>

<style scoped></style>
