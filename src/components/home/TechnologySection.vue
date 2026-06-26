<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { revealOnScroll } from '@/utils/motion'
import { useI18n, useStaticLists } from '@/i18n'

const sectionRef = ref<HTMLElement | null>(null)
const { t } = useI18n()
const lists = useStaticLists()

function handleTechPointer(event: PointerEvent) {
  const panel = event.currentTarget as HTMLElement
  const rect = panel.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  const dx = x - 0.5
  const dy = y - 0.5

  panel.style.setProperty('--mouse-x', `${x * 100}%`)
  panel.style.setProperty('--mouse-y', `${y * 100}%`)
  panel.style.setProperty('--tilt-x', `${dy * -10}deg`)
  panel.style.setProperty('--tilt-y', `${dx * 12}deg`)
  panel.style.setProperty('--shift-x', `${dx * 32}px`)
  panel.style.setProperty('--shift-y', `${dy * 28}px`)
}

function resetTechPointer(event: PointerEvent) {
  const panel = event.currentTarget as HTMLElement

  panel.style.setProperty('--mouse-x', '50%')
  panel.style.setProperty('--mouse-y', '42%')
  panel.style.setProperty('--tilt-x', '0deg')
  panel.style.setProperty('--tilt-y', '0deg')
  panel.style.setProperty('--shift-x', '0px')
  panel.style.setProperty('--shift-y', '0px')
}

const layers = computed(() => lists.techLayers())
const features = computed(() => lists.techFeatures())

onMounted(() => {
  if (!sectionRef.value) return

  revealOnScroll(sectionRef.value, '.tech-animate', {
    y: 88,
    scale: 0.93,
    rotateX: 8,
    stagger: 0.13,
    duration: 1.08,
  })

  revealOnScroll(sectionRef.value, '.layer-card', {
    trigger: sectionRef.value.querySelector('.technology-section__layers'),
    x: -82,
    y: 20,
    scale: 0.96,
    rotateY: -9,
    stagger: 0.12,
    duration: 1,
  })
})
</script>

<template>
  <section id="technology" ref="sectionRef" class="technology-section">
    <div class="technology-section__header tech-animate">
      <p>PROTECTION TECHNOLOGY</p>

      <div>
        <h2>{{ t('techTitle') }}</h2>
        <span
          >{{ t('techDescription') }}</span
        >
      </div>
    </div>

    <div class="technology-section__body">
      <div
        class="technology-section__visual tech-animate"
        @pointermove="handleTechPointer"
        @pointerleave="resetTechPointer"
      >
        <div class="tech-plate">
          <div class="tech-plate__glow"></div>

          <div class="tech-plate__stack" :aria-label="t('techStructureLabel')">
            <span class="tech-plate__slice tech-plate__slice--01">
              <b></b>
            </span>

            <span class="tech-plate__slice tech-plate__slice--02">
              <b></b>
            </span>

            <span class="tech-plate__slice tech-plate__slice--03">
              <b></b>
            </span>

            <span class="tech-plate__slice tech-plate__slice--04">
              <b></b>
            </span>
          </div>

          <div class="tech-plate__caption">
            <span>COMPOSITE STRUCTURE</span>
          </div>
        </div>
      </div>

      <div class="technology-section__layers">
        <article v-for="layer in layers" :key="layer.index" class="layer-card">
          <span>{{ layer.index }}</span>

          <div>
            <h3>{{ layer.title }}</h3>
            <p>{{ layer.desc }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="technology-section__features">
      <article v-for="feature in features" :key="feature.title" class="tech-feature tech-animate">
        <span></span>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.technology-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: var(--section-space) 0;
}

.technology-section__header {
  margin-bottom: 41.4px;
}

.technology-section__header > p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.technology-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 43.2px;
  align-items: end;
}

