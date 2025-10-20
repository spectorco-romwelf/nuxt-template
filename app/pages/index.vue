<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();

await useAsyncData('home-products', storeProducts.initialFetchHomeProducts);

const { toastSuccess } = useToaster();

function testToast() {
  toastSuccess('Product has been added successfully!');
}
</script>

<template>
  <div class="main-container mt-24">
    <!-- <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="200" /> -->
    <AppImage src="/logo.png" alt="Spector and Co. Logo" width="214" height="70" />

    <NuxtLink :to="`/${locale}/products-list`" prefetch>Go to products</NuxtLink>
    <h1>{{ $t('hello') }}</h1>

    <div class="flex items-center gap-2">
      <div v-for="categoryProd in storeProducts.categoryProducts" :key="categoryProd.name">
        {{ categoryProd.name }}
        <AppImage :src="`${categoryProd.image}`" alt="Spector and Co. Logo" width="200" height="200" />
      </div>
    </div>
    <UButton label="Add to calendar" color="neutral" variant="outline" icon="i-lucide-plus" @click="testToast" />
    <p class="regular">Regular</p>
    <p class="medium">Medium</p>
    <p class="demi">Demi</p>
    <p class="bold">Bold</p>
    <p class="extrabold">ExtraBold</p>
  </div>
</template>

<style scoped></style>
