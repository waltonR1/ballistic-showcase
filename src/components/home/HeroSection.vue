<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroRef = ref<HTMLElement | null>(null)

function handleHeroPointer(event: PointerEvent) {
  const panel = event.currentTarget as HTMLElement
  const rect = panel.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  const dx = x - 0.5
  const dy = y - 0.5

  panel.style.setProperty('--mouse-x', `${x * 100}%`)
  panel.style.setProperty('--mouse-y', `${y * 100}%`)
  panel.style.setProperty('--tilt-x', `${dy * -12}deg`)
  panel.style.setProperty('--tilt-y', `${dx * 14}deg`)
  panel.style.setProperty('--shift-x', `${dx * 42}px`)
  panel.style.setProperty('--shift-y', `${dy * 36}px`)
}

function resetHeroPointer(event: PointerEvent) {
  const panel = event.currentTarget as HTMLElement

  panel.style.setProperty('--mouse-x', '50%')
  panel.style.setProperty('--mouse-y', '50%')
  panel.style.setProperty('--tilt-x', '0deg')
  panel.style.setProperty('--tilt-y', '0deg')
  panel.style.setProperty('--shift-x', '0px')
  panel.style.setProperty('--shift-y', '0px')
}

onMounted(() => {
  if (!heroRef.value) return

  gsap.from(heroRef.value.querySelectorAll('.hero-animate'), {
    opacity: 0,
    y: 70,
    scale: 0.94,
    filter: 'blur(14px)',
    duration: 1.18,
    stagger: 0.13,
    ease: 'power4.out',
    clearProps: 'opacity,visibility,transform,filter',
  })

  gsap.to(heroRef.value.querySelector('.hero__scanner'), {
    yPercent: 560,
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
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
          聚焦人员防护与现场处置场景，提供覆盖防弹背心、头盔、盾牌、防护插板及软质防护组件的专业弹道防护产品体系。
        </p>

        <div class="hero__actions hero-animate">
          <a class="hero__button hero__button--primary" href="#products">查看产品</a>
          <a class="hero__button hero__button--secondary" href="#contact">联系咨询</a>
        </div>

        <div class="hero__status hero-animate" aria-label="Showcase workflow">
          <span><strong>Catalog</strong> 按防护品类查看核心产品</span>
          <span><strong>Docs</strong> 获取产品图片、参数与规格资料</span>
          <span><strong>France</strong> 支持法国及欧洲客户项目沟通</span>
        </div>
      </div>

      <div
        class="hero__visual hero-animate"
        aria-label="弹道防护装备展示动画"
        @pointermove="handleHeroPointer"
        @pointerleave="resetHeroPointer"
      >
        <div class="hero__grid"></div>
        <div class="hero__scanner"></div>

        <div class="hero__armour-system">
          <div class="hero__vest-outline">
            <span class="hero__strap hero__strap--left"></span>
            <span class="hero__strap hero__strap--right"></span>
            <span class="hero__torso"></span>
          </div>

          <div class="hero__layers" aria-hidden="true">
            <span class="armor-layer armor-layer--carrier"></span>
            <span class="armor-layer armor-layer--soft"></span>
            <span class="armor-layer armor-layer--plate"></span>
            <span class="armor-layer armor-layer--buffer"></span>
          </div>

          <div class="hero__layer-label hero__layer-label--one">
            <span>01</span>
            <strong>Outer Carrier</strong>
          </div>

          <div class="hero__layer-label hero__layer-label--two">
            <span>02</span>
            <strong>Soft Armour</strong>
          </div>

          <div class="hero__layer-label hero__layer-label--three">
            <span>03</span>
            <strong>Hard Plate</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  padding: 104px 0 72px;
  display: flex;
  align-items: center;
}

.hero__inner {
  width: min(90%, var(--container));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(460px, 0.86fr);
  align-items: center;
  gap: clamp(48px, 6vw, 96px);
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

.hero__status {
  width: min(100%, 720px);
  margin-top: 36px;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border: 0.9px solid var(--color-line);
  border-radius: 18px;
  background:
    linear-gradient(90deg, rgba(244, 241, 234, 0.035), transparent 42%, rgba(174, 185, 200, 0.035)),
    rgba(255, 255, 255, 0.018);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.hero__status span {
  min-height: 54px;
  padding: 11px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border: 0.9px solid rgba(255, 255, 255, 0.055);
  border-radius: 14px;
  background: rgba(7, 8, 9, 0.32);
  color: var(--color-text-muted);
  font-size: 11.7px;
  line-height: 1.35;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease,
    color 0.24s ease;
}

.hero__status span:hover {
  transform: translateY(-2px);
  border-color: rgba(244, 241, 234, 0.18);
  background: rgba(244, 241, 234, 0.055);
  color: var(--color-text-soft);
}

.hero__status strong {
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero__visual {
  --mouse-x: 50%;
  --mouse-y: 50%;
  --tilt-x: 0deg;
  --tilt-y: 0deg;
  --shift-x: 0px;
  --shift-y: 0px;
  position: relative;
  width: 100%;
  min-height: clamp(520px, 64vh, 720px);
  justify-self: stretch;
  border: 0.9px solid var(--color-line);
  border-radius: 36px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 44%, rgba(215, 221, 231, 0.18), transparent 30%),
    radial-gradient(circle at 72% 22%, rgba(174, 185, 200, 0.1), transparent 22%),
    linear-gradient(180deg, #12161b 0%, #090b0e 100%);
  box-shadow: var(--shadow-panel);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: perspective(1200px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transform-style: preserve-3d;
  transition:
    transform 0.18s ease-out,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
  will-change: transform;
}

.hero__visual:hover {
  border-color: rgba(244, 241, 234, 0.24);
  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.42),
    0 0 70px rgba(215, 221, 231, 0.1);
}

.hero__visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(244, 241, 234, 0.22),
      transparent 18%
    ),
    linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.09) 46%, transparent 58%),
    radial-gradient(circle at center, transparent 0 42%, rgba(7, 8, 9, 0.58) 74%);
  opacity: 0.58;
  transition: opacity 0.24s ease;
  transform: translateZ(28px);
}

.hero__visual:hover::before {
  opacity: 0.92;
}

.hero__visual::after {
  content: '';
  position: absolute;
  inset: 14px;
  pointer-events: none;
  border: 0.9px solid rgba(255, 255, 255, 0.05);
  border-radius: 27px;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 0.9px, transparent 0.9px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0.9px, transparent 0.9px);
  background-size: 30.6px 30.6px;
  mask-image: radial-gradient(circle at center, black, transparent 78%);
  transform: translate3d(calc(var(--shift-x) * -0.28), calc(var(--shift-y) * -0.28), 18px);
  transition: transform 0.45s cubic-bezier(0.18, 0.9, 0.24, 1);
}

.hero__scanner {
  position: absolute;
  left: 10%;
  right: 10%;
  top: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.9), transparent);
  box-shadow: 0 0 27px rgba(215, 221, 231, 0.35);
  opacity: 0.72;
  transform: translateZ(42px);
}

