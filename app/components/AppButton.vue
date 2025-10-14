<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
});

const buttonClass = computed(() => {
  return {
    'btn-primary': props.variant === 'primary',
    'btn-secondary': props.variant === 'secondary',
    'btn-danger': props.variant === 'danger',
  };
});
</script>

<template>
  <button class="flex w-auto cursor-pointer items-center justify-center gap-1 rounded p-2 transition-all duration-200 ease-in-out" :class="buttonClass">
    <slot />
  </button>
</template>

<style scoped>
@reference "@/assets/css/main.css";
.btn-primary {
  @apply border border-black bg-black text-white hover:bg-gray-700;
}
.btn-secondary {
  @apply bg-neutral-500 hover:bg-neutral-600;
}
.btn-danger {
  @apply bg-red-500 hover:bg-red-600;
}
</style>
