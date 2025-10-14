<script setup>
const { locale } = useI18n();

const { data } = await useFetch('/api/distributor-products');
</script>

<template>
  <div>
    <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="200" />
    <NuxtLink :to="`/${locale}/products-list`">Go to products</NuxtLink>
    <h1>{{ $t('hello') }}</h1>
  </div>
</template>

<style scoped></style>
