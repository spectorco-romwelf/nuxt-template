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
  <div>
    <div class="main-container">
      <Categories />
    </div>

    <Banners />

    <UButton label="Add to Storyboard" color="neutral" variant="outline" icon="i-lucide-plus" @click="testToast" />
    <p class="regular">Regular</p>
    <p class="medium">Medium</p>
    <p class="demi">Demi</p>
    <p class="bold">Bold</p>
    <p class="extrabold">ExtraBold</p>
  </div>
</template>

<style scoped></style>
