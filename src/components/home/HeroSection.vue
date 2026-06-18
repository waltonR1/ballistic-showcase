<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!heroRef.value) return

  gsap.from(heroRef.value.querySelectorAll('.hero-animate'), {
    opacity: 0,
    y: 28,
    duration: 0.9,
    stagger: 0.1,
    ease: 'power3.out',
  })

  gsap.to(heroRef.value.querySelectorAll('.hero__ring'), {
    rotate: 360,
    duration: 24,
    repeat: -1,
    ease: 'none',
    stagger: 4,
  })

  gsap.to(heroRef.value.querySelector('.hero__scanner'), {
    yPercent: 165,
    duration: 4.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to(heroRef.value.querySelectorAll('.hero__node'), {
    scale: 1.18,
    opacity: 1,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.28,
  })
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow hero-animate">铠福科技</p>

        <h1 class="hero__title hero-animate">
          <span>弹道防护装备</span>
        </h1>

        <p class="hero__description hero-animate">
          面向法国及欧洲专业客户，展示防弹背心、头盔、盾牌、插板及软质防护组件，提供产品资料对接与技术文件申请服务。
        </p>

        <div class="hero__actions hero-animate">
          <a class="hero__button hero__button--primary" href="#products">查看产品</a>
          <a class="hero__button hero__button--secondary" href="#contact">申请技术资料</a>
        </div>
      </div>

      <div class="hero__visual hero-animate" aria-label="弹道防护装备展示动画">
        <div class="hero__grid"></div>
        <div class="hero__scanner"></div>
        <div class="hero__core">
          <span class="hero__ring hero__ring--outer"></span>
          <span class="hero__ring hero__ring--middle"></span>
          <span class="hero__ring hero__ring--inner"></span>
          <span class="hero__axis hero__axis--x"></span>
          <span class="hero__axis hero__axis--y"></span>
          <span class="hero__node hero__node--one"></span>
          <span class="hero__node hero__node--two"></span>
          <span class="hero__node hero__node--three"></span>
          <span class="hero__pulse"></span>
        </div>

        <div class="hero__floating hero__floating--top">
          <span>CATEGORY</span>
          <strong>Personal Armour</strong>
        </div>

        <div class="hero__floating hero__floating--bottom">
          <span>FOCUS</span>
          <strong>Professional Grade Protection</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  padding: 100.8px 0 79.2px;
  display: flex;
  align-items: center;
}

.hero__inner {
  width: min(90%, var(--container));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(468px, 0.9fr);
  align-items: center;
  gap: clamp(50.4px, 6vw, 108px);
}

.hero__content {
  max-width: 810px;
  justify-self: start;
}

.hero__eyebrow {
  margin: 0 0 16.2px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.24em;
  color: var(--color-accent);
}

.hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(64.8px, 6.2vw, 124.2px);
  line-height: 0.95;
  letter-spacing: -0.07em;
  max-width: 990px;
}

.hero__title span {
  display: block;
}

.hero__description {
  max-width: 702px;
  margin: 25.2px 0 0;
  font-size: 16.2px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.hero__actions {
  display: flex;
  gap: 12.6px;
  margin-top: 32.4px;
}

.hero__button {
  height: 45px;
  padding: 0 21.6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 899.1px;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.hero__button--primary {
  background: var(--color-text);
  color: #08090a;
}

.hero__button--secondary {
  border: 0.9px solid var(--color-line-strong);
  color: var(--color-text);
}

.hero__button:hover {
  transform: translateY(-1.8px);
}

.hero__visual {
  position: relative;
  width: 100%;
  min-height: clamp(540px, 64vh, 738px);
  justify-self: stretch;
  border: 0.9px solid var(--color-line);
  border-radius: 36px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 44%, rgba(215, 221, 231, 0.18), transparent 30%),
    radial-gradient(circle at 72% 22%, rgba(174, 185, 200, 0.1), transparent 22%),
    linear-gradient(180deg, #12161b 0%, #090b0e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.09) 46%, transparent 58%),
    radial-gradient(circle at center, transparent 0 42%, rgba(7, 8, 9, 0.58) 74%);
  opacity: 0.58;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0.9px, transparent 0.9px);
  background-size: 30.6px 30.6px;
  mask-image: radial-gradient(circle at center, black, transparent 78%);
}

.hero__scanner {
  position: absolute;
  left: 9%;
  right: 9%;
  top: 14%;
  height: 0.9px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.9), transparent);
  box-shadow: 0 0 27px rgba(215, 221, 231, 0.35);
  opacity: 0.72;
}

