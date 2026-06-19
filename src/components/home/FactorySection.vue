<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { revealOnScroll } from '@/utils/motion'
import { assetUrl } from '@/utils/asset'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  revealOnScroll(sectionRef.value, '.factory-animate', {
    y: 92,
    scale: 0.93,
    rotateX: 8,
    stagger: 0.13,
    duration: 1.1,
  })
})
</script>

<template>
  <section id="quality" ref="sectionRef" class="factory-section">
    <div class="factory-section__header factory-animate">
      <p>PRODUCTION & QUALITY</p>

      <div>
        <h2>生产能力与质量控制</h2>
        <span>
          依托中国供应链合作方的生产与加工能力，结合法国团队的销售管理、客户沟通与资料对接，为专业客户提供清晰、可追踪的产品展示与商务支持。
        </span>
      </div>
    </div>

    <div class="factory-section__body">
      <div class="factory-section__visual factory-animate">
        <img :src="assetUrl('/images/factory/设备.jpg')" alt="生产设备与工厂环境" />

        <div class="factory-section__inspection" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

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
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: var(--section-space) 0;
}

.factory-section__header {
  margin-bottom: 41.4px;
}

.factory-section__header > p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.factory-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 43.2px;
  align-items: end;
}

.factory-section__header h2 {
  margin: 0;
  font-size: clamp(37.8px, 5vw, 64.8px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.factory-section__header span {
  display: block;
  max-width: 630px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.factory-section__body {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 19.8px;
}

.factory-section__visual {
  position: relative;
  min-height: 558px;
  border: 0.9px solid var(--color-line);
  border-radius: 34.2px;
  overflow: hidden;
  background: var(--color-card);
  box-shadow: var(--shadow-panel);
  transition:
    border-color 0.34s ease,
    box-shadow 0.34s ease,
    transform 0.34s ease;
}

.factory-section__visual:hover {
  border-color: rgba(244, 241, 234, 0.24);
  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.44),
    0 0 70px rgba(210, 220, 235, 0.08);
  transform: translateY(-2px);
}

.factory-section__visual::before {
  content: '';
  position: absolute;
  inset: 24px;
  z-index: 2;
  pointer-events: none;
  border: 1px solid rgba(244, 241, 234, 0);
  border-radius: 22px;
  background:
    linear-gradient(90deg, rgba(244, 241, 234, 0.16), transparent 1px),
    linear-gradient(rgba(244, 241, 234, 0.12), transparent 1px);
  background-size: 42px 100%, 100% 42px;
  opacity: 0;
  transform: scale(0.985);
  transition:
    opacity 0.34s ease,
    border-color 0.34s ease,
    transform 0.34s ease;
}

.factory-section__visual:hover::before {
  border-color: rgba(244, 241, 234, 0.14);
  opacity: 0.52;
  transform: scale(1);
}

.factory-section__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(7, 8, 9, 0.05) 0%, rgba(7, 8, 9, 0.72) 100%),
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.14), transparent 34%);
  transition: opacity 0.34s ease;
}

.factory-section__visual:hover::after {
  opacity: 0.82;
}

.factory-section__visual img {
  width: 100%;
  height: 100%;
  min-height: 558px;
  object-fit: cover;
  filter: contrast(1.04) saturate(0.82) brightness(0.82);
  transform: scale(1);
  transition:
    filter 0.6s ease,
    transform 0.8s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.factory-section__visual:hover img {
  filter: contrast(1.12) saturate(0.9) brightness(0.88);
  transform: scale(1.055);
}

.factory-section__inspection {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.factory-section__inspection::before {
  content: '';
  position: absolute;
  top: -12%;
  bottom: -12%;
  left: -24%;
  width: 18%;
  background:
    linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.18), transparent),
    linear-gradient(90deg, transparent 0 48%, rgba(244, 241, 234, 0.52) 50%, transparent 52% 100%);
  filter: blur(0.2px);
  transform: skewX(-11deg);
}

.factory-section__inspection::after {
  content: '';
  position: absolute;
  left: 9%;
  right: 9%;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.76), transparent);
  box-shadow:
    0 -92px 0 rgba(244, 241, 234, 0.08),
    0 92px 0 rgba(244, 241, 234, 0.08);
  transform: scaleX(0.3);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.42s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.factory-section__visual:hover .factory-section__inspection {
  opacity: 1;
}