.technology-section__header h2 {
  margin: 0;
  font-size: clamp(37.8px, 5vw, 64.8px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.technology-section__header span {
  display: block;
  max-width: 684px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.technology-section__body {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 19.8px;
  overflow: visible;
}

.technology-section__visual {
  --mouse-x: 50%;
  --mouse-y: 42%;
  --tilt-x: 0deg;
  --tilt-y: 0deg;
  --shift-x: 0px;
  --shift-y: 0px;
  position: relative;
  isolation: isolate;
  min-height: 576px;
  padding: 30.6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.9px solid var(--color-line);
  border-radius: 34.2px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.028) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 0.9px, transparent 0.9px),
    radial-gradient(circle at 50% 26%, rgba(210, 220, 235, 0.13), transparent 42%),
    var(--color-card);
  background-size:
    30.6px 30.6px,
    30.6px 30.6px,
    auto,
    auto;
  box-shadow: var(--shadow-panel);
  transform: perspective(1200px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transform-style: preserve-3d;
  transition:
    transform 0.18s ease-out,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
  will-change: transform;
}

.technology-section__visual::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    rgba(244, 241, 234, 0.18),
    transparent 24%
  );
  opacity: 0;
  z-index: 0;
  transition: opacity 0.2s ease;
  transform: translateZ(32px);
}

.technology-section__visual:hover {
  border-color: rgba(244, 241, 234, 0.22);
  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.42),
    0 0 70px rgba(215, 221, 231, 0.09);
}

.technology-section__visual:hover::before {
  opacity: 1;
}

.tech-plate {
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 387px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(calc(var(--shift-x) * 0.52), calc(var(--shift-y) * 0.44), 64px);
  transform-style: preserve-3d;
  transition: transform 0.16s ease-out;
}

.tech-plate::before,
.tech-plate::after {
  content: '';
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.tech-plate::before {
  left: 18%;
  right: 18%;
  top: 18%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.78), transparent);
  box-shadow: 0 0 22px rgba(215, 221, 231, 0.28);
  animation: tech-scan 4.8s ease-in-out infinite;
}

.tech-plate::after {
  width: min(62%, 360px);
  aspect-ratio: 1;
  border: 0.9px solid rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  animation: tech-orbit 18s linear infinite;
}

.tech-plate__glow {
  position: absolute;
  width: 342px;
  height: 342px;
  border-radius: 899.1px;
  background: rgba(210, 220, 235, 0.1);
  filter: blur(36px);
  transform: translate3d(calc(var(--shift-x) * -0.35), calc(var(--shift-y) * -0.3), 16px);
  transition: transform 0.18s ease-out;
}

.tech-plate__stack {
  position: relative;
  z-index: 2;
  width: min(76%, 410px);
  min-height: 340px;
  transform: rotate(-6deg);
  transform-style: preserve-3d;
  animation: tech-core-float 5.6s ease-in-out infinite;
  transition: transform 0.5s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.technology-section__body:hover .tech-plate__stack {
  transform: rotate(-2deg) translate3d(0, -8px, 78px);
}

.tech-plate__slice {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(100%, 382px);
  height: 264px;
  border: 1px solid rgba(244, 241, 234, 0.14);
  border-radius: 28px;
  box-shadow:
    0 28px 60px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  overflow: hidden;
  opacity: 0.88;
  transition:
    transform 0.58s cubic-bezier(0.18, 0.95, 0.18, 1),
    opacity 0.32s ease,
    border-color 0.32s ease,
    box-shadow 0.32s ease;
}

.tech-plate__slice::before {
  content: '';
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 20px;
  pointer-events: none;
}

.tech-plate__slice::after,
.tech-plate__slice b {
  content: '';
  position: absolute;
  pointer-events: none;
}

.tech-plate__slice b {
  inset: 0;
}

.tech-plate__slice--01 {
  z-index: 4;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 34%),
    repeating-linear-gradient(45deg, rgba(244, 241, 234, 0.12) 0 1px, transparent 1px 10px),
    repeating-linear-gradient(-45deg, rgba(244, 241, 234, 0.08) 0 1px, transparent 1px 12px),
    linear-gradient(180deg, rgba(35, 40, 46, 0.94), rgba(9, 11, 13, 0.94));
  transform: translate(-50%, -50%) translate3d(-54px, -38px, 36px) rotate(-4deg);
}

.tech-plate__slice--01::after {
  left: 20px;
  right: 20px;
  top: 50%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.28), transparent);
  box-shadow:
    0 -46px 0 rgba(244, 241, 234, 0.08),
    0 46px 0 rgba(244, 241, 234, 0.08);
}

.tech-plate__slice--02 {
  z-index: 3;
  background:
    radial-gradient(ellipse at 50% 45%, rgba(174, 185, 200, 0.15), transparent 52%),
    linear-gradient(180deg, rgba(24, 30, 36, 0.86), rgba(7, 9, 11, 0.86));
  transform: translate(-50%, -50%) translate3d(-18px, -10px, 24px) rotate(-2deg);
}