.hero__core {
  position: relative;
  width: min(72%, 558px);
  aspect-ratio: 1;
}

.hero__ring,
.hero__axis,
.hero__node,
.hero__pulse {
  position: absolute;
  display: block;
}

.hero__ring {
  inset: 0;
  border: 0.9px solid rgba(215, 221, 231, 0.26);
  border-radius: 50%;
}

.hero__ring::before,
.hero__ring::after {
  content: '';
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-accent-strong);
  box-shadow: 0 0 19.8px rgba(215, 221, 231, 0.48);
}

.hero__ring::before {
  top: 10%;
  left: 22%;
}

.hero__ring::after {
  right: 14%;
  bottom: 18%;
}

.hero__ring--middle {
  inset: 14%;
  border-style: dashed;
  opacity: 0.9;
}

.hero__ring--inner {
  inset: 31%;
  border-color: rgba(215, 221, 231, 0.42);
}

.hero__axis {
  left: 50%;
  top: 50%;
  width: 100%;
  height: 0.9px;
  background: linear-gradient(90deg, transparent, rgba(215, 221, 231, 0.42), transparent);
  transform-origin: center;
}

.hero__axis--x {
  transform: translate(-50%, -50%);
}

.hero__axis--y {
  transform: translate(-50%, -50%) rotate(90deg);
}

.hero__node {
  width: 14.4px;
  height: 14.4px;
  border: 0.9px solid rgba(244, 241, 234, 0.68);
  border-radius: 50%;
  background: rgba(244, 241, 234, 0.18);
  box-shadow: 0 0 23.4px rgba(215, 221, 231, 0.42);
  opacity: 0.62;
}

.hero__node--one {
  left: 18%;
  top: 28%;
}

.hero__node--two {
  right: 22%;
  top: 36%;
}

.hero__node--three {
  left: 47%;
  bottom: 16%;
}

.hero__pulse {
  inset: 42%;
  border-radius: 50%;
  background: var(--color-text);
  box-shadow:
    0 0 19.8px rgba(244, 241, 234, 0.52),
    0 0 63px rgba(174, 185, 200, 0.32);
  animation: hero-pulse 2.8s ease-in-out infinite;
}

.hero__floating {
  position: absolute;
  padding: 12.6px 14.4px;
  border: 0.9px solid var(--color-line);
  border-radius: 16.2px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(12.6px);
}

.hero__floating--top {
  top: 21.6px;
  right: 21.6px;
}

.hero__floating--bottom {
  left: 21.6px;
  bottom: 21.6px;
}

.hero__floating span {
  display: block;
  margin-bottom: 5.4px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.hero__floating strong {
  font-size: 12.6px;
  color: var(--color-text);
}

@media (max-width: 1188px) {
  .hero {
    padding-top: 108px;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero__content,
  .hero__description {
    max-width: 774px;
  }

  .hero__visual {
    min-height: 378px;
  }

  .hero__core {
    width: min(78%, 324px);
  }
}

@media (max-width: 576px) {
  .hero {
    min-height: auto;
    padding: 100.8px var(--page-gutter) 64.8px;
  }

  .hero__title {
    font-size: clamp(43.2px, 14vw, 61.2px);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__button {
    width: 100%;
  }

  .hero__visual {
    min-height: 324px;
    border-radius: 25.2px;
  }

  .hero__floating {
    max-width: calc(100% - 28.8px);
  }
}

@keyframes hero-pulse {
  0%,
  100% {
    transform: scale(0.82);
    opacity: 0.68;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}
</style>
