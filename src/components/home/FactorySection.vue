<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { revealOnScroll } from '@/utils/motion'
import { assetUrl } from '@/utils/asset'
import { useI18n } from '@/i18n'

const sectionRef = ref<HTMLElement | null>(null)
const { t } = useI18n()

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
        <h2>{{ t('factoryTitle') }}</h2>
        <span>
          {{ t('factoryDescription') }}
        </span>
      </div>
    </div>

    <div class="factory-section__body">
      <div class="factory-section__visual factory-animate">
        <img :src="assetUrl('/images/factory/设备.jpg')" :alt="t('factoryImageAlt')" />

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
          <h3>{{ t('factoryCard1Title') }}</h3>
          <p>{{ t('factoryCard1Desc') }}</p>
        </article>

        <article class="factory-card factory-animate">
          <span>02</span>
          <h3>{{ t('factoryCard2Title') }}</h3>
          <p>{{ t('factoryCard2Desc') }}</p>
        </article>

        <article class="factory-card factory-animate">
          <span>03</span>
          <h3>{{ t('factoryCard3Title') }}</h3>
          <p>{{ t('factoryCard3Desc') }}</p>
        </article>
      </div>
    </div>

    <div class="factory-section__metrics factory-animate">
      <div>
        <strong>OEM / ODM</strong>
        <span>{{ t('metricOem') }}</span>
      </div>

      <div>
        <strong>QC</strong>
        <span>{{ t('metricQc') }}</span>
      </div>

      <div>
        <strong>DOCS</strong>
        <span>{{ t('metricDocs') }}</span>
      </div>

      <div>
        <strong>FR</strong>
        <span>{{ t('metricFr') }}</span>
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
  background-size:
    42px 100%,
    100% 42px;
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
  position: relative;
  margin-top: 19.8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.018)),
    rgba(255, 255, 255, 0.025);
  isolation: isolate;
}

.factory-section__metrics::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    112deg,
    transparent 0%,
    transparent 35%,
    rgba(244, 241, 234, 0.045) 48%,
    transparent 62%,
    transparent 100%
  );
  opacity: 0.42;
  transform: translateX(-72%);
  animation: factory-metrics-scan 8.6s ease-in-out infinite;
  z-index: 1;
}

.factory-section__metrics div {
  position: relative;
  z-index: 2;
  padding: 23.4px 25.2px;
  border-right: 0.9px solid var(--color-line);
  background: rgba(7, 8, 9, 0.16);
  transition:
    transform 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;
}

.factory-section__metrics div::before {
  content: '';
  position: absolute;
  top: 14px;
  left: 25.2px;
  width: 6px;
  height: 6px;
  border: 1px solid rgba(244, 241, 234, 0.34);
  border-radius: 50%;
  background: rgba(7, 8, 9, 0.72);
  box-shadow:
    0 0 0 0 rgba(244, 241, 234, 0.12),
    0 0 12px rgba(244, 241, 234, 0.08);
  animation: factory-node-pulse 2.8s ease-in-out infinite;
}

.factory-section__metrics div::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 24% 34%, rgba(244, 241, 234, 0.14), transparent 34%);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.factory-section__metrics div:nth-child(2)::before {
  animation-delay: 0.45s;
}

.factory-section__metrics div:nth-child(3)::before {
  animation-delay: 0.9s;
}

.factory-section__metrics div:nth-child(4)::before {
  animation-delay: 1.35s;
}

.factory-section__metrics div:hover {
  transform: translateY(-4px);
  background: rgba(244, 241, 234, 0.055);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.factory-section__metrics div:hover::after {
  opacity: 1;
}

.factory-section__metrics div:last-child {
  border-right: none;
}

.factory-section__metrics strong {
  display: block;
  margin: 4px 0 7.2px;
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
    padding-left: 40px;
    border-right: none;
    border-bottom: 0.9px solid var(--color-line);
  }

  .factory-section__metrics div::before {
    left: 15px;
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

@keyframes factory-metrics-scan {
  0%,
  18% {
    transform: translateX(-72%);
  }

  58%,
  100% {
    transform: translateX(72%);
  }
}

@keyframes factory-node-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(244, 241, 234, 0.12);
    opacity: 0.7;
  }

  50% {
    box-shadow: 0 0 0 8px rgba(244, 241, 234, 0);
    opacity: 1;
  }
}
</style>
