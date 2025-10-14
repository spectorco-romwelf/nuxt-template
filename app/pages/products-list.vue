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
    <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="400" />
    <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="400" />
    <NuxtLink :to="`/${locale}`">Go to Home</NuxtLink>
    <h1 @click="test">{{ $t('hello') }}</h1>
    <p v-if="!storeProducts.isLoading">{{ storeProducts.products?.length }}</p>
    <p v-else>Loading...</p>
  </div>
  <AppButton>Test Button</AppButton>
</template>

<style scoped></style>
