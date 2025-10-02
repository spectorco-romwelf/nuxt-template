<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();

storeProducts.initialFetchProducts();

const test = () => {
  console.log('storeProducts.products →', storeProducts.products);
};
</script>

<template>
  <div>
    <NuxtLink :to="`/${locale}/products-list`">Go to products</NuxtLink>
    <h1 @click="test">{{ $t('hello') }}</h1>
    <p v-if="!storeProducts.isLoading">{{ storeProducts.products?.length }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped></style>
