<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { products } from '@/data/products'
import { assetUrl } from '@/utils/asset'
</script>

<template>
  <main class="products-page">
    <section class="products-page__hero">
      <p>ALL PRODUCTS</p>
      <h1>全部产品系列</h1>
      <span> 展示当前可用于产品资料对接与销售沟通的主要弹道防护装备类别。</span>
    </section>

    <section class="products-page__grid">
      <RouterLink
        v-for="item in products"
        :key="item.id"
        class="product-item"
        :to="`/products/${item.id}`"
      >
        <div class="product-item__image">
          <img :src="assetUrl(item.image)" :alt="item.nameZh" />
        </div>

        <div class="product-item__content">
          <p>{{ item.eyebrow }}</p>
          <h2>{{ item.nameZh }}</h2>
          <span>{{ item.descriptionZh }}</span>

          <div class="product-item__variants">
            <strong>{{ item.variants.length }} 个产品</strong>
            <div>
              <span v-for="variant in item.variants.slice(0, 4)" :key="variant.nameZh">
                {{ variant.nameZh }}
              </span>
            </div>
          </div>
        </div>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.products-page {
  padding: 135px 0 108px;
}

.products-page__hero,
.products-page__grid {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
}

.products-page__hero {
  margin-bottom: 50.4px;
}

.products-page__hero p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.products-page__hero h1 {
  margin: 0;
  font-size: clamp(46.8px, 7vw, 86.4px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.products-page__hero span {
  display: block;
  max-width: 612px;
  margin-top: 21.6px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.products-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.product-item {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  min-height: 288px;
  border: 0.9px solid var(--color-line);
  border-radius: 30.6px;
  overflow: hidden;
  background: var(--color-card);
  transition: 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5.4px);
  border-color: var(--color-line-strong);
}

.product-item__image {
  padding: 28.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px), #0d1013;
  background-size: 27px 27px;
}

.product-item__image img {
  max-width: 88%;
  max-height: 216px;
  object-fit: contain;
}

.product-item__content {
  padding: 32.4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-item__content p {
  margin: 0 0 12.6px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.product-item__content h2 {
  margin: 0;
  font-size: 30.6px;
  letter-spacing: -0.05em;
}

.product-item__content span {
  display: block;
  margin-top: 14.4px;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.product-item__variants {
  margin-top: 21.6px;
}

.product-item__variants strong {
  display: block;
  margin-bottom: 10.8px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.14em;
  color: var(--color-accent);
}

.product-item__variants div {
  display: flex;
  flex-wrap: wrap;
  gap: 7.2px;
}

.product-item__variants span {
  margin: 0;
  padding: 6.3px 9px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: rgba(255, 255, 255, 0.025);
  font-size: 10.8px;
  line-height: 1.2;
  color: var(--color-text-soft);
}

@media (max-width: 900px) {
  .products-page__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 612px) {
  .product-item {
    grid-template-columns: 1fr;
  }

  .product-item__image {
    min-height: 234px;
  }
}
</style>
