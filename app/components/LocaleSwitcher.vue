<script setup>
const { locale, locales } = useI18n();
const router = useRouter();

const otherLocales = computed(() => locales.value.filter((l) => l.code !== locale.value));

const showDropdown = ref(false);

const changeLocale = async (code) => {
  showDropdown.value = false;
  await router.push({ path: `/${code}${router.currentRoute.value.fullPath.replace(/^\/[a-z]{2}/, '')}` });
  locale.value = code;
};
</script>

<template>
  <div class="relative">
    <button class="flex cursor-pointer items-center gap-2 rounded-md transition hover:bg-gray-100" @click="showDropdown = !showDropdown">
      <AppImage :src="`/icons/flags/${locale === 'en' ? 'canada' : locale === 'fr' ? 'quebec' : 'usa'}.svg`" alt="flag" width="40" height="30" class="h-auto w-9" />
    </button>

    <transition name="fade">
      <div v-if="showDropdown" class="absolute top-8 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-gray-200 bg-white shadow-lg">
        <ul class="py-2">
          <li v-for="loc in otherLocales" :key="loc.code" @click="changeLocale(loc.code)" class="flex w-14 cursor-pointer items-center justify-center gap-2 px-3 py-2 transition hover:bg-gray-100">
            <img :src="`/icons/flags/${loc.code === 'en' ? 'canada' : loc.code === 'fr' ? 'quebec' : 'usa'}.svg`" :alt="loc.name" class="h-auto w-7" />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
