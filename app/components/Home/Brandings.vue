<script setup>
const { locale } = useI18n();

const brandings = [
  {
    name: '4cp',
    // link: '/branding-methods/4-color-process',
    img: '/images/home-brandings/4cp.png',
  },
  {
    name: 'debossed',
    // link: '/branding-methods/debossed',
    img: '/images/home-brandings/debossed.png',
  },
  {
    name: 'dome',
    // link: '/branding-methods/dome-branding',
    img: '/images/home-brandings/dome.png',
  },
  {
    name: 'laser',
    // link: '/branding-methods/laser-branding',
    img: '/images/home-brandings/laser.png',
  },
  {
    name: 'embroidery',
    // link: '/',
    img: '/images/home-brandings/embroidery.png',
  },
  {
    name: 'padPrinted',
    // link: '/branding-methods/pad-printed',
    img: '/images/home-brandings/pad-printed.png',
  },
  {
    name: 'patches',
    // link: '/branding-methods/patches',
    img: '/images/home-brandings/patches.png',
  },
  {
    name: 'silkscreened',
    // link: '/branding-methods/silkscreen',
    img: '/images/home-brandings/silkscreen.png',
  },
  {
    name: 'bellyBands',
    // link: '/branding-methods/silkscreen',
    img: '/images/home-brandings/belly-bands.png',
  },
  {
    name: 'linerPages',
    // link: '/branding-methods/silkscreen',
    img: '/images/home-brandings/liner-pages.png',
  },
  {
    name: 'toneOnTone',
    // link: '/branding-methods/tone-on-tone',
    img: '/images/home-brandings/tone.png',
  },
];
</script>

<template>
  <HomeCarousel :title="$t('homeTitle.brandingMethods')" name="brandings" :showScrollbar="false">
    <div class="min-h-96 max-w-[315px] min-w-[315px]" v-for="branding in brandings" :key="branding.name">
      <NuxtLink :to="`/${locale}`"><img :src="branding.img" :alt="branding.name" /></NuxtLink>
      <span class="demi uppercase">{{ $t(`branding.${branding.name}`) }}</span>
    </div>
  </HomeCarousel>
</template>

<style scoped></style>
