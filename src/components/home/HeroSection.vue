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
    <div class="hero__content">
      <p class="hero__eyebrow hero-animate">铠福科技</p>

      <h1 class="hero__title hero-animate">
        专业弹道防护装备
        <br />
        展示平台
      </h1>

      <p class="hero__description hero-animate">
        面向法国及欧洲专业客户，展示防弹背心、防弹头盔、防弹盾牌、防弹插板及软质防护组件，
        提供产品资料对接、技术文件申请与销售沟通服务。
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
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  width: min(100% - 48px, var(--container));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  align-items: center;
  gap: 72px;
  padding: 120px 0 96px;
}

.hero__content {
  max-width: 620px;
}

.hero__eyebrow {
  margin: 0 0 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.24em;
  color: var(--color-accent);
}

.hero__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(54px, 6vw, 86px);
  line-height: 0.95;
  letter-spacing: -0.07em;
  max-width: 680px;
}

.hero__description {
  max-width: 560px;
  margin: 28px 0 0;
  font-size: 17px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.hero__actions {
  display: flex;
  gap: 14px;
  margin-top: 36px;
}

.hero__button {
  height: 50px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 14px;
  transition: 0.25s ease;
}

.hero__button--primary {
  background: var(--color-text);
  color: #08090a;
}

.hero__button--secondary {
  border: 1px solid var(--color-line-strong);
  color: var(--color-text);
}

.hero__button:hover {
  transform: translateY(-2px);
}

.hero__visual {
  position: relative;
  min-height: 620px;
  border: 1px solid var(--color-line);
  border-radius: 40px;
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
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at center, black, transparent 78%);
}

.hero__scanner {
  position: absolute;
  left: 9%;
  right: 9%;
  top: 14%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.9), transparent);
  box-shadow: 0 0 30px rgba(215, 221, 231, 0.35);
  opacity: 0.72;
}

.hero__core {
  position: relative;
  width: min(68%, 460px);
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
  border: 1px solid rgba(215, 221, 231, 0.26);
  border-radius: 50%;
}

.hero__ring::before,
.hero__ring::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent-strong);
  box-shadow: 0 0 22px rgba(215, 221, 231, 0.48);
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
  height: 1px;
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
  width: 16px;
  height: 16px;
  border: 1px solid rgba(244, 241, 234, 0.68);
  border-radius: 50%;
  background: rgba(244, 241, 234, 0.18);
  box-shadow: 0 0 26px rgba(215, 221, 231, 0.42);
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
    0 0 22px rgba(244, 241, 234, 0.52),
    0 0 70px rgba(174, 185, 200, 0.32);
  animation: hero-pulse 2.8s ease-in-out infinite;
}

.hero__floating {
  position: absolute;
  padding: 14px 16px;
  border: 1px solid var(--color-line);
  border-radius: 18px;
  background: rgba(8, 9, 10, 0.72);
  backdrop-filter: blur(14px);
}

.hero__floating--top {
  top: 24px;
  right: 24px;
}

.hero__floating--bottom {
  left: 24px;
  bottom: 24px;
}

.hero__floating span {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.hero__floating strong {
  font-size: 14px;
  color: var(--color-text);
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 120px;
  }

  .hero__visual {
    min-height: 420px;
  }

  .hero__core {
    width: min(78%, 360px);
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
