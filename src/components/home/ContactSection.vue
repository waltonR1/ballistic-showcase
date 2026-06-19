<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { revealOnScroll } from '@/utils/motion'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  revealOnScroll(sectionRef.value, '.contact-animate', {
    y: 86,
    scale: 0.95,
    stagger: 0.14,
    duration: 1,
  })
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact-section">
    <div class="contact-section__header contact-animate">
      <p>CONTACT & RFQ</p>

      <div>
        <h2>产品咨询</h2>
        <span>
          面向法国及欧洲专业客户，提供产品目录、基础参数、图片资料、规格文件与商务沟通支持。请通过正式联系确认防护等级、认证资料、交付范围与报价信息。
        </span>
      </div>
    </div>

    <div class="contact-section__body">
      <div class="contact-section__info contact-animate">
        <div class="contact-section__panel">
          <span>PROFESSIONAL ENQUIRY</span>
          <h3>为了更快匹配资料，请尽量说明以下信息</h3>

          <ul>
            <li>目标产品类别，例如背心、头盔、盾牌、插板或软质防护组件</li>
            <li>应用场景与采购主体，例如安防、机构采购、企业防护或项目配套</li>
            <li>希望获取的资料，例如产品图、基础参数、规格说明、测试文件或报价</li>
            <li>所在国家、数量范围、时间计划与期望沟通语言</li>
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
          <textarea placeholder="请说明产品类别、应用场景、数量范围、目标资料类型或其他商务需求"></textarea>
        </label>

        <div class="contact-form__notice">
          <span>重要提示</span>
          <p>
            防护等级、测试报告、认证文件与报价信息需结合具体产品型号和使用场景确认。提交需求后，我们会优先对接产品资料、基础参数与后续商务沟通安排。
          </p>
        </div>

        <a class="contact-form__button" href="mailto:contact@example.com">通过邮件发送咨询</a>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: var(--section-space) 0;
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
  position: relative;
  border: 0.9px solid var(--color-line);
  border-radius: 32.4px;
  overflow: hidden;
  background:
    radial-gradient(circle at top right, rgba(210, 220, 235, 0.1), transparent 36%),
    var(--color-surface-raised);
  box-shadow: var(--shadow-panel);
  transition:
    transform 0.34s ease,
    border-color 0.34s ease,
    box-shadow 0.34s ease;
}

.contact-section__panel::before,
.contact-form::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(115deg, transparent 0%, rgba(244, 241, 234, 0.08) 48%, transparent 58%),
    radial-gradient(circle at 84% 12%, rgba(210, 220, 235, 0.14), transparent 24%);
  opacity: 0;
  transform: translateX(-18%);
  transition:
    opacity 0.34s ease,
    transform 0.56s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.contact-section__panel:hover,
.contact-form:hover {
  transform: translateY(-3px);
  border-color: rgba(244, 241, 234, 0.18);
  box-shadow:
    0 32px 90px rgba(0, 0, 0, 0.42),
    0 0 58px rgba(210, 220, 235, 0.08);
}

.contact-section__panel:hover::before,
.contact-form:hover::before {
  opacity: 1;
  transform: translateX(0);
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
  transition:
    color 0.28s ease,
    transform 0.28s ease;
  animation: contact-check-pulse 5.6s ease-in-out infinite;
}

.contact-section__panel li:nth-child(2) {
  animation-delay: 0.45s;
}

.contact-section__panel li:nth-child(3) {
  animation-delay: 0.9s;
}

.contact-section__panel li:nth-child(4) {
  animation-delay: 1.35s;
}

.contact-section__panel:hover li {
  color: var(--color-text);
}

.contact-section__panel li:hover {
  transform: translateX(4px);
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
  box-shadow: 0 0 0 rgba(244, 241, 234, 0);
  transition: box-shadow 0.28s ease;
}

.contact-section__panel:hover li::before {
  box-shadow: 0 0 18px rgba(244, 241, 234, 0.26);
}

.contact-section__meta {
  display: grid;
  gap: 10.8px;
}

.contact-section__meta div {
  position: relative;
  padding: 19.8px 21.6px;
  border: 0.9px solid var(--color-line);
  border-radius: 21.6px;
  background: rgba(255, 255, 255, 0.025);
  overflow: hidden;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease;
}

.contact-section__meta div::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.68), transparent);
  transition: right 0.42s cubic-bezier(0.18, 0.95, 0.18, 1);
}

.contact-section__meta div:hover {
  transform: translateX(5px);
  border-color: rgba(244, 241, 234, 0.16);
  background: rgba(255, 255, 255, 0.04);
}

.contact-section__meta div:hover::after {
  right: 0;
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
  box-shadow: inset 0 0 0 0 rgba(244, 241, 234, 0);
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
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
  box-shadow:
    inset 0 0 0 1px rgba(244, 241, 234, 0.08),
    0 0 24px rgba(210, 220, 235, 0.08);
  transform: translateY(-1px);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(184, 190, 199, 0.42);
}

.contact-form__notice {
  position: relative;
  margin-top: 7.2px;
  padding: 16.2px;
  border: 0.9px solid var(--color-line);
  border-radius: 19.8px;
  background: rgba(255, 255, 255, 0.025);
  overflow: hidden;
}

.contact-form__notice::before {
  content: '';
  position: absolute;
  left: -20%;
  top: 0;
  width: 18%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(244, 241, 234, 0.08), transparent);
  transform: skewX(-14deg);
  animation: contact-notice-scan 5.2s ease-in-out infinite;
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
  position: relative;
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
  overflow: hidden;
  transition: 0.25s ease;
}

.contact-form__button::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -24%;
  width: 18%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
  transform: skewX(-16deg);
  opacity: 0;
}

.contact-form__button:hover {
  transform: translateY(-1.8px);
}

.contact-form__button:hover::before {
  animation: contact-button-send 0.9s ease;
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

@keyframes contact-check-pulse {
  0%,
  100% {
    opacity: 0.82;
  }

  50% {
    opacity: 1;
  }
}

@keyframes contact-notice-scan {
  0%,
  42% {
    left: -24%;
    opacity: 0;
  }

  55%,
  68% {
    opacity: 1;
  }

  100% {
    left: 110%;
    opacity: 0;
  }
}

@keyframes contact-button-send {
  0% {
    left: -24%;
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