.hero__armour-system {
  position: relative;
  width: min(90%, 660px);
  min-height: 536px;
  transform: translate3d(calc(var(--shift-x) * 0.32), calc(var(--shift-y) * 0.28), 72px) scale(1.02);
  transform-style: preserve-3d;
  transition: transform 0.42s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.hero__armour-system::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 52%;
  z-index: 1;
  width: 320px;
  height: 390px;
  border-radius: 42px;
  background:
    radial-gradient(ellipse at center, rgba(0, 0, 0, 0.52), transparent 64%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent);
  filter: blur(24px);
  opacity: 0.58;
  transform: translate(-50%, -50%) scale(0.92);
  transition:
    transform 0.56s cubic-bezier(0.18, 0.95, 0.18, 1),
    opacity 0.36s ease,
    filter 0.36s ease;
}

.hero__visual:hover .hero__armour-system {
  transform: translate3d(calc(var(--shift-x) * 0.18), calc(var(--shift-y) * 0.14), 96px) scale(1.06);
}

.hero__visual:hover .hero__armour-system::before {
  opacity: 0.76;
  filter: blur(34px);
  transform: translate(calc(-50% - (var(--shift-x) * 0.22)), calc(-50% - (var(--shift-y) * 0.18)))
    scale(1.08);
}

