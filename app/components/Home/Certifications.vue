<script setup>
const certifications = ['/images/certifications/ctpat.jpg', '/images/certifications/greenbusiness.png', '/images/certifications/smeta.jpg', '/images/certifications/fsc.jpg', '/images/certifications/eco.png', '/images/certifications/higg.jpg'];
</script>

<template>
  <section class="main-container relative mt-24 py-8">
    <p class="mb-8 text-center text-5xl font-bold uppercase">{{ $t('homeTitle.certifiedBy') }}</p>

    <div class="mx-auto">
      <div class="flex flex-wrap items-center justify-center gap-14">
        <AppImage v-for="(certificate, index) in certifications" :key="index" :src="certificate" :alt="certificate" width="auto" height="auto" class="max-h-44 w-58 object-contain" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