.tech-plate__slice--02 b {
  background:
    repeating-linear-gradient(
      92deg,
      transparent 0 13px,
      rgba(244, 241, 234, 0.16) 13px 14px,
      transparent 14px 28px
    ),
    repeating-linear-gradient(
      88deg,
      transparent 0 20px,
      rgba(174, 185, 200, 0.12) 20px 21px,
      transparent 21px 38px
    );
  mask-image: radial-gradient(ellipse at center, black, transparent 76%);
}

.tech-plate__slice--03 {
  z-index: 2;
  border-color: rgba(244, 241, 234, 0.22);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent 28%),
    linear-gradient(180deg, rgba(54, 58, 62, 0.9), rgba(16, 18, 20, 0.92));
  transform: translate(-50%, -50%) translate3d(20px, 18px, 12px) rotate(1deg);
}

.tech-plate__slice--03 b {
  inset: 22px;
  border-radius: 16px;
  background:
    linear-gradient(90deg, transparent 49.3%, rgba(7, 8, 9, 0.42) 49.3% 50.7%, transparent 50.7%),
    linear-gradient(transparent 49.3%, rgba(7, 8, 9, 0.42) 49.3% 50.7%, transparent 50.7%);
  background-size: 92px 92px;
  box-shadow:
    inset 0 0 0 1px rgba(244, 241, 234, 0.08),
    inset 0 0 36px rgba(0, 0, 0, 0.22);
}

.tech-plate__slice--04 {
  z-index: 1;
  background:
    radial-gradient(circle at 26px 26px, rgba(244, 241, 234, 0.1) 0 2px, transparent 2px 18px),
    linear-gradient(180deg, rgba(18, 21, 24, 0.88), rgba(6, 7, 9, 0.9));
  background-size:
    38px 38px,
    auto;
  transform: translate(-50%, -50%) translate3d(58px, 50px, 0) rotate(4deg);
  opacity: 0.72;
}

.tech-plate__slice--04 b {
  inset: 18px;
  border-radius: 18px;
  background:
    linear-gradient(
      30deg,
      transparent 0 42%,
      rgba(244, 241, 234, 0.08) 42% 44%,
      transparent 44% 100%
    ),
    linear-gradient(
      150deg,
      transparent 0 42%,
      rgba(244, 241, 234, 0.08) 42% 44%,
      transparent 44% 100%
    );
  background-size: 46px 46px;
  opacity: 0.78;
}

