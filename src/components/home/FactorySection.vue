<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { assetUrl } from '@/utils/asset'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.factory-animate'),
    {
      autoAlpha: 0,
      y: 32,
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
  <section id="quality" ref="sectionRef" class="factory-section">
    <div class="factory-section__header factory-animate">
      <p>PRODUCTION & QUALITY</p>

      <div>
        <h2>生产能力与质量控制</h2>
        <span>
          依托中国供应链合作方的生产与加工能力，结合法国团队的销售管理、客户沟通与资料对接，
          为专业客户提供清晰、可追踪的产品展示与商务支持。
        </span>
      </div>
    </div>

    <div class="factory-section__body">
      <div class="factory-section__visual factory-animate">
        <img :src="assetUrl('/images/factory/设备.jpg')" alt="生产设备与工厂环境" />

        <div class="factory-section__visual-label">
          <span>SUPPLY CHAIN</span>
          <strong>China Manufacturing Support</strong>
        </div>
      </div>

      <div class="factory-section__cards">
        <article class="factory-card factory-animate">
          <span>01</span>
          <h3>生产与供货支持</h3>
          <p>通过中国供应链合作方提供产品生产、样品准备、批量供货及基础资料支持。</p>
        </article>

        <article class="factory-card factory-animate">
          <span>02</span>
          <h3>产品资料整理</h3>
          <p>根据客户需求整理产品图片、基础参数、规格说明与技术文件申请流程。</p>
        </article>

        <article class="factory-card factory-animate">
          <span>03</span>
          <h3>法国销售管理</h3>
          <p>法国团队负责客户沟通、需求确认、订单协调、资料对接与后续商务跟进。</p>
        </article>
      </div>
    </div>

    <div class="factory-section__metrics factory-animate">
      <div>
        <strong>OEM / ODM</strong>
        <span>供应链支持</span>
      </div>

      <div>
        <strong>QC</strong>
        <span>质量检查流程</span>
      </div>

      <div>
        <strong>DOCS</strong>
        <span>技术资料申请</span>
      </div>

      <div>
        <strong>FR</strong>
        <span>法国销售管理</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.factory-section {
  width: min(100% - 48px, var(--container));
  margin: 0 auto;
  padding: 120px 0;
}

.factory-section__header {
  margin-bottom: 46px;
}

.factory-section__header > p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.factory-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: end;
}

.factory-section__header h2 {
  margin: 0;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.factory-section__header span {
  display: block;
  max-width: 700px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.factory-section__body {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
}

.factory-section__visual {
  position: relative;
  min-height: 620px;
  border: 1px solid var(--color-line);
  border-radius: 38px;
  overflow: hidden;
  background: var(--color-card);
}

.factory-section__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(7, 8, 9, 0.05) 0%, rgba(7, 8, 9, 0.72) 100%),
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.14), transparent 34%);
}

.factory-section__visual img {
  width: 100%;
  height: 100%;
  min-height: 620px;
  object-fit: cover;
  filter: contrast(1.04) saturate(0.82) brightness(0.82);
}

.factory-section__visual-label {
  position: absolute;
  z-index: 2;
  left: 28px;
  bottom: 28px;
  padding: 16px 18px;
  border: 1px solid var(--color-line);
  border-radius: 18px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(14px);
}

.factory-section__visual-label span {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.factory-section__visual-label strong {
  font-size: 14px;
  color: var(--color-text);
}

.factory-section__cards {
  display: grid;
  gap: 18px;
}

.factory-card {
  min-height: 194px;
  padding: 30px;
  border: 1px solid var(--color-line);
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 38%),
    var(--color-card);
}

.factory-card span {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-accent);
}

.factory-card h3 {
  margin: 34px 0 12px;
  font-size: 26px;
  letter-spacing: -0.04em;
}

.factory-card p {
  margin: 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.factory-section__metrics {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--color-line);
  border-radius: 30px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.025);
}

.factory-section__metrics div {
  padding: 26px 28px;
  border-right: 1px solid var(--color-line);
}

.factory-section__metrics div:last-child {
  border-right: none;
}

.factory-section__metrics strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 18px;
  letter-spacing: 0.12em;
  color: var(--color-text);
}

.factory-section__metrics span {
  color: var(--color-text-muted);
  font-size: 14px;
}

@media (max-width: 980px) {
  .factory-section__header > div,
  .factory-section__body {
    grid-template-columns: 1fr;
  }

  .factory-section__visual,
  .factory-section__visual img {
    min-height: 420px;
  }

  .factory-section__metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory-section__metrics div:nth-child(2) {
    border-right: none;
  }

  .factory-section__metrics div:nth-child(1),
  .factory-section__metrics div:nth-child(2) {
    border-bottom: 1px solid var(--color-line);
  }
}

@media (max-width: 620px) {
  .factory-section__metrics {
    grid-template-columns: 1fr;
  }

  .factory-section__metrics div {
    border-right: none;
    border-bottom: 1px solid var(--color-line);
  }

  .factory-section__metrics div:last-child {
    border-bottom: none;
  }
}
</style>
