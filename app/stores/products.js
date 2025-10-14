export const useProductsStore = defineStore('products', () => {
  const config = useRuntimeConfig();

  const products = ref([]);
  const originalProducts = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const initialFetchProducts = async () => {
    if (products.value.length) return;

    try {
      isLoading.value = true;
      const { data, error: fetchError } = await useFetch(
        `${config.public.apiDecdout}/products`
      );

      if (fetchError.value) {
        error.value = fetchError.value;
        console.error('Product fetch failed:', fetchError.value);
        return;
      }

      if (data.value) {
        originalProducts.value = data.value.products;
        products.value = data.value.products;
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    originalProducts,
    isLoading,
    error,
    initialFetchProducts,
  };
});
