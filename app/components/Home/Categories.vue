<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();
</script>

<template>
  <div class="my-12 flex items-center justify-center gap-4">
    <NuxtLink :to="`/${locale}/products-list?search=${$t(`category.${categoryProd.name}`)}`" v-for="categoryProd in storeProducts.categoryProducts" :key="categoryProd.name" class="group flex flex-col items-center justify-center gap-2">
      <AppImage :src="`${categoryProd.image}`" alt="Spector and Co. Logo" width="200" height="200" class="w-34 transition-all group-hover:scale-110" />
      <p class="font-bold text-neutral-700 transition-all group-hover:text-black">{{ $t(`category.${categoryProd.name}`) }}</p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