.hero__vest-outline,
.hero__layers,
.armor-layer,
.hero__strap,
.hero__torso,
.hero__layer-label {
  position: absolute;
  display: block;
}

.hero__vest-outline {
  left: 50%;
  top: 48%;
  z-index: 4;
  width: 292px;
  height: 406px;
  transform: translate(-50%, -50%) translateZ(104px);
  filter: drop-shadow(0 30px 36px rgba(0, 0, 0, 0.36));
  transition:
    transform 0.54s cubic-bezier(0.18, 0.95, 0.18, 1),
    filter 0.34s ease;
  will-change: transform;
}

.hero__visual:hover .hero__vest-outline {
  transform: translate(calc(-50% + (var(--shift-x) * 0.1)), calc(-50% + (var(--shift-y) * 0.08)))
    translateZ(176px) scale(1.1);
  filter: drop-shadow(0 46px 44px rgba(0, 0, 0, 0.42))
    drop-shadow(0 0 24px rgba(244, 241, 234, 0.1));
}

.hero__vest-outline::before,
.hero__vest-outline::after {
  content: '';
  position: absolute;
  top: 28px;
  width: 66px;
  height: 118px;
  border: 1px solid rgba(244, 241, 234, 0.22);
  border-bottom: none;
  background: linear-gradient(180deg, rgba(244, 241, 234, 0.08), transparent);
}

.hero__vest-outline::before {
  left: 38px;
  border-radius: 24px 8px 0 0;
  transform: rotate(-8deg);
}

.hero__vest-outline::after {
  right: 38px;
  border-radius: 8px 24px 0 0;
  transform: rotate(8deg);
}

.hero__strap {
  top: 22px;
  width: 38px;
  height: 112px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(244, 241, 234, 0.2), rgba(244, 241, 234, 0.02));
  border: 1px solid rgba(244, 241, 234, 0.18);
  transition:
    transform 0.46s cubic-bezier(0.18, 0.95, 0.18, 1),
    border-color 0.28s ease,
    background 0.28s ease;
}

.hero__strap--left {
  left: 68px;
  transform: rotate(-9deg);
}

.hero__strap--right {
  right: 68px;
  transform: rotate(9deg);
}

.hero__torso {
  left: 26px;
  right: 26px;
  bottom: 0;
  height: 326px;
  clip-path: polygon(15% 0, 85% 0, 100% 24%, 89% 100%, 11% 100%, 0 24%);
  border: 1px solid rgba(244, 241, 234, 0.24);
  border-radius: 26px;
  background:
    linear-gradient(90deg, transparent 49.5%, rgba(255, 255, 255, 0.16) 50%, transparent 50.5%),
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(160deg, rgba(244, 241, 234, 0.16), rgba(18, 22, 27, 0.94) 36%, #090b0e 100%);
  background-size:
    auto,
    100% 34px,
    34px 100%,
    auto;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    inset 0 -28px 48px rgba(0, 0, 0, 0.34);
  transition:
    border-color 0.34s ease,
    background 0.34s ease,
    box-shadow 0.34s ease;
}

.hero__torso::before,
.hero__torso::after {
  content: '';
  position: absolute;
  left: 28px;
  right: 28px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.2), transparent);
  transition:
    opacity 0.28s ease,
    transform 0.42s cubic-bezier(0.18, 0.95, 0.18, 1),
    background 0.28s ease;
}

.hero__torso::before {
  top: 86px;
}

.hero__torso::after {
  bottom: 78px;
}

.hero__visual:hover .hero__torso {
  border-color: rgba(244, 241, 234, 0.38);
  background:
    radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(244, 241, 234, 0.18),
      transparent 26%
    ),
    linear-gradient(90deg, transparent 49.5%, rgba(255, 255, 255, 0.2) 50%, transparent 50.5%),
    linear-gradient(rgba(255, 255, 255, 0.065) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(160deg, rgba(244, 241, 234, 0.2), rgba(18, 22, 27, 0.94) 34%, #090b0e 100%);
  background-size:
    auto,
    auto,
    100% 34px,
    34px 100%,
    auto;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -28px 48px rgba(0, 0, 0, 0.34),
    0 0 28px rgba(244, 241, 234, 0.08);
}

.hero__visual:hover .hero__torso::before {
  opacity: 0.88;
  transform: translateY(-8px);
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.36), transparent);
}

