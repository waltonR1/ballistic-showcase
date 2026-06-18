<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.contact-animate'),
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
  <section id="contact" ref="sectionRef" class="contact-section">
    <div class="contact-section__header contact-animate">
      <p>CONTACT & RFQ</p>

      <div>
        <h2>申请技术资料或产品咨询</h2>
        <span>
          面向法国及欧洲专业客户，提供产品目录、基础参数、图片资料、规格文件与商务沟通支持。
          具体防护等级、认证资料与报价信息建议通过正式联系确认。
        </span>
      </div>
    </div>

    <div class="contact-section__body">
      <div class="contact-section__info contact-animate">
        <div class="contact-section__panel">
          <span>PROFESSIONAL ENQUIRY</span>
          <h3>资料申请建议包含以下信息</h3>

          <ul>
            <li>目标产品类别，例如防弹背心、头盔、盾牌或插板</li>
            <li>预计使用场景，例如安防、机构采购或专业防护</li>
            <li>所需资料类型，例如产品图、参数、测试文件或报价</li>
            <li>所在国家、采购数量范围与期望沟通语言</li>
          </ul>
        </div>

        <div class="contact-section__meta">
          <div>
            <strong>Email</strong>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </div>

          <div>
            <strong>Region</strong>
            <span>France / Europe</span>
          </div>

          <div>
            <strong>Support</strong>
            <span>Product documentation / Sales coordination</span>
          </div>
        </div>
      </div>

      <form class="contact-form contact-animate" @submit.prevent>
        <div class="contact-form__row">
          <label>
            <span>姓名 / 公司</span>
            <input type="text" placeholder="请输入姓名或公司名称" />
          </label>

          <label>
            <span>邮箱</span>
            <input type="email" placeholder="name@example.com" />
          </label>
        </div>

        <label>
          <span>感兴趣的产品</span>
          <select>
            <option>防弹背心</option>
            <option>防弹头盔</option>
            <option>防弹盾牌</option>
            <option>防弹插板</option>
            <option>防弹芯片 / 软质防护组件</option>
            <option>其他防护方案</option>
          </select>
        </label>

        <label>
          <span>需求说明</span>
          <textarea placeholder="请简单说明产品需求、应用场景、数量范围或所需资料类型"></textarea>
        </label>

        <div class="contact-form__notice">
          <span>说明</span>
          <p>
            当前第一版表单仅用于页面展示。正式上线前可接入邮件发送、Cloudflare Pages Functions
            或第三方表单服务。
          </p>
        </div>

        <a class="contact-form__button" href="mailto:contact@example.com"> 通过邮件发送咨询 </a>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 120px 0;
}

.contact-section__header {
  margin-bottom: 46px;
}

.contact-section__header > p {
  margin: 0 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.contact-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: end;
}

.contact-section__header h2 {
  margin: 0;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.contact-section__header span {
  display: block;
  max-width: 720px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.contact-section__body {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 22px;
}

.contact-section__info {
  display: grid;
  gap: 22px;
}

.contact-section__panel,
.contact-form {
  border: 1px solid var(--color-line);
  border-radius: 36px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.1), transparent 36%),
    var(--color-card);
}

.contact-section__panel {
  padding: 38px;
}

.contact-section__panel > span {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.contact-section__panel h3 {
  margin: 28px 0 24px;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.contact-section__panel ul {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-section__panel li {
  position: relative;
  padding-left: 22px;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.contact-section__panel li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--color-accent);
}

.contact-section__meta {
  display: grid;
  gap: 12px;
}

.contact-section__meta div {
  padding: 22px 24px;
  border: 1px solid var(--color-line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.025);
}

.contact-section__meta strong {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.contact-section__meta a,
.contact-section__meta span {
  color: var(--color-text-soft);
  line-height: 1.6;
}

.contact-form {
  padding: 38px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form label {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.contact-form label span {
  font-size: 13px;
  color: var(--color-text-soft);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--color-line);
  border-radius: 18px;
  outline: none;
  background: rgba(7, 8, 9, 0.62);
  color: var(--color-text);
  font-family: inherit;
  font-size: 14px;
  transition: 0.25s ease;
}

.contact-form input,
.contact-form select {
  height: 52px;
  padding: 0 16px;
}

.contact-form textarea {
  min-height: 150px;
  padding: 16px;
  resize: vertical;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--color-line-strong);
  background: rgba(7, 8, 9, 0.82);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(184, 190, 199, 0.42);
}

.contact-form__notice {
  margin-top: 8px;
  padding: 18px;
  border: 1px solid var(--color-line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.025);
}

.contact-form__notice span {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--color-accent);
}

.contact-form__notice p {
  margin: 0;
  line-height: 1.7;
  color: var(--color-text-muted);
  font-size: 13px;
}

.contact-form__button {
  margin-top: 24px;
  width: 100%;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-text);
  color: #08090a;
  font-size: 14px;
  transition: 0.25s ease;
}

.contact-form__button:hover {
  transform: translateY(-2px);
}

@media (max-width: 980px) {
  .contact-section__header > div,
  .contact-section__body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .contact-form__row {
    grid-template-columns: 1fr;
  }

  .contact-section__panel,
  .contact-form {
    padding: 28px;
  }
}
</style>
