<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { revealOnScroll } from '@/utils/motion'
import { useI18n, useStaticLists } from '@/i18n'

const sectionRef = ref<HTMLElement | null>(null)
const { t } = useI18n()
const lists = useStaticLists()

const steps = computed(() => lists.managementSteps())
const capabilityTrack = computed(() => {
  const capabilities = lists.capabilities()
  return [...capabilities, ...capabilities]
})

onMounted(() => {
  if (!sectionRef.value) return

  revealOnScroll(sectionRef.value, '.management-animate', {
    x: -54,
    y: 58,
    scale: 0.94,
    rotateY: -8,
    stagger: 0.14,
    duration: 1.08,
  })
})
</script>

<template>
  <section id="management" ref="sectionRef" class="management-section">
    <div class="management-section__header management-animate">
      <p>FRANCE SALES MANAGEMENT</p>

      <div>
        <h2>{{ t('managementTitle') }}</h2>
        <span>
          {{ t('managementDescription') }}</span>
      </div>
    </div>

    <div class="management-section__body">
      <div class="management-section__intro management-animate">
        <span>POSITIONIN</span>

        <div class="management-section__route" aria-hidden="true">
          <div>
            <strong>CN</strong>
            <small>Supply</small>
          </div>
          <i></i>
          <div>
            <strong>FR</strong>
            <small>Sales</small>
          </div>
          <i></i>
          <div>
            <strong>EU</strong>
            <small>Clients</small>
          </div>
        </div>

        <h3>{{ t('managementIntroTitle') }}</h3>

        <p>
          {{ t('managementIntroDesc') }}
        </p>

        <a href="#contact">{{ t('contactSalesTeam') }}</a>
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

    <div class="management-section__capabilities management-animate" :aria-label="t('capabilityLabel')">
      <div class="management-section__capability-track">
        <span v-for="(item, index) in capabilityTrack" :key="`${item}-${index}`">
          {{ item }}
       </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.management-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: var(--section-space) 0;
}

.management-section__header {
  margin-bottom: 41.4px;
}

.management-section__header > p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.management-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 43.2px;
  align-items: end;
}

.management-section__header h2 {
  margin: 0;
  max-width: 738px;
  font-size: clamp(37.8px, 5vw, 64.8px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.management-section__header span {
  display: block;
  max-width: 684px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.management-section__body {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 19.8px;
}

.management-section__intro {
  position: relative;
  isolation: isolate;
  min-height: 468px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 0.9px solid var(--color-line);
  border-radius: 34.2px;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 12%, rgba(210, 220, 235, 0.12), transparent 30%),
    radial-gradient(circle at 92% 20%, rgba(244, 241, 234, 0.08), transparent 24%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), transparent 42%),
    var(--color-surface);
  box-shadow: var(--shadow-panel);
  transition:
    transform 0.34s ease,
    border-color 0.34s ease,
    background 0.34s ease,
    box-shadow 0.34s ease;
}

.management-section__intro::before {
  content: '';
  position: absolute;
  top: 70px;
  left: 36px;
  right: 36px;
  z-index: -1;
  height: 150px;
  border: 1px solid rgba(244, 241, 234, 0.06);
  border-radius: 24px;
  background:
    linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.08), transparent),
    radial-gradient(circle at 16% 50%, rgba(210, 220, 235, 0.12), transparent 12%),
    radial-gradient(circle at 50% 50%, rgba(210, 220, 235, 0.1), transparent 12%),
    radial-gradient(circle at 84% 50%, rgba(210, 220, 235, 0.12), transparent 12%);
  opacity: 0.72;
}

.management-section__intro::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background:
    linear-gradient(rgba(255, 255, 255, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: radial-gradient(circle at 72% 22%, black, transparent 56%);
  opacity: 0.65;
}

.management-section__intro:hover {
  transform: translateY(-3px);
  border-color: rgba(244, 241, 234, 0.18);
  background:
    radial-gradient(circle at 18% 12%, rgba(210, 220, 235, 0.16), transparent 32%),
    radial-gradient(circle at 92% 20%, rgba(244, 241, 234, 0.12), transparent 26%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.06), transparent 42%),
    var(--color-surface-raised);
  box-shadow:
    0 32px 90px rgba(0, 0, 0, 0.42),
    0 0 64px rgba(210, 220, 235, 0.08);
}

.management-section__intro > span {
  width: fit-content;
  margin-bottom: 22px;
  padding: 8px 10px;
  border: 0.9px solid rgba(244, 241, 234, 0.08);
  border-radius: 999px;
  background: rgba(7, 8, 9, 0.28);
  font-family: var(--font-mono);
  font-size: 9.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.management-section__route {
  position: relative;
  z-index: 1;
  width: min(100%, 560px);
  min-height: 116px;
  margin-bottom: auto;
  display: grid;
  grid-template-columns: 86px minmax(46px, 1fr) 86px minmax(46px, 1fr) 86px;
  align-items: center;
  gap: 10px;
}

.management-section__route div {
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid rgba(244, 241, 234, 0.1);
  border-radius: 50%;
  background: rgba(7, 8, 9, 0.44);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 18px 38px rgba(0, 0, 0, 0.22);
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.management-section__route strong {
  font-family: var(--font-mono);
  font-size: 17px;
  letter-spacing: 0.12em;
}

.management-section__route small {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.management-section__route i {
  position: relative;
  height: 1px;
  display: block;
  background: linear-gradient(90deg, rgba(244, 241, 234, 0.08), rgba(244, 241, 234, 0.38));
  overflow: hidden;
}

.management-section__route i::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.9), transparent);
  transform: translateX(-100%);
  animation: management-route-pulse 2.8s ease-in-out infinite;
}

