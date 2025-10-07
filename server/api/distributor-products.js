export default defineEventHandler(async (event) => {
  try {
    const [data, dataFeatures] = await Promise.all([
      $fetch('http://testin.ca/decdout-api/products'),
      $fetch('https://storyboard.decdoutmerch.com/decdout-api/feature/active'),
    ]);

    const productMap = new Map(data.products.map((p) => [p.productCode, p]));

    const features = dataFeatures.features.map((feature) => {
      const products = feature.products.map((fp) => {
        const details = productMap.get(fp.productCode);
        return {
          ...fp,
          details: details || null,
        };
      });

      return {
        ...feature,
        products,
      };
    });

    return {
      success: true,
      count: features.length,
      features,
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
