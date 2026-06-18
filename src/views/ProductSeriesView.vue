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
    clearProps: 'opacity,visibility,transform',
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
      </section>

      <section class="series-products">
        <div class="series-products__header series-animate">
          <p>PRODUCTS IN THIS SERIES</p>
          <h2>选择具体产品</h2>
          <span>进入具体产品详情后，可以查看该产品对应的多张图片、基础信息和资料申请说明。</span>
        </div>

        <div class="series-products__grid series-animate">
          <RouterLink
            v-for="variant in product.variants"
            :key="variant.id"
            class="series-card"
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
  min-height: auto;
  padding: 126px 0 70.2px;
}

.series-hero__content {
  max-width: 900px;
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

.series-products {
  margin-top: 36px;
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
  opacity: 1;
  min-height: 396px;
  display: grid;
  grid-template-rows: 207px 1fr;
  overflow: hidden;
  border: 0.9px solid rgba(255, 255, 255, 0.18);
  border-radius: 27px;
  background: #171b20;
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.32);
  transition: 0.3s ease;
}

.series-card:hover {
  transform: translateY(-5.4px);
  border-color: rgba(244, 241, 234, 0.28);
  background: #1d2228;
}

.series-card__image {
  margin: 16.2px 16.2px 0;
  padding: 21.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20.7px;
  background: #e8eaee;
}

.series-card__image img {
  max-width: 92%;
  max-height: 153px;
  object-fit: contain;
  filter: drop-shadow(0 18px 22px rgba(0, 0, 0, 0.28));
}

.series-card__content {
  padding: 21.6px 23.4px 23.4px;
  background: #171b20;
}

.series-card:hover .series-card__content {
  background: #1d2228;
}

.series-card__content p {
  margin: 0 0 9px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  color: var(--color-accent);
}

.series-card__content h3 {
  margin: 0;
  font-size: 25.2px;
  letter-spacing: -0.04em;
  color: var(--color-text);
}

.series-card__content > span {
  display: block;
  margin-top: 10.8px;
  line-height: 1.75;
  color: rgba(244, 241, 234, 0.76);
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
  color: var(--color-text-soft);
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
  .series-products__header {
    grid-template-columns: 1fr;
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
}
</style>
