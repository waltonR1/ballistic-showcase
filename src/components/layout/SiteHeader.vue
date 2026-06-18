<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="site-header__inner">
      <a href="#" class="site-header__brand" @click="closeMenu">
        <img src="/favicon.ico" alt="Logo" class="site-header__logo" />
        <span class="site-header__text-logo"> 铠福科技 </span>
      </a>

      <nav class="site-header__nav" :class="{ 'site-header__nav--open': isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">首页</RouterLink>
        <RouterLink to="/products" @click="closeMenu">产品系列</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#quality' }" @click="closeMenu"> 生产能力 </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#technology' }" @click="closeMenu">
          防护技术
        </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#management' }" @click="closeMenu">
          法国管理
        </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#contact' }" @click="closeMenu"> 联系询盘 </RouterLink>
      </nav>

      <div class="site-header__actions">
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="site-header__cta">
          申请资料
        </RouterLink>

        <button class="site-header__menu-button" type="button" @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  transition: 0.3s ease;
}

.site-header--scrolled {
  background: rgba(7, 8, 9, 0.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--color-line);
}

.site-header__inner {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.site-header__logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.site-header__text-logo {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.22em;
  color: var(--color-text);
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.site-header__nav a {
  position: relative;
  font-size: 14px;
  color: var(--color-text-soft);
  transition: color 0.25s ease;
}

.site-header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 1px;
  background: var(--color-text);
  transition: width 0.25s ease;
}

.site-header__nav a:hover {
  color: var(--color-text);
}

.site-header__nav a:hover::after {
  width: 100%;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.site-header__cta {
  height: 38px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-line-strong);
  border-radius: 999px;
  font-size: 13px;
  color: var(--color-text);
  transition: 0.25s ease;
}

.site-header__cta:hover {
  background: var(--color-text);
  color: #08090a;
}

.site-header__menu-button {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
}

.site-header__menu-button span {
  display: block;
  width: 18px;
  height: 1px;
  margin: 5px auto;
  background: var(--color-text);
}

@media (max-width: 1020px) {
  .site-header__nav {
    position: fixed;
    top: 76px;
    left: 24px;
    right: 24px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
    border: 1px solid var(--color-line);
    border-radius: 24px;
    background: rgba(7, 8, 9, 0.92);
    backdrop-filter: blur(18px);
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__cta {
    display: none;
  }

  .site-header__menu-button {
    display: block;
  }
}
</style>
