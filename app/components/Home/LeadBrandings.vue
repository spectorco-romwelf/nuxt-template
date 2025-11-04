<script setup>
const { locale } = useI18n();

const leadBrandings = computed(() => [
  {
    name: 'instantLookbook',
    link: `https://lookbook.decdoutmerch.com/${locale.value}`,
    img: '/images/lead-brandings/instant-lookbook.jpg',
  },
  {
    name: 'creativeConcepts',
    // link: '/branding-methods/debossed',
    img: '/images/lead-brandings/creative-concepts.jpg',
  },
  {
    name: 'overseasDirect',
    // link: '/branding-methods/dome-branding',
    img: '/images/lead-brandings/overseas-direct.jpg',
  },
  {
    name: 'awards',
    // link: '/branding-methods/laser-branding',
    img: '/images/lead-brandings/awards.jpg',
  },
]);
</script>

<template>
  <HomeCarousel :title="$t('homeTitle.whyLeading')" name="lead-brands" :showScrollbar="false" :showArrow="false">
    <div class="min-h-96 max-w-[315px] min-w-[315px]" v-for="leadBrand in leadBrandings" :key="leadBrand.name">
      <NuxtLink v-if="!leadBrand?.link?.startsWith('http')" :to="`/${locale}`">
        <AppImage :src="leadBrand.img" :alt="leadBrand.name" width="600" height="785" />
      </NuxtLink>
      <a v-else :href="leadBrand?.link" target="_blank">
        <AppImage :src="leadBrand.img" :alt="leadBrand.name" width="600" height="785" />
      </a>
      <span class="demi uppercase">{{ $t(`leadBranding.${leadBrand.name}`) }}</span>
    </div>
  </HomeCarousel>
</template>

<style scoped></style>
