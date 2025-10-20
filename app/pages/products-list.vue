<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();

await useAsyncData('products', storeProducts.initialFetchProducts);
</script>

<template>
  <div>
    <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="400" />
    <NuxtLink :to="`/${locale}`">Go to Home</NuxtLink>
    <p>{{ storeProducts.products?.length }}</p>
  </div>
  <AppButton>Test Button</AppButton>
</template>

<style scoped></style>
