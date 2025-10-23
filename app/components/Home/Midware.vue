<script setup>
const storeProducts = useProductsStore();
</script>

<template>
  <HomeCarousel v-for="feature in storeProducts.featuredProducts" :key="feature.name" :title="$t('homeTitle.distributor')" :name="feature.name">
    <template #subtitle>
      <p class="demi mb-2 text-2xl">{{ feature.name }}</p>
    </template>

    <template #default>
      <div class="flex gap-4">
        <ProductCard v-for="product in feature.products" :key="product.productCode" :product="product" />
      </div>
    </template>
  </HomeCarousel>
</template>

<style scoped></style>
