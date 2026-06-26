<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { products } from '@/data/products'
import { productName, useI18n } from '@/i18n'

const { t } = useI18n()
const footerProducts = products.slice(0, 4)
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <section class="site-footer__brand">
        <p>{{ t('brand') }}</p>
        <h3>{{ t('footerTitle') }}</h3>
        <span>{{ t('footerDesc') }}</span>
      </section>

      <section class="site-footer__group">
        <strong>{{ t('footerProducts') }}</strong>
        <RouterLink v-for="item in footerProducts" :key="item.id" :to="`/products/${item.id}`">
          {{ productName(item) }}
        </RouterLink>
      </section>

      <section class="site-footer__group">
        <strong>{{ t('footerServices') }}</strong>
        <RouterLink to="/manufacturing">{{ t('footerManufacturing') }}</RouterLink>
        <RouterLink to="/resources">{{ t('footerResources') }}</RouterLink>
        <RouterLink to="/scenarios">{{ t('footerScenarios') }}</RouterLink>
        <span>{{ t('footerDisclaimer') }}</span>
      </section>

      <section class="site-footer__contact">
        <strong>{{ t('footerContact') }}</strong>
        <a href="mailto:contact@kaifu-tech.com">contact@kaifu-tech.com</a>
      </section>
    </div>

    <div class="site-footer__bottom">
      <span>© 2026 SHANGHAI CAREFUL TECHNOLOGY CO.,LTD</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto 32px;
  padding: 36px 0 0;
  border-top: 0.9px solid var(--color-line);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(280px, 1.35fr) minmax(150px, 0.72fr) minmax(170px, 0.82fr) minmax(180px, 0.72fr);
  gap: clamp(28px, 4vw, 56px);
  padding: 30px 32px;
  border: 0.9px solid var(--color-line);
  border-radius: 28px;
  background:
    radial-gradient(circle at 0% 0%, rgba(175, 194, 222, 0.08), transparent 26%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 45%),
    rgba(255, 255, 255, 0.018);
}

.site-footer__brand p,
.site-footer__group strong,
.site-footer__contact strong {
  margin: 0 0 10.8px;
  display: block;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.site-footer__brand h3 {
  max-width: 520px;
  margin: 0;
  font-size: clamp(23px, 2vw, 29px);
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.site-footer__brand span,
.site-footer__group a,
.site-footer__group span,
.site-footer__contact a,
.site-footer__contact span {
  color: var(--color-text-soft);
  font-size: 12.6px;
  line-height: 1.8;
}

.site-footer__brand span {
  display: block;
  max-width: 430px;
  margin-top: 14.4px;
}

.site-footer__group,
.site-footer__contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.site-footer__group a,
.site-footer__contact a {
  transition: color 0.25s ease;
}

.site-footer__group a:hover,
.site-footer__contact a:hover {
  color: var(--color-text);
}

.site-footer__contact span {
  max-width: 230px;
  color: var(--color-text-muted);
}

.site-footer__bottom {
  padding: 18px 4px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 10.8px;
}

@media (max-width: 990px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 612px) {
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 27px;
  }

  .site-footer__bottom {
    padding-top: 16px;
  }
}
</style>
