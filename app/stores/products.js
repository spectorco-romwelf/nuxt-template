export const useProductsStore = defineStore('products', () => {
  const config = useRuntimeConfig();

  const products = ref([]);
  const originalProducts = ref([]);
  const featuredProducts = ref([]);
  const categoryProducts = ref([]);

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
        return data.value.products;
      }
    } finally {
      isLoading.value = false;
    }
  };

  const initialFetchFeaturedProducts = async () => {
    if (featuredProducts.value.length) return;

    try {
      isLoading.value = true;
      const { data, error: fetchError } = await useFetch('/api/home-products');

      if (fetchError.value) {
        error.value = fetchError.value;
        console.error('Product fetch failed:', fetchError.value);
        return;
      }

      if (data.value) {
        console.log(data.value);

        featuredProducts.value = data.value.featProducts.features[0].products;
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    originalProducts,
    featuredProducts,
    categoryProducts,
    isLoading,
    error,
    initialFetchProducts,
    initialFetchFeaturedProducts,
  };
});
