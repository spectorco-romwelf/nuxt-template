<script setup>
const { t, locale } = useI18n();

const mainBanners = computed(() => {
  const banners = [
    {
      id: 'giftsets',
      path: `/${locale.value}/productslist?query=${locale.value === 'fr' ? 'ensemble cadeu' : 'giftsets'}`,
      img: '/us/banner-giftset-large.jpg',
      imgFR: '/fr/banner-giftset-large.jpg',
      mobile: {
        img: '/us/banner-giftset-mobile.jpg',
        imgFR: '/fr/banner-giftset-mobile.jpg',
      },
      medium: {
        img: '/us/banner-giftset-medium.jpg',
        imgFR: '/fr/banner-giftset-medium.jpg',
      },
    },
    {
      id: 'fall25',
      path: `/${locale.value}/productslist?query=${locale.value === 'fr' ? 'nouveau' : 'new'}`,
      img: '/us/banner-fall25-large.jpg',
      imgFR: '/fr/banner-fall25-large.jpg',
      mobile: {
        img: '/us/banner-fall25-mobile.jpg',
        imgFR: '/fr/banner-fall25-mobile.jpg',
      },
      medium: {
        img: '/us/banner-fall25-medium.jpg',
        imgFR: '/fr/banner-fall25-medium.jpg',
      },
    },
    {
      id: 'weekender',
      path: `/${locale.value}/product/BG210`,
      img: '/us/banner-weekender-large.jpg',
      imgFR: '/fr/banner-weekender-large.jpg',
      mobile: {
        img: '/us/banner-weekender-mobile.jpg',
        imgFR: '/fr/banner-weekender-mobile.jpg',
      },
      medium: {
        img: '/us/banner-weekender-medium.jpg',
        imgFR: '/fr/banner-weekender-medium.jpg',
      },
    },
    {
      id: 'blankbags',
      path: `https://www.spectorandco.com/${locale.value}/spe/productslist?decoration_method=Embroidery`,
      img: '/us/banner-blankbags-large.jpg',
      imgFR: '/fr/banner-blankbags-large.jpg',
      mobile: {
        img: '/us/banner-blankbags-mobile.jpg',
        imgFR: '/fr/banner-blankbags-mobile.jpg',
      },
      medium: {
        img: '/us/banner-blankbags-medium.webp',
        imgFR: '/fr/banner-blankbags-medium.webp',
      },
    },
  ];

  return banners
    .map((banner) => ({
      ...banner,
      resolvedImg: locale.value === 'fr' ? banner.imgFR : banner.img,
    }))
    .filter((banner) => {
      if (banner.id === 'alldress' && (locale.value === 'fr' || locale.value === 'us')) {
        return false;
      }
      return true;
    });
});
</script>

<template>
  <section class="relative">
    <UCarousel v-slot="{ item }" :items="mainBanners" fade loop arrows :autoplay="{ delay: 8000 }" :ui="{ item: 'basis-full', arrows: 'absolute top-1/2 -translate-y-1/2 flex w-full justify-between', prev: 'ml-16 cursor-pointer', next: 'mr-16 cursor-pointer', icon: 'w-12 h-12 !text-5xl' }">
      <a :href="item.path" target="_blank" rel="noopener">
        <!-- Desktop -->
        <AppImage :src="`/images/banners/${item.resolvedImg}`" :alt="item.id" width="1900" height="476" class="4xl:h-auto hidden h-[475px] w-full object-contain lg:block 2xl:object-cover" />
        <!-- Tablet -->
        <AppImage :src="`/images/banners/${locale !== 'fr' ? item.medium.img : item.medium.imgFR}`" :alt="item.id" width="1200" height="600" class="hidden h-[475px] w-full object-contain md:block lg:hidden" />
        <!-- Mobile -->
        <AppImage :src="`/images/banners/${locale !== 'fr' ? item.mobile.img : item.mobile.imgFR}`" :alt="item.id" width="426" height="640" class="h-[475px] w-full object-contain md:hidden" />
      </a>
    </UCarousel>
  </section>
</template>
