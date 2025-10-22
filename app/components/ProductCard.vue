<script setup>
const props = defineProps(['product']);

const { t, locale } = useI18n();

const selectedVariant = ref(props.product.colors?.[0]);

const hasIcon = (keyword) => props.product.icons?.some((icon) => icon.name.toUpperCase().includes(keyword));

const isEco = computed(() => hasIcon('ECO'));
const isRocket = computed(() => hasIcon('48H SERVICE') || hasIcon('24H SERVICE'));
const isUS = computed(() => locale.value === 'us' && hasIcon('MADE IN NORTH AMERICA'));
const isCanada = computed(() => locale.value !== 'us' && hasIcon('MADE IN CANADA'));

const getActiveColor = computed(() => {
  if (!props.product.colors) return null;
  const display = selectedVariant.value?.color;
  return props.product.colors.find((c) => c.color === display) || selectedVariant.value?.color;
});
</script>

<template>
  <div class="min-h-96 max-w-[315px] min-w-[315px] rounded border border-neutral-300 bg-white shadow transition-all hover:border-black">
    <NuxtLink :to="`/${locale}/products/${product.productCode}`" class="relative">
      <div v-if="getActiveColor?.toneOnTone" class="absolute top-2 left-1">
        <span class="icon-tag">{{ t('toneOnTone') }}</span>
      </div>
      <div v-if="getActiveColor?.isSale || product.isNew || isEco || isRocket || isUS || isCanada" class="absolute top-2 right-1 flex items-center gap-2">
        <span v-if="getActiveColor?.isSale" class="icon-tag">{{ t('sale') }}</span>

        <span v-if="product.isNew" class="icon-tag">{{ t('new') }}</span>

        <AppTooltip v-if="isEco" text="ECO">
          <img src="/icons/tags/ECO.png" alt="ECO" class="h-auto w-7" />
        </AppTooltip>

        <AppTooltip v-if="isRocket" text="Rocket Service: 24/48 hour turnaround!">
          <img src="/icons/tags/ROCKET.png" alt="Fast Shipping" class="h-auto w-7" />
        </AppTooltip>

        <AppTooltip v-if="isUS" text="Made in North America">
          <img src="/icons/tags/MADE_IN_NORTH_AMERICA.png" alt="Made in USA" class="h-auto w-7" />
        </AppTooltip>

        <AppTooltip v-if="isCanada" text="Made in Canada">
          <img src="/icons/tags/MADE_IN_CANADA.png" alt="Made in Canada" class="h-auto w-7" />
        </AppTooltip>
      </div>

      <AppImage :src="`/images/thumbnails/${selectedVariant?.display}`" :alt="product.productCode" width="500" height="500" class="w-full rounded-t py-8" />
    </NuxtLink>
    <div class="space-y-1 p-2">
      <div class="demi flex items-center gap-1">
        <span>{{ product.productCode }}</span>
        <span>-</span>
        <span>{{ locale !== 'fr' ? product.name : product.nameFR }}</span>
      </div>

      <p v-if="product.summary" class="text-sm capitalize italic">{{ product.summary.toLowerCase() }}</p>
      <div v-else class="text-sm">
        <span class="medium">MOQ:</span>
        <span>{{ locale !== us ? selectedVariant.MOQCA.toLocaleString() : selectedVariant.MOQUS.toLocaleString() }}</span>
      </div>

      <div v-if="product.summary" class="flex items-center gap-1 text-sm">
        <span class="medium">MOQ:</span>
        <span>{{ locale !== us ? selectedVariant.MOQCA.toLocaleString() : selectedVariant.MOQUS.toLocaleString() }}</span>
        <span>|</span>
        <span class="medium">Stock:</span>
        <span>{{ getActiveColor?.qty ? getActiveColor?.qty?.toLocaleString() : t('comingSoon') }}</span>
      </div>

      <div v-else class="flex items-center gap-1 text-sm">
        <span class="medium">Stock:</span>
        <span>{{ getActiveColor?.qty ? getActiveColor?.qty?.toLocaleString() : t('comingSoon') }}</span>
      </div>

      <hr class="text-neutral-400" />

      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span>As Low As:</span>
          <span class="extrabold">${{ locale === 'us' ? `${getActiveColor?.priceUS?.toFixed(2)} USD` : `${getActiveColor?.priceCA?.toFixed(2)} CAD` }}</span>
        </div>
        <AppTooltip text="Add to Storyboard">
          <button class="cursor-pointer">
            <img src="@/assets/icons/add-storyboard.png" alt="Made in Canada" class="h-auto w-11" />
          </button>
        </AppTooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";
.icon-tag {
  @apply rounded bg-black px-1.5 py-0.5 text-white capitalize;
}
</style>