.factory-section__visual:hover .factory-section__inspection::before {
  animation: factory-inspection-sweep 1.7s cubic-bezier(0.18, 0.95, 0.18, 1) infinite;
}

.factory-section__visual:hover .factory-section__inspection::after {
  opacity: 0.86;
  transform: scaleX(1);
}

.factory-section__inspection span {
  position: absolute;
  width: 54px;
  height: 54px;
  border-color: rgba(244, 241, 234, 0.74);
  opacity: 0;
  transition:
    opacity 0.28s ease,
    transform 0.42s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.factory-section__inspection span:nth-child(1) {
  left: 34px;
  top: 34px;
  border-top: 1px solid;
  border-left: 1px solid;
  transform: translate(12px, 12px);
}

.factory-section__inspection span:nth-child(2) {
  right: 34px;
  top: 34px;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: translate(-12px, 12px);
}

.factory-section__inspection span:nth-child(3) {
  right: 34px;
  bottom: 34px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  transform: translate(-12px, -12px);
}

.factory-section__inspection span:nth-child(4) {
  left: 34px;
  bottom: 34px;
  border-left: 1px solid;
  border-bottom: 1px solid;
  transform: translate(12px, -12px);
}

.factory-section__visual:hover .factory-section__inspection span {
  opacity: 1;
  transform: translate(0, 0);
}

.factory-section__visual-label {
  position: absolute;
  z-index: 4;
  left: 25.2px;
  bottom: 25.2px;
  padding: 14.4px 16.2px;
  border: 0.9px solid var(--color-line);
  border-radius: 16.2px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(12.6px);
  transition:
    border-color 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}

.factory-section__visual:hover .factory-section__visual-label {
  border-color: rgba(244, 241, 234, 0.2);
  background: rgba(8, 9, 10, 0.82);
  transform: translate(8px, -8px);
}

.factory-section__visual-label span {
  display: block;
  margin-bottom: 5.4px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.factory-section__visual-label strong {
  font-size: 12.6px;
  color: var(--color-text);
}

.factory-section__cards {
  display: grid;
  gap: 16.2px;
}

.factory-card {
  min-height: 174.6px;
  padding: 27px;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 38%),
    var(--color-surface);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.factory-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-line-strong);
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.12), transparent 42%),
    var(--color-surface-raised);
}

.factory-card span {
  font-family: var(--font-mono);
  font-size: 10.8px;
  color: var(--color-accent);
}

.factory-card h3 {
  margin: 30.6px 0 10.8px;
  font-size: 23.4px;
  letter-spacing: -0.04em;
}

.factory-card p {
  margin: 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.factory-section__metrics {
  margin-top: 19.8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.018)),
    rgba(255, 255, 255, 0.025);
}

.factory-section__metrics div {
  padding: 23.4px 25.2px;
  border-right: 0.9px solid var(--color-line);
}

.factory-section__metrics div:last-child {
  border-right: none;
}

.factory-section__metrics strong {
  display: block;
  margin-bottom: 7.2px;
  font-family: var(--font-mono);
  font-size: 16.2px;
  letter-spacing: 0.12em;
  color: var(--color-text);
}

.factory-section__metrics span {
  color: var(--color-text-muted);
  font-size: 12.6px;
}

@media (max-width: 882px) {
  .factory-section__header > div,
  .factory-section__body {
    grid-template-columns: 1fr;
  }

  .factory-section__visual,
  .factory-section__visual img {
    min-height: 378px;
  }

  .factory-section__metrics {
    grid-template-columns: repeat(2, 1fr);
  }

  .factory-section__metrics div:nth-child(2) {
    border-right: none;
  }

  .factory-section__metrics div:nth-child(1),
  .factory-section__metrics div:nth-child(2) {
    border-bottom: 0.9px solid var(--color-line);
  }
}

@media (max-width: 558px) {
  .factory-section__metrics {
    grid-template-columns: 1fr;
  }

  .factory-section__metrics div {
    border-right: none;
    border-bottom: 0.9px solid var(--color-line);
  }

  .factory-section__metrics div:last-child {
    border-bottom: none;
  }
}

@keyframes factory-inspection-sweep {
  0% {
    left: -26%;
    opacity: 0;
  }

  18%,
  72% {
    opacity: 1;
  }

  100% {
    left: 108%;
    opacity: 0;
  }
}
</style>
