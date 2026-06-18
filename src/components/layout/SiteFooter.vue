<script setup lang="ts"></script>
<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__left">
        <p>铠福科技</p>
        <h3>专业弹道防护装备展示平台</h3>
        <span> 面向法国及欧洲专业客户，提供产品展示、资料对接与销售沟通服务。</span>
      </div>

      <div class="site-footer__right">
        <div>
          <strong>Navigation</strong>
          <a href="#">首页</a>
          <a href="#products">产品系列</a>
          <a href="#technology">防护技术</a>
          <a href="#contact">联系询盘</a>
        </div>

        <div>
          <strong>Contact</strong>
          <a href="mailto:contact@example.com">contact@example.com</a>
          <span>France Sales Management</span>
          <span>China Supply Chain Support</span>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <span>© 2026 铠福科技</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto 36px;
  padding: 43.2px 0 0;
  border-top: 0.9px solid var(--color-line);
}

.site-footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 43.2px;
  padding-bottom: 25.2px;
}

.site-footer__left {
  max-width: 414px;
}

.site-footer__left p {
  margin: 0 0 10.8px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.site-footer__left h3 {
  margin: 0;
  font-size: 27px;
  line-height: 1.1;
}

.site-footer__left span {
  display: block;
  margin-top: 14.4px;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.site-footer__right {
  display: flex;
  gap: 57.6px;
}

.site-footer__right div {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.site-footer__right strong {
  margin-bottom: 7.2px;
  font-size: 12.6px;
}

.site-footer__right a,
.site-footer__right span {
  color: var(--color-text-soft);
  font-size: 12.6px;
}

.site-footer__bottom {
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  border-top: 0.9px solid var(--color-line);
  color: var(--color-text-muted);
  font-size: 10.8px;
}

@media (max-width: 810px) {
  .site-footer__inner {
    flex-direction: column;
  }

  .site-footer__right {
    flex-direction: column;
    gap: 21.6px;
  }

  .site-footer__bottom {
    flex-direction: column;
    gap: 7.2px;
  }
}
</style>
