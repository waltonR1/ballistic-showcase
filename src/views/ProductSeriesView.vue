<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { getProductById } from '@/data/products'
import { assetUrl } from '@/utils/asset'

const route = useRoute()
const pageRef = ref<HTMLElement | null>(null)

const product = computed(() => {
  return getProductById(String(route.params.seriesId))
})

onMounted(() => {
  if (!pageRef.value) return

  gsap.from(pageRef.value.querySelectorAll('.series-animate'), {
    opacity: 0,
    y: 28,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out',
  })
})
</script>

<template>
  <main ref="pageRef" class="series-page">
    <template v-if="product">
      <section class="series-hero">
        <div class="series-hero__content series-animate">
          <div class="series-hero__breadcrumb">
            <RouterLink to="/">首页</RouterLink>
            <span>/</span>
            <RouterLink to="/products">产品系列</RouterLink>
            <span>/</span>
            <strong>{{ product.nameZh }}</strong>
          </div>

          <p>{{ product.eyebrow }}</p>
          <h1>
            {{ product.nameZh }}
            <span>{{ product.nameFr }}</span>
          </h1>
          <strong>{{ product.descriptionZh }}</strong>

          <div class="series-hero__tags">
            <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="series-hero__visual series-animate">
          <img :src="assetUrl(product.image)" :alt="product.nameZh" />
        </div>
      </section>

      <section class="series-products">
        <div class="series-products__header series-animate">
          <p>PRODUCTS IN THIS SERIES</p>
          <h2>选择具体产品</h2>
          <span>进入具体产品详情后，可以查看该产品对应的多张图片、基础信息和资料申请说明。</span>
        </div>

        <div class="series-products__grid">
          <RouterLink
            v-for="variant in product.variants"
            :key="variant.id"
            class="series-card series-animate"
            :to="`/products/${product.id}/${variant.id}`"
          >
            <div class="series-card__image">
              <img :src="assetUrl(variant.image)" :alt="variant.nameZh" />
            </div>

            <div class="series-card__content">
              <p>{{ variant.nameFr || product.nameFr }}</p>
              <h3>{{ variant.nameZh }}</h3>
              <span>{{ variant.descriptionZh }}</span>

              <div class="series-card__meta">
                <strong>{{ variant.gallery.length }} 张图片</strong>
                <small>查看详情</small>
              </div>

              <div class="series-card__tags">
                <em v-for="tag in variant.tags" :key="tag">{{ tag }}</em>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>
    </template>

    <section v-else class="not-found">
      <h1>产品系列不存在</h1>
      <RouterLink to="/products">返回产品系列</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.series-page {
  padding: 117px 0 108px;
}

.series-hero,
.series-products,
.not-found {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
}

.series-hero {
  min-height: calc(82vh - 108px);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 57.6px;
  align-items: center;
}

.series-hero__breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 7.2px;
  margin-bottom: 30.6px;
  font-size: 11.7px;
  color: var(--color-text-muted);
}

.series-hero__breadcrumb a {
  color: var(--color-text-soft);
}

.series-hero__breadcrumb strong,
.series-hero__content > p {
  color: var(--color-accent);
}

.series-hero__content > p,
.series-products__header p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
}

.series-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 100.8px);
  line-height: 0.92;
  letter-spacing: -0.07em;
}

.series-hero h1 span {
  display: block;
  margin-top: 16.2px;
  font-family: var(--font-mono);
  font-size: 12.6px;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.series-hero__content > strong {
  display: block;
  max-width: 648px;
  margin-top: 27px;
  font-weight: 400;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.series-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 27px;
}

.series-hero__tags span,
.series-card__tags em {
  padding: 7.2px 10.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-soft);
  font-size: 11.7px;
  font-style: normal;
}

.series-hero__visual {
  min-height: 540px;
  padding: 50.4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.9px solid var(--color-line);
  border-radius: 36px;
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

.series-hero__visual img {
  max-width: 78%;
  max-height: 450px;
  object-fit: contain;
}

.series-products {
  margin-top: 72px;
}

.series-products__header {
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1.2fr;
  gap: 25.2px;
  align-items: end;
  margin-bottom: 25.2px;
}

.series-products__header p {
  color: var(--color-accent);
}

.series-products__header h2 {
  margin: 0;
  font-size: clamp(32.4px, 4vw, 57.6px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.series-products__header span {
  line-height: 1.8;
  color: var(--color-text-soft);
}

.series-products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16.2px;
}

.series-card {
  min-height: 414px;
  display: grid;
  grid-template-rows: 216px 1fr;
  overflow: hidden;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background: var(--color-card);
  transition: 0.3s ease;
}

.series-card:hover {
  transform: translateY(-5.4px);
  border-color: var(--color-line-strong);
}

.series-card__image {
  padding: 25.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at center, rgba(210, 220, 235, 0.12), transparent 52%),
    linear-gradient(rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px), #0d1013;
  background-size:
    auto,
    25.2px 25.2px,
    25.2px 25.2px,
    auto;
}

.series-card__image img {
  max-width: 92%;
  max-height: 171px;
  object-fit: contain;
}

.series-card__content {
  padding: 23.4px;
}

.series-card__content p {
  margin: 0 0 9px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  color: var(--color-text-muted);
}

.series-card__content h3 {
  margin: 0;
  font-size: 25.2px;
  letter-spacing: -0.04em;
}

.series-card__content > span {
  display: block;
  margin-top: 10.8px;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.series-card__meta {
  display: flex;
  justify-content: space-between;
  gap: 16.2px;
  margin-top: 16.2px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.12em;
  color: var(--color-accent);
}

.series-card__meta small {
  color: var(--color-text-muted);
}

.series-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7.2px;
  margin-top: 16.2px;
}

.not-found {
  margin-top: 108px;
}

.not-found h1 {
  font-size: 50.4px;
}

.not-found a {
  color: var(--color-accent);
}

@media (max-width: 1062px) {
  .series-hero,
  .series-products__header {
    grid-template-columns: 1fr;
  }

  .series-hero__visual {
    min-height: 396px;
  }

  .series-products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 612px) {
  .series-page {
    padding-top: 106.2px;
  }

  .series-products__grid {
    grid-template-columns: 1fr;
  }

  .series-hero__visual {
    min-height: 306px;
    padding: 30.6px;
    border-radius: 25.2px;
  }
}
</style>
