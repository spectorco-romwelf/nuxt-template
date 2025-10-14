<script setup>
const { locale } = useI18n();

const { data } = await useFetch('/api/distributor-products');
</script>

<template>
  <div>
    <!-- <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="200" /> -->
    <AppImage src="/logo.png" alt="Spector and Co. Logo" width="214" height="70" />

    <NuxtLink :to="`/${locale}/products-list`">Go to products</NuxtLink>
    <h1>{{ $t('hello') }}</h1>
    <p class="regular">Regular</p>
    <p class="medium">Medium</p>
    <p class="demi">Demi</p>
    <p class="bold">Bold</p>
    <p class="extrabold">ExtraBold</p>
  </div>
</template>

<style scoped></style>
