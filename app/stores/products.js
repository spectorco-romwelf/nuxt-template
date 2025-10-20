export const useProductsStore = defineStore('products', () => {
  const config = useRuntimeConfig();

  const products = ref([]);
  const originalProducts = ref([]);
  const featuredProducts = ref([]);
  const categoryProducts = ref([]);

  const isLoadingProducts = ref(false);
  const isLoadingHome = ref(false);
  const error = ref(null);

  const initialFetchProducts = async () => {
    if (products.value.length) return;

    try {
      isLoadingProducts.value = true;
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
      isLoadingProducts.value = false;
    }
  };

  const initialFetchHomeProducts = async () => {
    if (featuredProducts.value.length) return;

    try {
      isLoadingHome.value = true;
      const { data, error: fetchError } = await useFetch('/api/home-products');

      if (fetchError.value) {
        error.value = fetchError.value;
        console.error('Product fetch failed:', fetchError.value);
        return;
      }

      if (data.value) {
        featuredProducts.value = data.value.featProducts.features[0].products;
        categoryProducts.value = data.value.categProducts;
        return data.value;
      }
    } finally {
      isLoadingHome.value = false;
    }
  };

  return {
    products,
    originalProducts,
    featuredProducts,
    categoryProducts,
    isLoadingHome,
    isLoadingProducts,
    error,
    initialFetchProducts,
    initialFetchHomeProducts,
  };
});
