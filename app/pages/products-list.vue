<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();

storeProducts.initialFetchProducts();

const test = () => {
  console.log('Products:', storeProducts.products);
  storeProducts.products = 'lmao';
};
</script>

<template>
  <div>
    <NuxtLink :to="`/${locale}`">Go to Home</NuxtLink>
    <h1 @click="test">{{ $t('hello') }}</h1>
    <p v-if="!storeProducts.isLoading">{{ storeProducts.products?.length }}</p>
    <p v-else>Loading...</p>
  </div>
  <AppButton>Test Button</AppButton>
</template>

<style scoped></style>