.technology-section__body:hover .tech-plate__slice {
  border-color: rgba(244, 241, 234, 0.24);
  box-shadow:
    0 34px 70px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.technology-section__body:hover .tech-plate__slice--01 {
  z-index: 4;
  transform: translate(-50%, -50%) translate3d(-150px, -116px, 132px) rotate(-13deg) rotateY(-10deg);
}

.technology-section__body:hover .tech-plate__slice--02 {
  z-index: 3;
  transform: translate(-50%, -50%) translate3d(-62px, -38px, 88px) rotate(-4deg) rotateY(-4deg);
}

.technology-section__body:hover .tech-plate__slice--03 {
  z-index: 2;
  transform: translate(-50%, -50%) translate3d(58px, 46px, 48px) rotate(5deg) rotateY(6deg);
}

.technology-section__body:hover .tech-plate__slice--04 {
  z-index: 1;
  transform: translate(-50%, -50%) translate3d(146px, 122px, 4px) rotate(14deg) rotateY(11deg);
  opacity: 0.76;
}

.tech-plate__caption {
  position: absolute;
  left: 30px;
  bottom: 30px;
  z-index: 5;
  max-width: 260px;
  padding: 0;
  border: none;
  background: transparent;
  backdrop-filter: none;
  transform: translate3d(calc(var(--shift-x) * -0.18), calc(var(--shift-y) * -0.12), 92px);
}

.tech-plate__caption span {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.technology-section__layers {
  display: grid;
  gap: 14.4px;
  position: relative;
  overflow: visible;
}

.layer-card {
  --connector-y: 50%;
  --connector-angle: 0deg;
  --connector-length: 96px;
  min-height: 133.2px;
  padding: 25.2px;
  position: relative;
  display: grid;
  grid-template-columns: 46.8px 1fr;
  gap: 19.8px;
  align-items: start;
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

.layer-card::before,
.layer-card::after {
  content: '';
  position: absolute;
  top: var(--connector-y);
  right: calc(100% + 10px);
  pointer-events: none;
  opacity: 0;
  transform-origin: right center;
  transition:
    opacity 0.32s ease,
    transform 0.52s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.layer-card::before {
  width: var(--connector-length);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.92));
  box-shadow: 0 0 16px rgba(244, 241, 234, 0.28);
  transform: rotate(var(--connector-angle)) scaleX(0.24);
}

.layer-card::after {
  width: 7px;
  height: 7px;
  margin-top: -3px;
  border: 1px solid rgba(244, 241, 234, 0.72);
  border-radius: 50%;
  background: rgba(244, 241, 234, 0.2);
  box-shadow: 0 0 16px rgba(244, 241, 234, 0.38);
  transform: rotate(var(--connector-angle)) translateX(calc(var(--connector-length) * -1))
    scale(0.4);
}

.technology-section__body:hover .layer-card::before,
.technology-section__body:hover .layer-card::after {
  opacity: 1;
}

.technology-section__body:hover .layer-card::before {
  transform: rotate(var(--connector-angle)) scaleX(1);
}

.technology-section__body:hover .layer-card::after {
  transform: rotate(var(--connector-angle)) translateX(calc(var(--connector-length) * -1)) scale(1);
}

.layer-card:nth-child(1) {
  --connector-y: 40%;
  --connector-angle: -8deg;
  --connector-length: clamp(260px, 24vw, 420px);
}

.layer-card:nth-child(2) {
  --connector-y: 51%;
  --connector-angle: -1deg;
  --connector-length: clamp(184px, 17.4vw, 304px);
}

.layer-card:nth-child(3) {
  --connector-y: 48%;
  --connector-angle: 5deg;
  --connector-length: clamp(108px, 9.8vw, 168px);
}

.layer-card:nth-child(4) {
  --connector-y: 60%;
  --connector-angle: 11deg;
  --connector-length: clamp(52px, 4.8vw, 82px);
}

.layer-card:hover {
  transform: translateX(6px);
  border-color: var(--color-line-strong);
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.12), transparent 42%),
    var(--color-surface-raised);
}

.layer-card span {
  font-family: var(--font-mono);
  font-size: 10.8px;
  color: var(--color-accent);
}

.layer-card h3 {
  margin: 0;
  font-size: 23.4px;
  letter-spacing: -0.04em;
}

.layer-card p {
  margin: 10.8px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.technology-section__features {
  margin-top: 19.8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19.8px;
}

.tech-feature {
  min-height: 216px;
  padding: 27px;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent), rgba(255, 255, 255, 0.025);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.tech-feature:hover {
  transform: translateY(-4px);
  border-color: var(--color-line-strong);
}

.tech-feature > span {
  display: block;
  width: 37.8px;
  height: 1.8px;
  margin-bottom: 50.4px;
  background: var(--color-accent);
}

.tech-feature h3 {
  margin: 0;
  font-size: 23.4px;
  letter-spacing: -0.04em;
}

.tech-feature p {
  margin: 12.6px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

@media (max-width: 882px) {
  .technology-section__header > div,
  .technology-section__body,
  .technology-section__features {
    grid-template-columns: 1fr;
  }

  .technology-section__visual {
    min-height: 468px;
  }

  .layer-card::before,
  .layer-card::after {
    display: none;
  }
}

@media (max-width: 612px) {
  .layer-card {
    grid-template-columns: 1fr;
  }
}

@media (hover: none) and (pointer: coarse) {
  .technology-section__visual {
    animation: tech-panel-mobile-drift 6.4s ease-in-out infinite;
  }

  .tech-plate {
    animation: tech-plate-mobile-drift 5.2s ease-in-out infinite;
  }
}

@keyframes tech-scan {
  0%,
  100% {
    top: 18%;
    opacity: 0.18;
  }

  50% {
    top: 76%;
    opacity: 0.82;
  }
}

@keyframes tech-panel-mobile-drift {
  0%,
  100% {
    transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: perspective(1200px) rotateX(-4deg) rotateY(5deg);
  }
}

@keyframes tech-plate-mobile-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 64px);
  }

  50% {
    transform: translate3d(-18px, 16px, 64px);
  }
}

@keyframes tech-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes tech-core-float {
  0%,
  100% {
    transform: rotate(-7deg) translateY(0);
  }

  50% {
    transform: rotate(-7deg) translateY(-8px);
  }
}
</style>
