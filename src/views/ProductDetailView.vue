<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { getProductById } from '@/data/products'
import { assetUrl } from '@/utils/asset'

const route = useRoute()
const pageRef = ref<HTMLElement | null>(null)

const product = computed(() => {
  return getProductById(String(route.params.id))
})

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
    <template v-if="product">
      <section class="product-hero">
        <div class="product-hero__content detail-animate">
          <div class="product-hero__breadcrumb">
            <RouterLink to="/">首页</RouterLink>
            <span>/</span>
            <RouterLink to="/products">产品系列</RouterLink>
            <span>/</span>
            <strong>{{ product.nameZh }}</strong>
          </div>

          <p class="product-hero__eyebrow">{{ product.eyebrow }}</p>

          <h1>
            {{ product.nameZh }}
            <span>{{ product.nameFr }}</span>
          </h1>

          <p class="product-hero__description">
            {{ product.detailZh }}
          </p>

          <div class="product-hero__tags">
            <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="product-hero__actions">
            <a href="mailto:contact@example.com">申请技术资料</a>
            <RouterLink to="/products">查看全部产品</RouterLink>
          </div>
        </div>

        <div class="product-hero__visual detail-animate">
          <div class="product-hero__visual-top">
            <span>PRODUCT VISUAL</span>
            <strong>{{ product.eyebrow }}</strong>
          </div>

          <img :src="assetUrl(product.image)" :alt="product.nameZh" />

          <div class="product-hero__visual-bottom">
            <span>DOCUMENTATION</span>
            <strong>Available on request</strong>
          </div>
        </div>
      </section>

      <section class="product-overview">
        <article class="overview-card overview-card--large detail-animate">
          <p>TECHNICAL OVERVIEW</p>
          <h2>基础参数</h2>

          <div class="spec-list">
            <div v-for="spec in product.specs" :key="spec.label" class="spec-list__item">
              <span>{{ spec.label }}</span>
              <strong>{{ spec.value }}</strong>
            </div>
          </div>
        </article>

        <article class="overview-card detail-animate">
          <p>APPLICATIONS</p>
          <h2>应用场景</h2>

          <div class="application-list">
            <span v-for="item in product.applications" :key="item">
              {{ item }}
            </span>
          </div>
        </article>
      </section>

      <section class="product-notice detail-animate">
        <div>
          <p>PROFESSIONAL ENQUIRY</p>
          <h2>面向专业客户的资料对接</h2>
        </div>

        <span>
          页面仅用于产品展示与初步资料说明。具体防护等级、材料结构、测试文件、认证资料与报价信息，
          建议通过正式商务沟通确认。
        </span>
      </section>

      <section class="product-cta detail-animate">
        <div>
          <p>REQUEST INFORMATION</p>
          <h2>需要该产品的技术资料？</h2>
          <span> 可通过邮件联系销售团队，申请产品参数、图片资料、规格文件或进一步商务沟通。 </span>
        </div>

        <a href="mailto:contact@example.com">发送咨询邮件</a>
      </section>
    </template>

    <section v-else class="not-found">
      <h1>产品不存在</h1>
      <RouterLink to="/products">返回产品列表</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.product-detail {
  padding-top: 120px;
}

.product-hero {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  min-height: calc(100vh - 120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 64px;
  align-items: center;
}

.product-hero__breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 34px;
  font-size: 13px;
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
  margin: 0 0 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.24em;
  color: var(--color-accent);
}

.product-hero h1 {
  margin: 0;
  font-size: clamp(56px, 7vw, 96px);
  line-height: 0.92;
  letter-spacing: -0.07em;
}

.product-hero h1 span {
  display: block;
  margin-top: 18px;
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.product-hero__description {
  max-width: 620px;
  margin: 32px 0 0;
  font-size: 17px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.product-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.product-hero__tags span {
  padding: 8px 12px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-soft);
  font-size: 13px;
}

.product-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 36px;
}

.product-hero__actions a {
  height: 48px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 14px;
  transition: 0.25s ease;
}

.product-hero__actions a:first-child {
  background: var(--color-text);
  color: #08090a;
}

.product-hero__actions a:last-child {
  border: 1px solid var(--color-line-strong);
  color: var(--color-text);
}

.product-hero__actions a:hover {
  transform: translateY(-2px);
}

.product-hero__visual {
  position: relative;
  min-height: 620px;
  border: 1px solid var(--color-line);
  border-radius: 40px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    radial-gradient(circle at center, rgba(210, 220, 235, 0.14), transparent 50%), #101317;
  background-size:
    34px 34px,
    34px 34px,
    auto,
    auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-hero__visual img {
  width: 72%;
  max-height: 520px;
  object-fit: contain;
  filter: contrast(1.06) saturate(0.9);
}

.product-hero__visual-top,
.product-hero__visual-bottom {
  position: absolute;
  padding: 14px 16px;
  border: 1px solid var(--color-line);
  border-radius: 18px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(14px);
}

.product-hero__visual-top {
  top: 24px;
  left: 24px;
}

.product-hero__visual-bottom {
  right: 24px;
  bottom: 24px;
}

.product-hero__visual-top span,
.product-hero__visual-bottom span {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.product-hero__visual-top strong,
.product-hero__visual-bottom strong {
  font-size: 13px;
  color: var(--color-text);
}

.product-overview {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
}

.overview-card {
  padding: 38px;
  border: 1px solid var(--color-line);
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 34%),
    var(--color-card);
}

.overview-card > p,
.product-notice p,
.product-cta p {
  margin: 0 0 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.overview-card h2,
.product-notice h2,
.product-cta h2 {
  margin: 0;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.spec-list {
  margin-top: 34px;
}

.spec-list__item {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-line);
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

.application-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.application-list span {
  padding: 12px 16px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  color: var(--color-text-soft);
  background: rgba(255, 255, 255, 0.025);
}

.product-notice {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 20px auto 0;
  padding: 38px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  align-items: center;
  border: 1px solid var(--color-line);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.025);
}

.product-notice span {
  line-height: 1.9;
  color: var(--color-text-soft);
}

.product-cta {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 80px auto 120px;
  padding: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  border: 1px solid var(--color-line);
  border-radius: 38px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.12), transparent 36%),
    var(--color-card);
}

.product-cta span {
  display: block;
  max-width: 680px;
  margin-top: 18px;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.product-cta a {
  flex-shrink: 0;
  height: 50px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-text);
  color: #08090a;
  font-size: 14px;
  transition: 0.25s ease;
}

.product-cta a:hover {
  transform: translateY(-2px);
}

.not-found {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 160px auto;
}

.not-found h1 {
  font-size: 56px;
}

.not-found a {
  color: var(--color-accent);
}

@media (max-width: 980px) {
  .product-hero,
  .product-overview,
  .product-notice {
    grid-template-columns: 1fr;
  }

  .product-hero {
    gap: 40px;
  }

  .product-hero__visual {
    min-height: 420px;
  }

  .product-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
