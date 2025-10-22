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

const swatchRef = ref(null);
const showLeft = ref(false);
const showRight = ref(false);

const handleMouseEnter = (color) => (selectedVariant.value = color);

const updateScrollButtons = () => {
  const el = swatchRef.value;
  if (!el) return;
  showLeft.value = el.scrollLeft > 0;
  showRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth;
};

const scrollSwatchLeft = () => {
  swatchRef.value?.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollSwatchRight = () => {
  swatchRef.value?.scrollBy({ left: 300, behavior: 'smooth' });
};

const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.pageX || e.touches[0].pageX;
  scrollLeft.value = swatchRef.value.scrollLeft;
  document.body.style.userSelect = 'none';
};

const stopDrag = () => {
  isDragging.value = false;
  document.body.style.userSelect = '';
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  const walk = (x - startX.value) * 1;
  swatchRef.value.scrollLeft = scrollLeft.value - walk;
};

onMounted(() => {
  updateScrollButtons();
  swatchRef.value?.addEventListener('scroll', updateScrollButtons);
});
</script>

<template>
  <div class="min-h-96 max-w-[315px] min-w-[315px] rounded border border-neutral-300 bg-white shadow transition-all hover:border-black">
    <NuxtLink :to="`/${locale}/products/${product.productCode}`" class="relative">
      <div v-if="getActiveColor?.toneOnTone" class="absolute top-2 left-1 z-1">
        <span class="icon-tag">{{ t('tags.toneOnTone') }}</span>
      </div>
      <div v-if="getActiveColor?.isSale || product.isNew || isEco || isRocket || isUS || isCanada" class="absolute top-2 right-1 z-1 flex items-center gap-2">
        <span v-if="getActiveColor?.isSale" class="icon-tag">{{ t('tags.sale') }}</span>

        <span v-if="product.isNew" class="icon-tag">{{ t('tags.new') }}</span>

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

      <Transition name="fade" mode="out-in">
        <AppImage :key="selectedVariant?.display" :src="`/images/thumbnails/${selectedVariant?.display}`" :alt="product.productCode" width="500" height="500" class="w-full rounded-t py-8" />
      </Transition>
    </NuxtLink>

    <!-- Variant Swatches -->
    <div v-if="product.colors.length > 1" class="relative flex max-h-12 w-full items-center justify-center px-2">
      <button v-if="product.colors.length > 4" class="absolute top-1/2 left-0.5 -translate-y-1/2 cursor-pointer" @click="scrollSwatchLeft">
        <Icon v-if="showLeft" name="lucide:chevron-left" style="color: black" class="text-2xl" />
      </button>

      <div :class="['swatch-container', product.colors.length > 4 ? 'w-[85%]' : 'w-full']" ref="swatchRef" @mousedown="startDrag" @mouseleave="stopDrag" @mouseup="stopDrag" @mousemove="onDrag" @touchstart="startDrag" @touchend="stopDrag" @touchmove="onDrag">
        <div v-for="(color, index) in product.colors" :key="index" class="relative flex max-w-13 min-w-13 cursor-pointer items-center justify-center overflow-hidden border-black p-0.5" :class="{ border: getActiveColor?.color === color.color }" @mouseenter="handleMouseEnter(color)" @click="selectedVariant = color">
          <AppImage :src="`/images/thumbnails/${color.display}`" :alt="color.name" width="500" height="500" draggable="false" />
          <div v-if="color.isSale" class="swatch-sale">{{ $t('tags.sale') }}</div>
        </div>
      </div>

      <button v-if="product.colors.length > 4" class="absolute top-1/2 right-0.5 -translate-y-1/2 cursor-pointer" @click="scrollSwatchRight">
        <Icon v-if="showRight" name="lucide:chevron-right" style="color: black" class="text-2xl" />
      </button>
    </div>

    <span v-else class="flex max-h-12 min-h-12 items-center justify-center text-2xl"></span>

    <div class="space-y-1 p-2">
      <div class="demi flex items-center gap-1">
        <span>{{ product.productCode }}</span>
        <span>-</span>
        <span>{{ locale !== 'fr' ? product.name : product.nameFR }}</span>
      </div>

      <p v-if="product.summary" class="text-sm capitalize italic">{{ product.summary.toLowerCase() }}</p>
      <div v-else class="text-sm">
        <span class="medium">MOQ:</span>
        <span>{{ locale !== 'us' ? selectedVariant.MOQCA.toLocaleString() : selectedVariant.MOQUS.toLocaleString() }}</span>
      </div>

      <div v-if="product.summary" class="flex items-center gap-1 text-sm">
        <span class="medium">MOQ:</span>
        <span>{{ locale !== 'us' ? selectedVariant.MOQCA.toLocaleString() : selectedVariant.MOQUS.toLocaleString() }}</span>
        <span>|</span>
        <span class="medium">Stock:</span>
        <span>{{ getActiveColor?.qty ? getActiveColor?.qty?.toLocaleString() : t('label.comingSoon') }} in {{ getActiveColor.color }}</span>
      </div>

      <div v-else class="flex items-center gap-1 text-sm">
        <span class="medium">Stock:</span>
        <span>{{ getActiveColor?.qty ? getActiveColor?.qty?.toLocaleString() : t('label.comingSoon') }} in {{ getActiveColor.color }}</span>
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
.swatch-container {
  background-color: white;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}
.swatch-container.cut-width {
  width: 80%;
}
.swatch-container.full-width {
  width: 100%;
}
.swatch-container::-webkit-scrollbar {
  display: none;
}
.swatch-container:active {
  cursor: grabbing;
}
.swatch-sale {
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: red;
  font-size: 0.8rem;
  opacity: 0.7;
  color: white;
  text-align: center;
  font-weight: bolder;
  padding: 2px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
