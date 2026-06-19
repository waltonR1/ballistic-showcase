<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <section class="site-footer__brand">
        <p>铠福科技</p>
        <h3>弹道防护装备展示与资料对接平台</h3>
        <span>面向法国及欧洲专业客户，展示个人防护、硬质防护与特殊防护产品目录。</span>
      </section>

      <section class="site-footer__group">
        <strong>产品入口</strong>
        <RouterLink to="/products/vest">防弹背心</RouterLink>
        <RouterLink to="/products/helmet">防弹头盔</RouterLink>
        <RouterLink to="/products/shield">防弹盾牌</RouterLink>
        <RouterLink to="/products/plate">防弹插板</RouterLink>
      </section>

      <section class="site-footer__group">
        <strong>业务说明</strong>
        <span>中国供应链支持</span>
        <span>法国销售管理</span>
        <span>技术资料按需提供</span>
        <span>具体等级以正式文件为准</span>
      </section>

      <section class="site-footer__contact">
        <strong>联系方式</strong>
        <a href="mailto:contact@kaifu-tech.com">contact@kaifu-tech.com</a>
      </section>
    </div>

    <div class="site-footer__bottom">
      <span>© 2026 铠福科技</span>
      <span>Ballistic Protection Equipment Showcase</span>
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
  grid-template-columns: minmax(260px, 1.35fr) repeat(3, minmax(150px, 0.75fr));
  gap: 43.2px;
  padding: 28.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 28px;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 45%), rgba(255, 255, 255, 0.018);
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
  max-width: 460px;
  margin: 0;
  font-size: 27px;
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
  gap: 7.2px;
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
  padding: 18px 4px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
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
    flex-direction: column;
    gap: 7.2px;
  }
}
</style>