.management-section__route i:nth-of-type(2)::after {
  animation-delay: 0.45s;
}

.management-section__intro:hover .management-section__route div {
  border-color: rgba(244, 241, 234, 0.18);
  background: rgba(8, 9, 10, 0.62);
}

.management-section__intro:hover .management-section__route div:nth-of-type(1) {
  transform: translateY(-4px);
}

.management-section__intro:hover .management-section__route div:nth-of-type(2) {
  transform: translateY(3px);
}

.management-section__intro:hover .management-section__route div:nth-of-type(3) {
  transform: translateY(-4px);
}

.management-section__intro h3 {
  margin: 0;
  max-width: 560px;
  font-size: clamp(26px, 3.3vw, 38px);
  line-height: 1.12;
  letter-spacing: -0.06em;
}

.management-section__intro p {
  margin: 19.8px 0 0;
  line-height: 1.85;
  color: var(--color-text-soft);
}

.management-section__intro a {
  width: fit-content;
  height: 43.2px;
  margin-top: 28.8px;
  padding: 0 19.8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 899.1px;
  background: var(--color-text);
  color: #08090a;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.management-section__intro a:hover {
  transform: translateY(-1.8px);
}

.management-section__flow {
  position: relative;
  display: grid;
  gap: 16.2px;
}

.management-section__flow::before {
  content: '';
  position: absolute;
  top: 73.8px;
  bottom: 73.8px;
  left: 34.2px;
  width: 0.9px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.22), transparent);
}

.flow-card {
  position: relative;
  min-height: 156.6px;
  padding: 27px;
  display: grid;
  grid-template-columns: 99px 1fr;
  gap: 25.2px;
  align-items: center;
  border: 0.9px solid var(--color-line);
  border-radius: 28.8px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 38%),
    var(--color-surface);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.flow-card:hover {
  transform: translateX(6px);
  border-color: var(--color-line-strong);
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.12), transparent 42%),
    var(--color-surface-raised);
}

.flow-card__top {
  position: relative;
  z-index: 2;
}

.flow-card__top span {
  display: block;
  margin-bottom: 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  color: var(--color-accent);
}

.flow-card__top strong {
  width: 64.8px;
  height: 64.8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.9px solid var(--color-line-strong);
  border-radius: 899.1px;
  background: rgba(7, 8, 9, 0.72);
  font-family: var(--font-mono);
  font-size: 16.2px;
  letter-spacing: 0.12em;
}

.flow-card__content h3 {
  margin: 0;
  font-size: 25.2px;
  letter-spacing: -0.04em;
}

.flow-card__content p {
  margin: 12.6px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.management-section__capabilities {
  margin-top: 19.8px;
  padding: 13px;
  position: relative;
  border: 0.9px solid var(--color-line);
  border-radius: 25.2px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.015)),
    rgba(255, 255, 255, 0.025);
}

.management-section__capabilities::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.08), transparent);
  transform: translateX(-100%);
  animation: management-capability-sweep 5.8s ease-in-out infinite;
}

.management-section__capabilities::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(7, 8, 9, 0.94), transparent 12%),
    linear-gradient(270deg, rgba(7, 8, 9, 0.94), transparent 12%);
}

.management-section__capability-track {
  position: relative;
  z-index: 1;
  width: max-content;
  display: flex;
  gap: 9px;
  animation: management-capability-scroll 24s linear infinite;
}

.management-section__capabilities:hover .management-section__capability-track {
  animation-play-state: paused;
}

.management-section__capability-track span {
  position: relative;
  z-index: 1;
  white-space: nowrap;
  padding: 9px 12.6px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  color: var(--color-text-soft);
  background: rgba(7, 8, 9, 0.46);
  font-size: 12.6px;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    color 0.28s ease,
    background 0.28s ease;
  animation: management-capability-float 4.8s ease-in-out infinite;
}

.management-section__capability-track span:nth-child(2n) {
  animation-delay: 0.5s;
}

.management-section__capability-track span:nth-child(3n) {
  animation-delay: 1s;
}

.management-section__capabilities:hover .management-section__capability-track span {
  border-color: rgba(244, 241, 234, 0.16);
  color: var(--color-text);
  background: rgba(8, 9, 10, 0.66);
}

.management-section__capability-track span:hover {
  transform: translateY(-2px);
  border-color: rgba(244, 241, 234, 0.28);
}

@media (max-width: 882px) {
  .management-section__header > div,
  .management-section__body {
    grid-template-columns: 1fr;
  }

  .management-section__intro {
    min-height: auto;
  }

  .management-section__intro::before,
  .management-section__route {
    display: none;
  }
}

@media (max-width: 612px) {
  .flow-card {
    grid-template-columns: 1fr;
  }

  .management-section__flow::before {
    display: none;
  }
}

@keyframes management-capability-sweep {
  0%,
  34% {
    transform: translateX(-110%);
    opacity: 0;
  }

  48%,
  68% {
    opacity: 1;
  }

  100% {
    transform: translateX(110%);
    opacity: 0;
  }
}

@keyframes management-capability-scroll {
  to {
    transform: translateX(-50%);
  }
}

@keyframes management-capability-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1.5px);
  }
}

@keyframes management-route-pulse {
  0%,
  28% {
    transform: translateX(-110%);
  }

  82%,
  100% {
    transform: translateX(110%);
  }
}
</style>
