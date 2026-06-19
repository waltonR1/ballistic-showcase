<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { products } from '@/data/products'
import { assetUrl } from '@/utils/asset'
import { revealOnScroll } from '@/utils/motion'

const sectionRef = ref<HTMLElement | null>(null)

const featuredProducts = computed(() => {
  return products.slice(0, 3)
})

onMounted(() => {
  if (!sectionRef.value) return

  revealOnScroll(sectionRef.value, '.product-card', {
    y: 98,
    scale: 0.9,
    rotateX: 10,
    stagger: 0.16,
    duration: 1.08,
  })

  revealOnScroll(sectionRef.value, '.products__footer', {
    y: 56,
    scale: 0.96,
    duration: 0.9,
    delay: 0.1,
  })
})
</script>

<template>
  <section id="products" ref="sectionRef" class="products">
    <div class="products__header">
      <p>PRODUCT CATEGORIES</p>

      <div class="products__header-row">
        <h2>核心防护品类</h2>

        <span>覆盖穿戴式防护、头部防护与现场防护装备，形成面向专业安防、执法与项目采购场景的弹道防护产品体系。</span>
      </div>
    </div>

    <div class="products__grid">
      <RouterLink
        v-for="(item, index) in featuredProducts"
        :key="item.id"
        class="product-card"
        :to="`/products/${item.id}`"
      >
        <div class="product-card__top">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ item.eyebrow }}</p>
        </div>

        <div class="product-card__image">
          <img :src="assetUrl(item.image)" :alt="item.nameZh" />
        </div>

        <div class="product-card__content">
          <p>{{ item.nameFr }}</p>
          <h3>{{ item.nameZh }}</h3>
          <span>{{ item.descriptionZh }}</span>
          <strong>{{ item.variants.length }} 个产品</strong>
        </div>

        <div class="product-card__tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </RouterLink>
    </div>

    <div class="products__footer">
      <div>
        <strong>更多防护组件与项目资料</strong>
        <span>产品目录涵盖防护插板、软质防护组件、硬质防护面板及定制化防护方案，可根据项目需求提供图片、参数与规格资料。</span>
      </div>

      <RouterLink class="products__more" to="/products">
        查看全部产品
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.products {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: var(--section-space) 0;
}

.products__header {
  margin-bottom: 39.6px;
}

.products__header > p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.products__header-row {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 43.2px;
  align-items: end;
}

.products__header h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(37.8px, 5vw, 64.8px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.products__header span {
  display: block;
  max-width: 558px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19.8px;
}

.product-card {
  position: relative;
  min-height: 536px;
  border: 0.9px solid var(--color-line);
  border-radius: 30.6px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0.9px, transparent 0.9px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 42%),
    var(--color-surface-raised);
  background-size: 28.8px 28.8px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background-color 0.35s ease;
}

.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 0%, rgba(210, 220, 235, 0.14), transparent 38%),
    linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.055) 48%, transparent 100%);
  transform: translateX(-120%);
  opacity: 0;
  transition:
    transform 0.7s ease,
    opacity 0.35s ease;
}

.product-card:hover::before {
  transform: translateX(120%);
  opacity: 1;
}

.product-card:hover {
  transform: translateY(-14px) scale(1.012);
  border-color: var(--color-line-hot);
  box-shadow:
    0 34px 96px rgba(0, 0, 0, 0.32),
    0 0 48px rgba(215, 221, 231, 0.08);
}

.product-card__top {
  position: absolute;
  z-index: 2;
  top: 19.8px;
  left: 19.8px;
  right: 19.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
}

.product-card__top span,
.product-card__top p {
  margin: 0;
  font-size: 9.9px;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.product-card__image {
  height: 318px;
  padding: 52.2px 30.6px 23.4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 36%, rgba(255, 255, 255, 0.58), transparent 34%),
    linear-gradient(180deg, rgba(240, 243, 247, 0.22), rgba(120, 130, 145, 0.08)),
    rgba(255, 255, 255, 0.035);
}

.product-card__image img {
  max-width: 88%;
  max-height: 100%;
  object-fit: contain;
  transition: 0.45s ease;
  filter: contrast(1.08) saturate(0.92) drop-shadow(0 20px 24px rgba(0, 0, 0, 0.34));
}

