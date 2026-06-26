<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/i18n'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const scrollProgress = ref(0)
const { locale, t, toggleLocale } = useI18n()

function handleScroll() {
  const scrollTop = window.scrollY
  const scrollable = document.documentElement.scrollHeight - window.innerHeight

  isScrolled.value = scrollTop > 20
  scrollProgress.value = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0
}

function closeMenu() {
  isMenuOpen.value = false
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
        <img src="/favicon.ico" :alt="t('brand')" class="site-header__logo" />
        <span class="site-header__text-logo">{{ t('brand') }}</span>
      </RouterLink>

      <nav class="site-header__nav" :class="{ 'site-header__nav--open': isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">{{ t('navHome') }}</RouterLink>
        <RouterLink to="/products" @click="closeMenu">{{ t('navProducts') }}</RouterLink>
        <RouterLink to="/scenarios" @click="closeMenu">{{ t('navScenarios') }}</RouterLink>
        <RouterLink to="/resources" @click="closeMenu">{{ t('navResources') }}</RouterLink>
        <RouterLink to="/manufacturing" @click="closeMenu">{{ t('navManufacturing') }}</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">{{ t('navContact') }}</RouterLink>
      </nav>

      <div class="site-header__actions">
        <button
          class="site-header__language"
          type="button"
          :aria-label="t('languageLabel')"
          title="Language"
          @click="toggleLocale"
        >
          <span class="site-header__language-icon">文</span>
          <span class="site-header__language-options">
            <strong :class="{ 'is-active': locale === 'CN' }">CN</strong>
            <i>/</i>
            <strong :class="{ 'is-active': locale === 'FR' }">FR</strong>
          </span>
        </button>

        <button
          class="site-header__menu-button"
          type="button"
          :aria-label="t('menuLabel')"
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
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: var(--color-text);
}

.site-header__nav {
  display: flex;
  align-items: center;
  justify-self: center;
  gap: clamp(15px, 2vw, 28px);
}

.site-header__nav a {
  position: relative;
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  padding: 0 2px;
  font-size: 13px;
  font-weight: 560;
  letter-spacing: 0.04em;
  color: var(--color-text-soft);
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.site-header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--color-accent-strong), rgba(244, 241, 234, 0.82));
  box-shadow: 0 0 18px rgba(175, 194, 222, 0.2);
  transition: width 0.28s ease;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-exact-active {
  color: var(--color-text);
  transform: translateY(-1px);
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

  .site-header__nav a {
    min-height: 30px;
    font-size: 13.5px;
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
