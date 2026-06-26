<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { getProductVariant } from '@/data/products'
import {
  productApplications,
  productName,
  productSpecs,
  useI18n,
  variantDescription,
  variantName,
  variantSecondaryName,
  variantTags,
} from '@/i18n'
import { assetUrl } from '@/utils/asset'

const route = useRoute()
const pageRef = ref<HTMLElement | null>(null)
const activeImage = ref('')
const { t } = useI18n()

const productResult = computed(() => {
  return getProductVariant(String(route.params.seriesId), String(route.params.variantId))
})

const series = computed(() => productResult.value?.series)
const variant = computed(() => productResult.value?.variant)
const gallery = computed(() => variant.value?.gallery ?? [])

watch(
  gallery,
  (images) => {
    activeImage.value = images[0] ?? ''
  },
  { immediate: true },
)

onMounted(() => {
  if (!pageRef.value) return

  gsap.from(pageRef.value.querySelectorAll('.detail-animate'), {
    opacity: 0,
    y: 28,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  })
})
</script>

<template>
  <main ref="pageRef" class="product-detail">
    <template v-if="series && variant">
      <section class="product-hero">
        <div class="product-hero__content detail-animate">
          <div class="product-hero__breadcrumb">
            <RouterLink to="/">{{ t('breadcrumbHome') }}</RouterLink>
            <span>/</span>
            <RouterLink to="/products">{{ t('breadcrumbProducts') }}</RouterLink>
            <span>/</span>
            <RouterLink :to="`/products/${series.id}`">{{ productName(series) }}</RouterLink>
            <span>/</span>
            <strong>{{ variantName(series, variant) }}</strong>
          </div>

          <p class="product-hero__eyebrow">{{ series.eyebrow }}</p>

          <h1>
            {{ variantName(series, variant) }}
            <span>{{ variantSecondaryName(series, variant) }}</span>
          </h1>

          <p class="product-hero__description">
            {{ variantDescription(series, variant) }}
          </p>

          <div class="product-hero__tags">
            <span v-for="tag in variantTags(series, variant)" :key="tag">{{ tag }}</span>
          </div>

          <div class="product-hero__actions">
            <a href="mailto:contact@example.com">{{ t('requestDocs') }}</a>
            <RouterLink :to="`/products/${series.id}`">{{ t('backSeries') }}</RouterLink>
          </div>
        </div>

        <div class="product-gallery detail-animate">
          <div class="product-gallery__stage">
            <div class="product-gallery__top">
              <span>PRODUCT VISUAL</span>
              <strong>{{ gallery.length }} {{ t('images') }}</strong>
            </div>

            <img v-if="activeImage" :src="assetUrl(activeImage)" :alt="variantName(series, variant)" />
          </div>

          <div v-if="gallery.length > 1" class="product-gallery__thumbs">
            <button
              v-for="image in gallery"
              :key="image"
              type="button"
              :class="{ 'product-gallery__thumb--active': image === activeImage }"
              @click="activeImage = image"
            >
              <img :src="assetUrl(image)" :alt="variantName(series, variant)" />
            </button>
          </div>
        </div>
      </section>

      <section class="product-overview">
        <article class="overview-card overview-card--large detail-animate">
          <p>TECHNICAL OVERVIEW</p>
          <h2>{{ t('technicalOverview') }}</h2>

          <div class="spec-list">
            <div
              v-for="spec in variant.specs?.length ? variant.specs : productSpecs(series)"
              :key="spec.label"
              class="spec-list__item"
            >
              <span>{{ spec.label }}</span>
              <strong>{{ spec.value }}</strong>
            </div>
          </div>
        </article>

        <article class="overview-card detail-animate">
          <p>SERIES</p>
          <h2>{{ productName(series) }}</h2>

          <div class="application-list">
            <span v-for="item in productApplications(series)" :key="item">
              {{ item }}
            </span>
          </div>
        </article>
      </section>

      <section class="product-notice detail-animate">
        <div>
          <p>PROFESSIONAL ENQUIRY</p>
          <h2>{{ t('professionalInquiryTitle') }}</h2>
        </div>

        <span>
          {{ t('professionalInquiryDesc') }}</span
        >
      </section>

      <section class="product-cta detail-animate">
        <div>
          <p>REQUEST INFORMATION</p>
          <h2>{{ t('requestInfoTitle') }}</h2>
          <span>{{ t('requestInfoDesc') }}</span>
        </div>

        <a href="mailto:contact@example.com">{{ t('sendInquiryEmail') }}</a>
      </section>
    </template>

    <section v-else class="not-found">
      <h1>{{ t('productNotFound') }}</h1>
      <RouterLink to="/products">{{ t('backProducts') }}</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.product-detail {
  padding-top: 108px;
}

.product-hero,
.product-overview,
.product-notice,
.product-cta,
.not-found {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin-inline: auto;
}

.product-hero {
  min-height: calc(100vh - 108px);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 57.6px;
  align-items: center;
}

.product-hero__breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 7.2px;
  margin-bottom: 30.6px;
  font-size: 11.7px;
  color: var(--color-text-muted);
}

.product-hero__breadcrumb a {
  color: var(--color-text-soft);
  transition: 0.25s ease;
}

.product-hero__breadcrumb a:hover {
  color: var(--color-text);
}

.product-hero__breadcrumb strong {
  font-weight: 400;
  color: var(--color-accent);
}