.hero__visual:hover .hero__torso::after {
  opacity: 0.88;
  transform: translateY(8px);
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.32), transparent);
}

.hero__layers {
  left: 50%;
  top: 49%;
  z-index: 3;
  width: 392px;
  height: 328px;
  transform: translate(-50%, -50%) translateZ(48px);
  pointer-events: none;
}

.hero__layers::before,
.hero__layers::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 480px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.28), transparent);
  opacity: 0;
  transform-origin: center;
  transition:
    opacity 0.34s ease,
    transform 0.58s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.hero__layers::before {
  transform: translate(-50%, -50%) rotate(-28deg) scaleX(0.55);
}

.hero__layers::after {
  transform: translate(-50%, -50%) rotate(31deg) scaleX(0.55);
}

.hero__visual:hover .hero__layers::before,
.hero__visual:hover .hero__layers::after {
  opacity: 0.78;
}

.hero__visual:hover .hero__layers::before {
  transform: translate(-50%, -50%) rotate(-32deg) scaleX(1);
}

.hero__visual:hover .hero__layers::after {
  transform: translate(-50%, -50%) rotate(35deg) scaleX(1);
}

.armor-layer {
  left: 50%;
  top: 50%;
  width: 280px;
  height: 350px;
  border: 1px solid rgba(244, 241, 234, 0.14);
  border-radius: 28px;
  clip-path: polygon(16% 0, 84% 0, 100% 25%, 88% 100%, 12% 100%, 0 25%);
  opacity: 0.46;
  transition:
    transform 0.62s cubic-bezier(0.18, 0.95, 0.18, 1),
    opacity 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
  will-change: transform;
  transform-style: preserve-3d;
}

.armor-layer--carrier {
  background: rgba(244, 241, 234, 0.045);
  transform: translate(-50%, -50%) translateX(-72px) translateY(18px) scale(0.9);
  animation: armor-layer-carrier-float 5.4s ease-in-out infinite;
}

.armor-layer--soft {
  background: rgba(174, 185, 200, 0.07);
  transform: translate(-50%, -50%) translateX(-34px) translateY(8px) scale(0.95);
  animation: armor-layer-soft-float 6s ease-in-out infinite;
}

.armor-layer--plate {
  border-color: rgba(244, 241, 234, 0.26);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 34%), rgba(215, 221, 231, 0.08);
  transform: translate(-50%, -50%) translateX(18px) translateY(-2px) scale(1);
  opacity: 0.62;
  animation: armor-layer-plate-float 4.9s ease-in-out infinite;
}

.armor-layer--buffer {
  background: rgba(7, 8, 9, 0.44);
  transform: translate(-50%, -50%) translateX(58px) translateY(-12px) scale(0.88);
  opacity: 0.38;
  animation: armor-layer-buffer-float 6.4s ease-in-out infinite;
}

.hero__visual:hover .armor-layer {
  animation-play-state: paused;
  border-color: rgba(244, 241, 234, 0.24);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 22px 38px rgba(0, 0, 0, 0.24);
}

.hero__visual:hover .armor-layer--carrier {
  transform: translate3d(
      calc(-50% - 156px - (var(--shift-x) * 0.16)),
      calc(-50% - 78px + (var(--shift-y) * 0.08)),
      -128px
    )
    rotate(-17deg) rotateX(12deg) rotateY(-10deg) scale(0.82);
  opacity: 0.42;
}

.hero__visual:hover .armor-layer--soft {
  transform: translate3d(
      calc(-50% - 104px + (var(--shift-y) * 0.12)),
      calc(-50% + 112px - (var(--shift-x) * 0.1)),
      -72px
    )
    rotate(13deg) rotateX(-10deg) rotateY(-8deg) scale(0.9);
  opacity: 0.5;
}

