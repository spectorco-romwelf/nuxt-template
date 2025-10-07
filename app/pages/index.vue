<script setup>
const { locale } = useI18n();

const { data } = await useFetch('/api/distributor-products');

console.log(data.value);
</script>

<template>
  <div>
    <NuxtLink :to="`/${locale}/products-list`">Go to products</NuxtLink>
    <h1 @click="test">{{ $t('hello') }}</h1>
  </div>
</template>

<style scoped></style>