.product-hero__eyebrow {
  margin: 0 0 16.2px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.24em;
  color: var(--color-accent);
}

.product-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 93.6px);
  line-height: 0.92;
  letter-spacing: -0.07em;
}

.product-hero h1 span {
  display: block;
  margin-top: 16.2px;
  font-family: var(--font-mono);
  font-size: 12.6px;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.product-hero__description {
  max-width: 594px;
  margin: 28.8px 0 0;
  font-size: 15.3px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.product-hero__tags,
.application-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 27px;
}

.product-hero__tags span,
.application-list span {
  padding: 7.2px 10.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-soft);
  font-size: 11.7px;
}

.product-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12.6px;
  margin-top: 32.4px;
}

.product-hero__actions a {
  height: 43.2px;
  padding: 0 19.8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 899.1px;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.product-hero__actions a:first-child {
  background: var(--color-text);
  color: #08090a;
}

.product-hero__actions a:last-child {
  border: 0.9px solid var(--color-line-strong);
  color: var(--color-text);
}

.product-hero__actions a:hover {
  transform: translateY(-1.8px);
}

.product-gallery {
  display: grid;
  gap: 12.6px;
}

.product-gallery__stage {
  position: relative;
  min-height: 576px;
  padding: 55.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.9px solid var(--color-line);
  border-radius: 36px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.028) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 0.9px, transparent 0.9px),
    radial-gradient(circle at center, rgba(210, 220, 235, 0.14), transparent 50%), #101317;
  background-size:
    30.6px 30.6px,
    30.6px 30.6px,
    auto,
    auto;
}

.product-gallery__stage img {
  max-width: 78%;
  max-height: 468px;
  object-fit: contain;
  filter: contrast(1.06) saturate(0.9);
}

.product-gallery__top {
  position: absolute;
  top: 21.6px;
  left: 21.6px;
  padding: 12.6px 14.4px;
  border: 0.9px solid var(--color-line);
  border-radius: 16.2px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(12.6px);
}

.product-gallery__top span {
  display: block;
  margin-bottom: 5.4px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.product-gallery__top strong {
  font-size: 11.7px;
  color: var(--color-text);
}

.product-gallery__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(82.8px, 1fr));
  gap: 9px;
}

.product-gallery__thumbs button {
  height: 82.8px;
  padding: 9px;
  border: 0.9px solid var(--color-line);
  border-radius: 16.2px;
  background: rgba(255, 255, 255, 0.025);
  cursor: pointer;
  transition: 0.25s ease;
}

.product-gallery__thumbs button:hover,
.product-gallery__thumb--active {
  border-color: var(--color-line-strong);
  background: rgba(255, 255, 255, 0.06);
}

.product-gallery__thumbs img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-overview {
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.overview-card {
  padding: 34.2px;
  border: 0.9px solid var(--color-line);
  border-radius: 30.6px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 34%),
    var(--color-card);
}

.overview-card > p,
.product-notice p,
.product-cta p {
  margin: 0 0 12.6px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.overview-card h2,
.product-notice h2,
.product-cta h2 {
  margin: 0;
  font-size: clamp(28.8px, 4vw, 46.8px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.spec-list {
  margin-top: 30.6px;
}

.spec-list__item {
  display: flex;
  justify-content: space-between;
  gap: 25.2px;
  padding: 18px 0;
  border-bottom: 0.9px solid var(--color-line);
}

.spec-list__item:last-child {
  border-bottom: none;
}

.spec-list__item span {
  color: var(--color-text-muted);
}

.spec-list__item strong {
  text-align: right;
  font-weight: 500;
  color: var(--color-text);
}

.product-notice {
  margin-top: 18px;
  padding: 34.2px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 36px;
  align-items: center;
  border: 0.9px solid var(--color-line);
  border-radius: 30.6px;
  background: rgba(255, 255, 255, 0.025);
}

.product-notice span {
  line-height: 1.9;
  color: var(--color-text-soft);
}

.product-cta {
  margin-top: 72px;
  margin-bottom: 108px;
  padding: 50.4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 43.2px;
  border: 0.9px solid var(--color-line);
  border-radius: 34.2px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.12), transparent 36%),
    var(--color-card);
}

.product-cta span {
  display: block;
  max-width: 612px;
  margin-top: 16.2px;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.product-cta a {
  flex-shrink: 0;
  height: 45px;
  padding: 0 21.6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 899.1px;
  background: var(--color-text);
  color: #08090a;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.product-cta a:hover {
  transform: translateY(-1.8px);
}

.not-found {
  margin-top: 144px;
}

.not-found h1 {
  font-size: 50.4px;
}

.not-found a {
  color: var(--color-accent);
}

@media (max-width: 1062px) {
  .product-hero,
  .product-overview,
  .product-notice {
    grid-template-columns: 1fr;
  }

  .product-hero {
    gap: 36px;
  }

  .product-gallery__stage {
    min-height: 414px;
  }

  .product-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 612px) {
  .product-gallery__stage {
    min-height: 324px;
    padding: 37.8px 23.4px 25.2px;
    border-radius: 25.2px;
  }

  .product-gallery__stage img {
    max-width: 90%;
    max-height: 252px;
  }

  .product-gallery__thumbs {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-notice,
  .product-cta,
  .overview-card {
    padding: 25.2px;
  }
}
</style>
