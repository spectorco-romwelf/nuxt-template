<script setup>
const { t, locale } = useI18n();

const navlinks = computed(() => {
  return [
    {
      name: t('nav.products'),
      link: `/${locale.value}/products-list`,
      subs: [
        {
          name: t('nav.newArrivals'),
          link: `/${locale.value}/products-list?query=${t('nav.newArrivals')}`,
        },
        {
          name: t('nav.onSale'),
          link: `/${locale.value}/products-list?query=${t('nav.onSale')}`,
          subOfSubs: [
            { name: t('nav.onSale'), link: `/${locale.value}/products-list?query=${t('nav.onSale')}` },
            { name: t('nav.bags'), link: `/${locale.value}/products-list?query=${t('nav.bags')}` },
            { name: t('nav.drinkware'), link: `/${locale.value}/products-list?query=${t('nav.drinkware')}` },
            { name: t('nav.journals'), link: `/${locale.value}/products-list?query=${t('nav.journals')}` },
          ],
        },
      ],
    },
    {
      name: t('nav.salesTools'),
      link: `/${locale.value}`,
    },
    {
      name: t('nav.ourCompany'),
      link: `/${locale.value}`,
    },
    {
      name: t('nav.sales'),
      link: `/${locale.value}`,
    },
  ];
});
</script>

<template>
  <header class="sticky top-0 z-10 h-20 bg-white shadow">
    <div class="main-container flex h-full items-center justify-between">
      <nav class="flex h-full items-center gap-6">
        <NuxtLink :to="`/${locale}`">
          <AppImage src="/logo.png" alt="Spector and Co. Logo" width="214" height="70" class="w-34" />
        </NuxtLink>
        <ul class="demi flex items-center gap-6 uppercase">
          <li v-for="(navlink, index) in navlinks" :key="index">
            <NuxtLink :to="navlink.link" class="decoration-2 underline-offset-4 hover:underline">{{ navlink.name }} +</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex h-full items-center gap-6">
        <form class="relative">
          <input type="text" class="w-72 border-b border-black px-1 py-0.5 pr-8 focus:outline-none" placeholder="Search here..." />
          <Icon name="lucide:search" style="color: black" class="absolute top-1/2 right-1 -translate-y-1/2 text-2xl" />
        </form>

        <LocaleSwitcher />

        <AppTooltip text="View Storyboard">
          <img src="@/assets/icons/storyboard.png" alt="storyboard-icon" width="40" height="40" class="h-auto w-10 cursor-pointer" />
        </AppTooltip>

        <AppTooltip text="Account">
          <img src="@/assets/icons/user.png" alt="profile-icon" width="40" height="40" class="w-6 cursor-pointer" />
        </AppTooltip>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
