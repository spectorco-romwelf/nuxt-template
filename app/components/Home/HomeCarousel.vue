<script setup>
const props = defineProps({
  title: String,
  name: {
    type: String,
    required: true,
  },
  scrollAmount: {
    type: Number,
    default: 993,
  },
  showScrollbar: {
    type: Boolean,
    default: true,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
});

const carouselRef = ref(null);

const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -props.scrollAmount, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: props.scrollAmount, behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="main-container relative mt-24 py-8">
    <p v-if="title" class="mb-8 text-center text-5xl font-bold uppercase">{{ title }}</p>

    <div class="mx-auto">
      <slot name="subtitle"></slot>
      <div class="scroll-container flex w-full items-center gap-4 overflow-x-auto pb-2" ref="carouselRef" :class="{ 'hide-scrollbar': !showScrollbar }">
        <slot></slot>
      </div>

      <div v-if="showArrow" class="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        <button @click="scrollLeft" class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-all hover:bg-black">
          <Icon name="lucide:arrow-left" class="text-2xl text-white" />
        </button>

        <button @click="scrollRight" class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-all hover:bg-black">
          <Icon name="lucide:arrow-right" class="text-2xl text-white" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