.hero__visual:hover .armor-layer--plate {
  transform: translate3d(
      calc(-50% + 126px - (var(--shift-x) * 0.18)),
      calc(-50% - 106px - (var(--shift-y) * 0.12)),
      -44px
    )
    rotate(-11deg) rotateX(9deg) rotateY(12deg) scale(0.98);
  opacity: 0.76;
}

.hero__visual:hover .armor-layer--buffer {
  transform: translate3d(
      calc(-50% + 172px + (var(--shift-y) * 0.14)),
      calc(-50% + 92px - (var(--shift-x) * 0.12)),
      -152px
    )
    rotate(18deg) rotateX(-14deg) rotateY(14deg) scale(0.8);
  opacity: 0.34;
}

.hero__layer-label {
  z-index: 5;
  min-width: 138px;
  padding: 10px 12px;
  border: 1px solid rgba(244, 241, 234, 0.1);
  border-radius: 14px;
  background: rgba(8, 9, 10, 0.62);
  backdrop-filter: blur(12px);
}

.hero__layer-label::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 78px;
  height: 1px;
  background: linear-gradient(90deg, rgba(244, 241, 234, 0.36), transparent);
}

.hero__layer-label--one {
  left: 0;
  top: 72px;
}

.hero__layer-label--one::before {
  left: 100%;
}

.hero__layer-label--two {
  right: -4px;
  top: 178px;
}

.hero__layer-label--two::before {
  right: 100%;
  transform: rotate(180deg);
}

.hero__layer-label--three {
  left: 18px;
  bottom: 64px;
}

.hero__layer-label--three::before {
  left: 100%;
}

.hero__layer-label span {
  display: block;
  margin-bottom: 5px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
}

.hero__layer-label strong {
  font-size: 12px;
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

  .hero__armour-system {
    width: min(94%, 560px);
    min-height: 440px;
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

  .hero__status {
    grid-template-columns: 1fr;
  }

  .hero__button {
    width: 100%;
  }

  .hero__visual {
    min-height: 324px;
    border-radius: 25.2px;
  }

  .hero__armour-system {
    width: 100%;
    min-height: 336px;
  }

  .hero__vest-outline {
    width: 190px;
    height: 276px;
  }

  .hero__torso {
    height: 220px;
  }

  .hero__layers {
    width: 268px;
    height: 238px;
  }

  .armor-layer {
    width: 188px;
    height: 238px;
  }

  .hero__layer-label {
    display: none;
  }
}

@media (hover: none) and (pointer: coarse) {
  .hero__visual {
    animation: hero-mobile-drift 6s ease-in-out infinite;
  }

  .hero__armour-system {
    animation: hero-core-mobile 4.8s ease-in-out infinite;
  }
}

@keyframes armor-layer-carrier-float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateX(-72px) translateY(18px) rotate(-1deg) scale(0.9);
  }

  50% {
    transform: translate(-50%, -50%) translateX(-116px) translateY(-24px) rotate(-7deg) scale(0.925);
  }
}

@keyframes armor-layer-soft-float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateX(-34px) translateY(8px) rotate(1deg) scale(0.95);
  }

  50% {
    transform: translate(-50%, -50%) translateX(10px) translateY(42px) rotate(7deg) scale(0.975);
  }
}

@keyframes armor-layer-plate-float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateX(18px) translateY(-2px) rotate(-1deg) scale(1);
  }

  50% {
    transform: translate(-50%, -50%) translateX(62px) translateY(-42px) rotate(6deg) scale(1.022);
  }
}

@keyframes armor-layer-buffer-float {
  0%,
  100% {
    transform: translate(-50%, -50%) translateX(58px) translateY(-12px) rotate(1deg) scale(0.88);
  }

  50% {
    transform: translate(-50%, -50%) translateX(18px) translateY(34px) rotate(-8deg) scale(0.905);
  }
}

@keyframes hero-mobile-drift {
  0%,
  100% {
    transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: perspective(1200px) rotateX(4deg) rotateY(-5deg);
  }
}

@keyframes hero-core-mobile {
  0%,
  100% {
    transform: translate3d(0, 0, 72px) scale(1.02);
  }

  50% {
    transform: translate3d(18px, -14px, 72px) scale(1.05);
  }
}
</style>
