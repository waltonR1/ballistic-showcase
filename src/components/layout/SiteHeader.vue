<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const currentLocale = ref<'CN' | 'FR'>('CN')
const scrollProgress = ref(0)

function handleScroll() {
  const scrollTop = window.scrollY
  const scrollable = document.documentElement.scrollHeight - window.innerHeight

  isScrolled.value = scrollTop > 20
  scrollProgress.value = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0
}

function closeMenu() {
  isMenuOpen.value = false
}

function toggleLocale() {
  currentLocale.value = currentLocale.value === 'CN' ? 'FR' : 'CN'
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="site-header__inner">
      <RouterLink to="/" class="site-header__brand" @click="closeMenu">
        <img src="/favicon.ico" alt="铠福科技" class="site-header__logo" />
        <span class="site-header__text-logo">铠福科技</span>
      </RouterLink>

      <nav class="site-header__nav" :class="{ 'site-header__nav--open': isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">首页</RouterLink>
        <RouterLink to="/products" @click="closeMenu">产品目录</RouterLink>
        <RouterLink to="/scenarios" @click="closeMenu">应用场景</RouterLink>
        <RouterLink to="/resources" @click="closeMenu">资料中心</RouterLink>
      </nav>

      <div class="site-header__actions">
        <button
          class="site-header__language"
          type="button"
          aria-label="语言切换"
          title="Language"
          @click="toggleLocale"
        >
          <span class="site-header__language-icon">文</span>
          <span class="site-header__language-options">
            <strong :class="{ 'is-active': currentLocale === 'CN' }">CN</strong>
            <i>/</i>
            <strong :class="{ 'is-active': currentLocale === 'FR' }">FR</strong>
          </span>
        </button>

        <button
          class="site-header__menu-button"
          type="button"
          aria-label="打开导航"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="site-header__progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>
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

.site-header::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.03), transparent 46%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.site-header--scrolled {
  background: rgba(7, 8, 9, 0.72);
  backdrop-filter: blur(16.2px);
  border-bottom: 0.9px solid var(--color-line);
}

.site-header--scrolled::before {
  opacity: 1;
}

.site-header__progress {
  position: absolute;
  left: 0;
  bottom: -0.9px;
  width: 100%;
  height: 0.9px;
  transform: scaleX(0);
  transform-origin: left center;
  background: linear-gradient(90deg, transparent, var(--color-accent-strong), transparent);
  opacity: 0.72;
}

.site-header__inner {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  height: 68.4px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10.8px;
  justify-self: start;
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
  justify-self: center;
  gap: 34.2px;
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

.site-header__nav a:hover,
.site-header__nav a.router-link-exact-active {
  color: var(--color-text);
}

.site-header__nav a:hover::after,
.site-header__nav a.router-link-exact-active::after {
  width: 100%;
}

.site-header__actions {
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 12.6px;
}

.site-header__language {
  height: 34.2px;
  padding: 0 12.6px 0 7.2px;
  display: inline-flex;
  align-items: center;
  gap: 7.2px;
  border: 0.9px solid var(--color-line-strong);
  border-radius: 899.1px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;
}

.site-header__language:hover {
  border-color: rgba(244, 241, 234, 0.32);
  background: rgba(255, 255, 255, 0.045);
}

.site-header__language-icon {
  width: 22.5px;
  height: 22.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-text);
  color: #08090a;
  font-family: var(--font-main);
  font-size: 11.7px;
  font-weight: 700;
  letter-spacing: 0;
}

.site-header__language-options {
  display: inline-flex;
  align-items: center;
  gap: 5.4px;
  color: var(--color-text-muted);
}

.site-header__language-options strong {
  font-weight: 600;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.site-header__language-options strong.is-active {
  color: var(--color-text);
}

.site-header__language-options i {
  color: rgba(255, 255, 255, 0.28);
  font-style: normal;
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
  .site-header__inner {
    display: flex;
    justify-content: space-between;
  }

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

  .site-header__language-options {
    display: none;
  }

  .site-header__language {
    padding: 0 5.4px;
  }

  .site-header__menu-button {
    display: block;
  }
}
</style>
