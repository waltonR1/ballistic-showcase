<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)

const steps = [
  {
    index: '01',
    code: 'CN',
    title: '中国供应链',
    desc: '产品由中国供应链合作方提供生产、样品、图片、基础资料与供货支持。',
  },
  {
    index: '02',
    code: 'FR',
    title: '法国销售管理',
    desc: '法国团队负责客户沟通、需求确认、资料对接、订单协调与销售管理。',
  },
  {
    index: '03',
    code: 'EU',
    title: '欧洲专业客户',
    desc: '面向法国及欧洲安防、机构、企业及专业采购场景提供展示与咨询。',
  },
]

const capabilities = [
  '产品资料整理',
  '客户需求确认',
  '商务沟通支持',
  '订单协调',
  '中法双语展示',
  '技术文件申请',
]

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.management-animate'),
    {
      autoAlpha: 0,
      y: 34,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'opacity,visibility,transform',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 72%',
        once: true,
      },
    },
  )
})
</script>

<template>
  <section id="management" ref="sectionRef" class="management-section">
    <div class="management-section__header management-animate">
      <p>FRANCE SALES MANAGEMENT</p>

      <div>
        <h2>中国供应链，法国销售与管理团队</h2>
        <span>
          网站定位不是普通电商，而是面向法国及欧洲专业客户的产品展示、资料对接与销售管理平台。
          中国供应链负责产品与生产支持，法国团队负责市场沟通、客户跟进与商务协调。
        </span>
      </div>
    </div>

    <div class="management-section__body">
      <div class="management-section__intro management-animate">
        <span>POSITIONING</span>
        <h3>法国本地销售管理，让供应链产品更适合欧洲专业客户沟通。</h3>

        <p>
          对于弹道防护类产品，客户通常不会直接在线下单，而是需要了解产品类别、技术资料、
          应用场景、文件支持与后续商务沟通。因此网站应突出专业展示与可信对接，而不是购物车逻辑。
        </p>

        <a href="#contact">联系销售团队</a>
      </div>

      <div class="management-section__flow">
        <article v-for="step in steps" :key="step.index" class="flow-card management-animate">
          <div class="flow-card__top">
            <span>{{ step.index }}</span>
            <strong>{{ step.code }}</strong>
          </div>

          <div class="flow-card__content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="management-section__capabilities management-animate">
      <span v-for="item in capabilities" :key="item">
        {{ item }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.management-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 120px 0;
}

.management-section__header {
  margin-bottom: 46px;
}

.management-section__header > p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.management-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: end;
}

.management-section__header h2 {
  margin: 0;
  max-width: 820px;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.management-section__header span {
  display: block;
  max-width: 760px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.management-section__body {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 22px;
}

.management-section__intro {
  min-height: 560px;
  padding: 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid var(--color-line);
  border-radius: 38px;
  background:
    radial-gradient(circle at 20% 10%, rgba(210, 220, 235, 0.12), transparent 36%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent), var(--color-card);
}

.management-section__intro > span {
  margin-bottom: auto;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.management-section__intro h3 {
  margin: 0;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.management-section__intro p {
  margin: 22px 0 0;
  line-height: 1.85;
  color: var(--color-text-soft);
}

.management-section__intro a {
  width: fit-content;
  height: 48px;
  margin-top: 32px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-text);
  color: #08090a;
  font-size: 14px;
  transition: 0.25s ease;
}

.management-section__intro a:hover {
  transform: translateY(-2px);
}

.management-section__flow {
  position: relative;
  display: grid;
  gap: 18px;
}

.management-section__flow::before {
  content: '';
  position: absolute;
  top: 82px;
  bottom: 82px;
  left: 38px;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.22), transparent);
}

.flow-card {
  position: relative;
  min-height: 174px;
  padding: 30px;
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 28px;
  align-items: center;
  border: 1px solid var(--color-line);
  border-radius: 32px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 38%),
    var(--color-card);
}

.flow-card__top {
  position: relative;
  z-index: 2;
}

.flow-card__top span {
  display: block;
  margin-bottom: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-accent);
}

.flow-card__top strong {
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-line-strong);
  border-radius: 999px;
  background: rgba(7, 8, 9, 0.72);
  font-family: var(--font-mono);
  font-size: 18px;
  letter-spacing: 0.12em;
}

.flow-card__content h3 {
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.04em;
}

.flow-card__content p {
  margin: 14px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.management-section__capabilities {
  margin-top: 22px;
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 1px solid var(--color-line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.025);
}

.management-section__capabilities span {
  padding: 10px 14px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  color: var(--color-text-soft);
  background: rgba(7, 8, 9, 0.46);
  font-size: 14px;
}

@media (max-width: 980px) {
  .management-section__header > div,
  .management-section__body {
    grid-template-columns: 1fr;
  }

  .management-section__intro {
    min-height: auto;
  }
}

@media (max-width: 680px) {
  .flow-card {
    grid-template-columns: 1fr;
  }

  .management-section__flow::before {
    display: none;
  }
}
</style>
