<script setup>
const storeProducts = useProductsStore();

await useAsyncData('home-products', storeProducts.initialFetchHomeProducts);
</script>

<template>
  <div>
    <div class="main-container">
      <Categories />
    </div>

    <Banners />

    <div class="home-background">
      <Midware />
    </div>

    <div class="home-background">
      <Brandings />
    </div>

    <div class="home-background">
      <LeadBrandings />
    </div>

    <div class="home-background">
      <Feedback />
    </div>

    <div class="home-background">
      <Certifications />
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.home-background {
  @apply bg-[#f8f9fa];
}
</style>
