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
  backdrop-filter: blur(16.2px);
  border-bottom: 0.9px solid var(--color-line);
}

.site-header__inner {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  height: 68.4px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10.8px;
}

.site-header__logo {
  width: 30.6px;
  height: 30.6px;
  object-fit: contain;
}

.site-header__text-logo {
  font-family: var(--font-mono);
  font-size: 11.7px;
  letter-spacing: 0.22em;
  color: var(--color-text);
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 27px;
}

.site-header__nav a {
  position: relative;
  font-size: 12.6px;
  color: var(--color-text-soft);
  transition: color 0.25s ease;
}

.site-header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7.2px;
  width: 0;
  height: 0.9px;
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
  gap: 12.6px;
}

.site-header__cta {
  height: 34.2px;
  padding: 0 16.2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.9px solid var(--color-line-strong);
  border-radius: 899.1px;
  font-size: 11.7px;
  color: var(--color-text);
  transition: 0.25s ease;
}

.site-header__cta:hover {
  background: var(--color-text);
  color: #08090a;
}

.site-header__menu-button {
  display: none;
  width: 37.8px;
  height: 37.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: transparent;
  cursor: pointer;
}

.site-header__menu-button span {
  display: block;
  width: 16.2px;
  height: 0.9px;
  margin: 4.5px auto;
  background: var(--color-text);
}

@media (max-width: 918px) {
  .site-header__nav {
    position: fixed;
    top: 68.4px;
    left: 21.6px;
    right: 21.6px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 21.6px;
    border: 0.9px solid var(--color-line);
    border-radius: 21.6px;
    background: rgba(7, 8, 9, 0.92);
    backdrop-filter: blur(16.2px);
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
