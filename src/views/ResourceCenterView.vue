<template>
  <main class="resource-page">
    <section class="resource-hero">
      <p>RESOURCE CENTER</p>
      <h1>资料中心</h1>
      <span>集中说明产品资料、技术文件和商务沟通的申请方式。正式文件与参数以后续确认为准。</span>
    </section>

    <section class="resource-list" aria-label="资料中心内容">
      <article>
        <strong>产品目录</strong>
        <h2>产品图片与基础信息</h2>
        <p>可按产品系列整理图片、型号说明、应用场景和基础配置资料。</p>
      </article>

      <article>
        <strong>技术文件</strong>
        <h2>规格与测试资料申请</h2>
        <p>具体防护等级、测试标准、认证文件和规格参数需通过正式沟通确认。</p>
      </article>

      <article>
        <strong>商务沟通</strong>
        <h2>采购需求与资料对接</h2>
        <p>可根据客户使用场景、数量范围和目标产品类型整理后续资料。</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.resource-page {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 150px 0 108px;
}

.resource-hero {
  max-width: 920px;
}

.resource-hero p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.resource-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 100.8px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.resource-hero span {
  display: block;
  max-width: 680px;
  margin-top: 21.6px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.resource-list {
  margin-top: 70.2px;
  display: grid;
  gap: 14.4px;
}

.resource-list article {
  padding: 28.8px 32.4px;
  display: grid;
  grid-template-columns: 180px minmax(220px, 0.6fr) 1fr;
  gap: 28.8px;
  align-items: center;
  border: 0.9px solid var(--color-line);
  border-radius: 25.2px;
  background: linear-gradient(90deg, #171b20 0%, #101317 100%);
}

.resource-list strong {
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.18em;
  color: var(--color-accent);
}

.resource-list h2 {
  margin: 0;
  font-size: 25.2px;
}

.resource-list p {
  margin: 0;
  color: var(--color-text-soft);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .resource-list article {
    grid-template-columns: 1fr;
    gap: 12.6px;
  }
}

@media (max-width: 612px) {
  .resource-page {
    padding-top: 117px;
  }
}
</style>
