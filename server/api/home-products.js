export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const [data, dataFeatures] = await Promise.all([
      $fetch(`${config.public.apiDecdout}/products`),
      $fetch(`${config.apiFeatured}/feature/active`),
    ]);

    // Category Products
    const products = data.products || [];
    const categories = [
      'bag',
      'notebook',
      'bottle',
      'pen',
      'travel',
      'giftset',
    ];

    const sortedProducts = [...products].sort(
      (a, b) => new Date(b.launchDate) - new Date(a.launchDate)
    );

    const categProducts = [
      {
        name: 'new',
        image: '/images/categories/new.jpg',
      },
    ];

    for (const cat of categories) {
      let product = sortedProducts.find(
        (p) =>
          p.category?.toLowerCase() === cat.toLowerCase() &&
          p.colors?.some((c) => c.color.toUpperCase() === 'BLACK')
      );

      if (!product) {
        product = sortedProducts.find(
          (p) => p.category?.toLowerCase() === cat.toLowerCase()
        );
      }

      if (product) {
        categProducts.push({
          name: cat,
          image: `/images/thumbnails/${product.productCode}-BLACK.webp`,
        });
      }
    }

    // Distributor Products
    const productMap = new Map(data.products.map((p) => [p.productCode, p]));

    const features = dataFeatures.features.map((feature) => {
      const products = feature.products.map((fp) => {
        const details = productMap.get(fp.productCode);
        return {
          ...fp,
          ...details,
        };
      });

      return {
        ...feature,
        products,
      };
    });

    return {
      categProducts,
      featProducts: { success: true, count: features.length, features },
    };
  } catch (error) {
    console.error('Error merging featured products:', error);
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch featured products',
      })
    );
  }
});
