<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)

const layers = [
  {
    index: '01',
    title: '外层面料',
    desc: '用于装备外部耐磨、防污与基础结构保护。',
  },
  {
    index: '02',
    title: '软质防护层',
    desc: '可根据产品需求采用芳纶、UHMWPE 等软质防护材料。',
  },
  {
    index: '03',
    title: '硬质防护模块',
    desc: '适用于防弹插板、盾牌等硬质防护组件。',
  },
  {
    index: '04',
    title: '缓冲与贴合结构',
    desc: '提升穿戴稳定性、舒适性与装备系统适配能力。',
  },
]

const features = [
  {
    title: '材料选择',
    desc: '根据防护场景、重量要求与产品结构，对接不同材料方案。',
  },
  {
    title: '结构配置',
    desc: '支持背心、头盔、插板、盾牌及软质组件等多类型产品资料整理。',
  },
  {
    title: '文件支持',
    desc: '可根据专业客户需求申请参数表、规格说明、测试信息及产品图片资料。',
  },
]

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.tech-animate'),
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

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.layer-card'),
    {
      autoAlpha: 0,
      x: -28,
    },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
      clearProps: 'opacity,visibility,transform',
      scrollTrigger: {
        trigger: sectionRef.value.querySelector('.technology-section__layers'),
        start: 'top 75%',
        once: true,
      },
    },
  )
})
</script>

<template>
  <section id="technology" ref="sectionRef" class="technology-section">
    <div class="technology-section__header tech-animate">
      <p>PROTECTION TECHNOLOGY</p>

      <div>
        <h2>材料与防护技术</h2>
        <span>
          围绕弹道防护装备的材料结构、产品配置与技术资料对接，建立清晰、克制、专业的展示逻辑。
          具体防护等级、测试标准与认证文件以正式资料为准。
        </span>
      </div>
    </div>

    <div class="technology-section__body">
      <div class="technology-section__visual tech-animate">
        <div class="tech-plate">
          <div class="tech-plate__glow"></div>

          <div class="tech-plate__core">
            <span>COMPOSITE</span>
            <strong>Ballistic Protection Structure</strong>
          </div>

          <div class="tech-plate__line tech-plate__line--one"></div>
          <div class="tech-plate__line tech-plate__line--two"></div>
          <div class="tech-plate__line tech-plate__line--three"></div>
        </div>

        <div class="technology-section__metrics">
          <div>
            <strong>UHMWPE</strong>
            <span>轻量化材料</span>
          </div>

          <div>
            <strong>ARAMID</strong>
            <span>软质防护</span>
          </div>

          <div>
            <strong>CERAMIC</strong>
            <span>硬质防护</span>
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

    <div class="technology-section__notice tech-animate">
      <div>
        <p>DOCUMENTATION</p>
        <h3>技术资料按需申请</h3>
      </div>

      <span>
        网站仅展示产品类别与基础能力。具体防护等级、测试文件、认证资料、规格参数与报价信息，
        应通过正式商务沟通和资料审核后确认。
      </span>
    </div>
  </section>
</template>

<style scoped>
.technology-section {
  width: min(calc(100% - 48px), var(--container));
  margin: 0 auto;
  padding: 120px 0;
}

.technology-section__header {
  margin-bottom: 46px;
}

.technology-section__header > p,
.technology-section__notice p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.technology-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: end;
}

.technology-section__header h2 {
  margin: 0;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.technology-section__header span {
  display: block;
  max-width: 760px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.technology-section__body {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 22px;
}

.technology-section__visual {
  min-height: 640px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-line);
  border-radius: 38px;
  overflow: hidden;
  background:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    radial-gradient(circle at 50% 26%, rgba(210, 220, 235, 0.13), transparent 42%),
    var(--color-card);
  background-size:
    34px 34px,
    34px 34px,
    auto,
    auto;
}

.tech-plate {
  position: relative;
  flex: 1;
  min-height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-plate__glow {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 999px;
  background: rgba(210, 220, 235, 0.1);
  filter: blur(40px);
}

.tech-plate__core {
  position: relative;
  z-index: 2;
  width: min(68%, 360px);
  aspect-ratio: 0.72;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px;
  border: 1px solid var(--color-line-strong);
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.12), transparent 30%),
    linear-gradient(180deg, #1c2026 0%, #0b0d10 100%);
  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: rotate(-7deg);
}

.tech-plate__core span {
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.tech-plate__core strong {
  max-width: 220px;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.tech-plate__line {
  position: absolute;
  z-index: 1;
  width: 58%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
}

.tech-plate__line--one {
  top: 28%;
  transform: rotate(-7deg);
}

.tech-plate__line--two {
  top: 48%;
  transform: rotate(-7deg);
}

.tech-plate__line--three {
  top: 68%;
  transform: rotate(-7deg);
}

.technology-section__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--color-line);
  border-radius: 26px;
  overflow: hidden;
  background: rgba(8, 9, 10, 0.56);
}

.technology-section__metrics div {
  padding: 22px;
  border-right: 1px solid var(--color-line);
}

.technology-section__metrics div:last-child {
  border-right: none;
}

.technology-section__metrics strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.12em;
  color: var(--color-text);
}

.technology-section__metrics span {
  font-size: 13px;
  color: var(--color-text-muted);
}

.technology-section__layers {
  display: grid;
  gap: 16px;
}

.layer-card {
  min-height: 148px;
  padding: 28px;
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 22px;
  align-items: start;
  border: 1px solid var(--color-line);
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 38%),
    var(--color-card);
}

.layer-card span {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-accent);
}

.layer-card h3 {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.04em;
}

.layer-card p {
  margin: 12px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.technology-section__features {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.tech-feature {
  min-height: 240px;
  padding: 30px;
  border: 1px solid var(--color-line);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.025);
}

.tech-feature > span {
  display: block;
  width: 42px;
  height: 2px;
  margin-bottom: 56px;
  background: var(--color-accent);
}

.tech-feature h3 {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.04em;
}

.tech-feature p {
  margin: 14px 0 0;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.technology-section__notice {
  margin-top: 22px;
  padding: 36px;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 42px;
  align-items: center;
  border: 1px solid var(--color-line);
  border-radius: 32px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.08), transparent 34%),
    rgba(255, 255, 255, 0.025);
}

.technology-section__notice h3 {
  margin: 0;
  font-size: 34px;
  letter-spacing: -0.05em;
}

.technology-section__notice > span {
  line-height: 1.9;
  color: var(--color-text-soft);
}

@media (max-width: 980px) {
  .technology-section__header > div,
  .technology-section__body,
  .technology-section__features,
  .technology-section__notice {
    grid-template-columns: 1fr;
  }

  .technology-section__visual {
    min-height: 520px;
  }
}

@media (max-width: 680px) {
  .technology-section__metrics {
    grid-template-columns: 1fr;
  }

  .technology-section__metrics div {
    border-right: none;
    border-bottom: 1px solid var(--color-line);
  }

  .technology-section__metrics div:last-child {
    border-bottom: none;
  }

  .layer-card {
    grid-template-columns: 1fr;
  }
}
</style>
