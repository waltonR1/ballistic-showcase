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
          面向法国及欧洲专业客户，提供产品目录、基础参数、图片资料、规格文件与商务沟通支持。具体防护等级、认证资料与报价信息建议通过正式联系确认。</span
        >
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

        <a class="contact-form__button" href="mailto:contact@example.com"> 通过邮件发送咨询</a>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 108px 0;
}

.contact-section__header {
  margin-bottom: 41.4px;
}

.contact-section__header > p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.contact-section__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 43.2px;
  align-items: end;
}

.contact-section__header h2 {
  margin: 0;
  font-size: clamp(37.8px, 5vw, 64.8px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.contact-section__header span {
  display: block;
  max-width: 648px;
  line-height: 1.9;
  color: var(--color-text-soft);
}

.contact-section__body {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 19.8px;
}

.contact-section__info {
  display: grid;
  gap: 19.8px;
}

.contact-section__panel,
.contact-form {
  border: 0.9px solid var(--color-line);
  border-radius: 32.4px;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.1), transparent 36%),
    var(--color-card);
}

.contact-section__panel {
  padding: 34.2px;
}

.contact-section__panel > span {
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.contact-section__panel h3 {
  margin: 25.2px 0 21.6px;
  font-size: 28.8px;
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.contact-section__panel ul {
  display: grid;
  gap: 14.4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-section__panel li {
  position: relative;
  padding-left: 19.8px;
  line-height: 1.75;
  color: var(--color-text-soft);
}

.contact-section__panel li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6.3px;
  height: 6.3px;
  border-radius: 899.1px;
  background: var(--color-accent);
}

.contact-section__meta {
  display: grid;
  gap: 10.8px;
}

.contact-section__meta div {
  padding: 19.8px 21.6px;
  border: 0.9px solid var(--color-line);
  border-radius: 21.6px;
  background: rgba(255, 255, 255, 0.025);
}

.contact-section__meta strong {
  display: block;
  margin-bottom: 7.2px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.contact-section__meta a,
.contact-section__meta span {
  color: var(--color-text-soft);
  line-height: 1.6;
}

.contact-form {
  padding: 34.2px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14.4px;
}

.contact-form label {
  display: grid;
  gap: 9px;
  margin-bottom: 16.2px;
}

.contact-form label span {
  font-size: 11.7px;
  color: var(--color-text-soft);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  border: 0.9px solid var(--color-line);
  border-radius: 16.2px;
  outline: none;
  background: rgba(7, 8, 9, 0.62);
  color: var(--color-text);
  font-family: inherit;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.contact-form input,
.contact-form select {
  height: 46.8px;
  padding: 0 14.4px;
}

.contact-form textarea {
  min-height: 135px;
  padding: 14.4px;
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
  margin-top: 7.2px;
  padding: 16.2px;
  border: 0.9px solid var(--color-line);
  border-radius: 19.8px;
  background: rgba(255, 255, 255, 0.025);
}

.contact-form__notice span {
  display: block;
  margin-bottom: 7.2px;
  font-family: var(--font-mono);
  font-size: 9.9px;
  letter-spacing: 0.16em;
  color: var(--color-accent);
}

.contact-form__notice p {
  margin: 0;
  line-height: 1.7;
  color: var(--color-text-muted);
  font-size: 11.7px;
}

.contact-form__button {
  margin-top: 21.6px;
  width: 100%;
  height: 48.6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 899.1px;
  background: var(--color-text);
  color: #08090a;
  font-size: 12.6px;
  transition: 0.25s ease;
}

.contact-form__button:hover {
  transform: translateY(-1.8px);
}

@media (max-width: 882px) {
  .contact-section__header > div,
  .contact-section__body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 612px) {
  .contact-form__row {
    grid-template-columns: 1fr;
  }

  .contact-section__panel,
  .contact-form {
    padding: 25.2px;
  }
}
</style>
