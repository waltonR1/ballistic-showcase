<template>
  <main class="scenario-page">
    <section class="scenario-hero">
      <p>APPLICATION SCENARIOS</p>
      <h1>应用场景</h1>
      <span>按专业客户的使用场景组织产品线索，帮助快速判断应查看哪些防护装备系列。</span>
    </section>

    <section class="scenario-grid" aria-label="应用场景列表">
      <article>
        <span>01</span>
        <h2>执法与安防</h2>
        <p>适合查看警用防弹衣、防弹头盔、防弹盾牌及软质防护组件。</p>
      </article>

      <article>
        <span>02</span>
        <h2>个人防护配置</h2>
        <p>围绕防弹背心、插板、头盔和附件组合，整理基础产品资料。</p>
      </article>

      <article>
        <span>03</span>
        <h2>车辆与设施防护</h2>
        <p>适合查看装甲板、PE 板、防弹格栅等特殊防护材料与方案。</p>
      </article>

      <article>
        <span>04</span>
        <h2>机构采购沟通</h2>
        <p>面向参数确认、图片资料、规格文件和后续商务沟通的资料对接流程。</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.scenario-page {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 150px 0 108px;
}

.scenario-hero {
  max-width: 900px;
}

.scenario-hero p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.scenario-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 100.8px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.scenario-hero span {
  display: block;
  max-width: 680px;
  margin-top: 21.6px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.scenario-grid {
  margin-top: 70.2px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16.2px;
}

.scenario-grid article {
  min-height: 252px;
  padding: 28.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background: linear-gradient(180deg, #171b20 0%, #101317 100%);
}

.scenario-grid span {
  font-family: var(--font-mono);
  font-size: 10.8px;
  color: var(--color-accent);
}

.scenario-grid h2 {
  margin: 43.2px 0 14.4px;
  font-size: 25.2px;
}

.scenario-grid p {
  margin: 0;
  color: var(--color-text-soft);
  line-height: 1.8;
}

@media (max-width: 990px) {
  .scenario-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 612px) {
  .scenario-page {
    padding-top: 117px;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }
}
</style>
