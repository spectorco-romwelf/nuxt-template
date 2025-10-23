<script setup>
const { locale } = useI18n();
const storeProducts = useProductsStore();

await useAsyncData('products', storeProducts.initialFetchProducts);
</script>

<template>
  <div class="main-container">
    <AppImage src="https://www.spectorandco.com/product_images/products/DW422_DRS_SS__Other_Product_Image_v1_1755875059.jpg" alt="Spector and Co. Logo" width="400" height="400" />
    <NuxtLink :to="`/${locale}`">Go to Home</NuxtLink>
    <p>{{ storeProducts.products?.length }}</p>
    <AppButton>Test Button</AppButton>
    <p class="text-5xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae delectus, ipsum facilis deserunt minus et aperiam veniam omnis consequatur autem eligendi obcaecati culpa incidunt maxime ipsam quae voluptatem animi beatae sapiente doloribus! Repudiandae animi rem perspiciatis eligendi ratione, quia neque obcaecati enim beatae ullam ipsa modi placeat facilis hic vel esse amet voluptates at repellendus? Quidem aut officia dolorem. Harum, exercitationem! Dolorum temporibus labore quae cumque incidunt laboriosam inventore, odio dolores numquam omnis eligendi vero, atque vel dolorem perspiciatis, minima eveniet ea est suscipit repellat beatae magni voluptates. Expedita aliquid iusto similique distinctio? Iure neque ad quos. Laborum alias odit, eligendi, distinctio dolorum maiores quaerat a rem animi ad suscipit unde, beatae accusantium maxime accusamus voluptatem iste voluptates
      corporis. Culpa praesentium cum harum natus velit dolorum, eos optio laborum sunt omnis consequuntur doloribus porro, sed qui, blanditiis excepturi officia nesciunt error tempora dolor repudiandae. Explicabo assumenda iste maxime ex dolorum veniam aperiam id optio nobis recusandae repellat suscipit quam esse nam molestiae adipisci quia unde tempora, animi corrupti modi. Nisi deserunt reiciendis consequatur, nam rerum, porro ratione vero voluptates ut totam consectetur libero minus placeat veniam magni quis. Itaque, dolorem laudantium? Veritatis iure quia ad error eaque, deserunt aliquam.
    </p>
  </div>
</template>

<style scoped></style>
