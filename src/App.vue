<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

let lenis: Lenis | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  lenis?.destroy()
  lenis = null
})
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>
