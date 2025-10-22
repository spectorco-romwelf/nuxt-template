<script setup>
const storeProducts = useProductsStore();

const carouselRefs = ref({});

const setCarouselRef = (el, name) => {
  if (el) {
    carouselRefs.value[name] = el;
  }
};

const scrollCarouselLeft = (name) => {
  const el = carouselRefs.value[name];
  if (el) {
    el.scrollBy({ left: -993, behavior: 'smooth' });
  }
};

const scrollCarouselRight = (name) => {
  const el = carouselRefs.value[name];
  if (el) {
    el.scrollBy({ left: 993, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="main-container relative mt-24 py-8">
    <p class="text-center text-5xl font-bold uppercase">Distributor Go Tos</p>

    <div class="mx-auto" v-for="feature in storeProducts.featuredProducts">
      <p class="demi mb-2 text-2xl">{{ feature.name }}</p>

      <div class="scroll-container flex w-full items-center gap-4 overflow-x-auto pb-2" :ref="(el) => setCarouselRef(el, feature.name)">
        <ProductCard :product="product" v-for="product in feature.products" :key="product.productCode" />
      </div>

      <div class="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        <button @click="scrollCarouselLeft(feature.name)" class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-all hover:bg-black">
          <Icon name="lucide:arrow-left" class="text-2xl text-white" />
        </button>
        <button @click="scrollCarouselRight(feature.name)" class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-all hover:bg-black">
          <Icon name="lucide:arrow-right" class="text-2xl text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