.product-card:hover .product-card__image img {
  transform: scale(1.13) translateY(-7px);
}

.product-card__content {
  padding: 25.2px;
  background: rgba(10, 12, 15, 0.86);
  min-height: 147.6px;
}

.product-card__content p {
  margin: 0 0 10.8px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  color: var(--color-text-muted);
}

.product-card__content h3 {
  margin: 0;
  font-size: 27px;
  letter-spacing: -0.04em;
}

.product-card__content span {
  display: block;
  margin-top: 12.6px;
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.product-card__content strong {
  display: block;
  margin-top: 14.4px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.14em;
  color: var(--color-accent);
}

.product-card__tags {
  position: absolute;
  left: 25.2px;
  right: 25.2px;
  bottom: 19.8px;
  display: flex;
  flex-wrap: wrap;
  gap: 7.2px;
  opacity: 0.72;
  transform: translateY(0);
  transition: 0.3s ease;
}

.product-card:hover .product-card__tags {
  opacity: 1;
}

.product-card__tags span {
  padding: 6.3px 9.9px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: rgba(7, 8, 9, 0.7);
  font-size: 10.8px;
  color: var(--color-text-soft);
}

.products__footer {
  position: relative;
  margin-top: 25.2px;
  padding: 25.2px 28.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.018)),
    rgba(255, 255, 255, 0.025);
  overflow: hidden;
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.products__footer::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 12% 50%, rgba(244, 241, 234, 0.1), transparent 24%),
    linear-gradient(105deg, transparent 0%, transparent 36%, rgba(244, 241, 234, 0.07) 48%, transparent 62%);
  opacity: 0.5;
  transform: translateX(-62%);
  animation: products-footer-scan 8s ease-in-out infinite;
}

.products__footer::after {
  content: '';
  position: absolute;
  left: 28.8px;
  right: 28.8px;
  bottom: 16px;
  height: 1px;
  pointer-events: none;
  background: linear-gradient(90deg, rgba(244, 241, 234, 0.22), transparent 72%);
  opacity: 0.28;
  transform: scaleX(0.62);
  transform-origin: left center;
  transition:
    opacity 0.3s ease,
    transform 0.45s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.products__footer:hover {
  transform: translateY(-3px);
  border-color: rgba(244, 241, 234, 0.2);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.022)),
    rgba(255, 255, 255, 0.035);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.24);
}

.products__footer:hover::after {
  opacity: 0.55;
  transform: scaleX(1);
}

.products__footer > div,
.products__more {
  position: relative;
  z-index: 1;
}

.products__footer strong {
  display: block;
  margin-bottom: 7.2px;
  font-size: 16.2px;
}

.products__footer span {
  display: block;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.products__more {
  flex-shrink: 0;
  height: 41.4px;
  padding: 0 17.1px 0 19.8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0.9px solid var(--color-line-strong);
  border-radius: 899.1px;
  font-size: 12.6px;
  color: var(--color-text);
  transition: 0.25s ease;
}

.products__more span {
  display: inline-block;
  font-family: var(--font-mono);
  transform: translateX(0);
  transition: transform 0.25s ease;
}

.products__more:hover {
  background: var(--color-text);
  color: #08090a;
  transform: translateY(-1.8px);
}

.products__more:hover span {
  transform: translateX(3px);
}

@media (max-width: 990px) {
  .products__header-row {
    grid-template-columns: 1fr;
    gap: 21.6px;
  }

  .products__grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    min-height: auto;
  }

  .product-card__image {
    height: 288px;
  }

  .product-card__tags {
    position: static;
    opacity: 1;
    transform: none;
    padding: 0 25.2px 21.6px;
    background: rgba(12, 15, 18, 0.72);
  }

  .products__footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .products__footer::after {
    left: 25.2px;
    right: 25.2px;
  }
}

@media (max-width: 1188px) and (min-width: 991px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-card:last-child {
    grid-column: span 2;
  }
}

@keyframes products-footer-scan {
  0%,
  24% {
    transform: translateX(-62%);
  }

  68%,
  100% {
    transform: translateX(62%);
  }
}
</style>
