<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { products } from '@/data/products'
import { assetUrl } from '@/utils/asset'

const sectionRef = ref<HTMLElement | null>(null)

const featuredProducts = computed(() => {
  return products.slice(0, 3)
})

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.product-card'),
    {
      autoAlpha: 0,
      y: 28,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      clearProps: 'opacity,visibility,transform',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 72%',
        once: true,
      },
    },
  )

  gsap.fromTo(
    sectionRef.value.querySelector('.products__footer'),
    {
      autoAlpha: 0,
      y: 18,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      clearProps: 'opacity,visibility,transform',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 65%',
        once: true,
      },
    },
  )
})
</script>

<template>
  <section id="products" ref="sectionRef" class="products">
    <div class="products__header">
      <p>PRODUCT CATEGORIES</p>

      <div class="products__header-row">
        <h2>核心产品系列</h2>

        <span> 从个人防护到硬质防护组件，面向专业客户提供弹道防护装备展示与资料对接。 </span>
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
        </div>

        <div class="product-card__tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </RouterLink>
    </div>

    <div class="products__footer">
      <div>
        <strong>更多产品资料可按需提供</strong>
        <span>防弹插板、防弹芯片、软质防护组件及特殊防护方案可在后续产品页中展示。</span>
      </div>

      <RouterLink class="products__more" to="/products"> 查看全部产品 </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.products {
  width: min(100% - 48px, var(--container));
  margin: 0 auto;
  padding: 120px 0;
}

.products__header {
  margin-bottom: 44px;
}

.products__header > p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.products__header-row {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 48px;
  align-items: end;
}

.products__header h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.products__header span {
  display: block;
  max-width: 620px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.product-card {
  position: relative;
  min-height: 560px;
  border: 1px solid var(--color-line);
  border-radius: 34px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px), var(--color-card);
  background-size: 32px 32px;
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
  transform: translateY(-10px);
  border-color: var(--color-line-strong);
}

.product-card__top {
  position: absolute;
  z-index: 2;
  top: 22px;
  left: 22px;
  right: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
}

.product-card__top span,
.product-card__top p {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.product-card__image {
  height: 340px;
  padding: 58px 34px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at center, rgba(210, 220, 235, 0.12), transparent 52%),
    rgba(255, 255, 255, 0.015);
}

.product-card__image img {
  max-width: 88%;
  max-height: 100%;
  object-fit: contain;
  transition: 0.45s ease;
  filter: contrast(1.06) saturate(0.9);
}

.product-card:hover .product-card__image img {
  transform: scale(1.06) translateY(-4px);
}

.product-card__content {
  padding: 28px;
  background: rgba(12, 15, 18, 0.72);
  min-height: 164px;
}

.product-card__content p {
  margin: 0 0 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
}

.product-card__content h3 {
  margin: 0;
  font-size: 30px;
  letter-spacing: -0.04em;
}

.product-card__content span {
  display: block;
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.product-card__tags {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  opacity: 0;
  transform: translateY(12px);
  transition: 0.3s ease;
}

.product-card:hover .product-card__tags {
  opacity: 1;
  transform: translateY(0);
}

.product-card__tags span {
  padding: 7px 11px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: rgba(7, 8, 9, 0.7);
  font-size: 12px;
  color: var(--color-text-soft);
}

.products__footer {
  margin-top: 28px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border: 1px solid var(--color-line);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.025);
}

.products__footer strong {
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
}

.products__footer span {
  display: block;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.products__more {
  flex-shrink: 0;
  height: 46px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-line-strong);
  border-radius: 999px;
  font-size: 14px;
  color: var(--color-text);
  transition: 0.25s ease;
}

.products__more:hover {
  background: var(--color-text);
  color: #08090a;
  transform: translateY(-2px);
}

@media (max-width: 1100px) {
  .products__header-row {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .products__grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    min-height: auto;
  }

  .product-card__image {
    height: 320px;
  }

  .product-card__tags {
    position: static;
    opacity: 1;
    transform: none;
    padding: 0 28px 24px;
    background: rgba(12, 15, 18, 0.72);
  }

  .products__footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
