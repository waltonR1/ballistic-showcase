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
      <span> 展示当前可用于产品资料对接与销售沟通的主要弹道防护装备类别。 </span>
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
        </div>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.products-page {
  padding: 150px 0 120px;
}

.products-page__hero,
.products-page__grid {
  width: min(100% - 48px, var(--container));
  margin: 0 auto;
}

.products-page__hero {
  margin-bottom: 56px;
}

.products-page__hero p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.products-page__hero h1 {
  margin: 0;
  font-size: clamp(52px, 7vw, 96px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.products-page__hero span {
  display: block;
  max-width: 680px;
  margin-top: 24px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.products-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.product-item {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  min-height: 320px;
  border: 1px solid var(--color-line);
  border-radius: 34px;
  overflow: hidden;
  background: var(--color-card);
  transition: 0.3s ease;
}

.product-item:hover {
  transform: translateY(-6px);
  border-color: var(--color-line-strong);
}

.product-item__image {
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px), #0d1013;
  background-size: 30px 30px;
}

.product-item__image img {
  max-width: 88%;
  max-height: 240px;
  object-fit: contain;
}

.product-item__content {
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-item__content p {
  margin: 0 0 14px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.product-item__content h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: -0.05em;
}

.product-item__content span {
  display: block;
  margin-top: 16px;
  line-height: 1.8;
  color: var(--color-text-soft);
}

@media (max-width: 1000px) {
  .products-page__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .product-item {
    grid-template-columns: 1fr;
  }

  .product-item__image {
    min-height: 260px;
  }
}
</style>
