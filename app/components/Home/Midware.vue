<script setup>
const storeProducts = useProductsStore();
</script>

<template>
  <div class="mt-24">
    <p class="text-center text-5xl font-bold uppercase">Distributor Go Tos</p>

    <div class="mx-auto" v-for="feature in storeProducts.featuredProducts">
      <p class="demi mb-2 text-2xl">{{ feature.name }}</p>
      <!-- scrollable row -->
      <div class="flex w-full items-center gap-4 overflow-x-auto pb-2">
        <ProductCard :product="product" v-for="product in feature.products" :key="product.productCode" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
