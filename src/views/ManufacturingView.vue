<script setup lang="ts">
import { computed } from 'vue'
import FactorySection from '@/components/home/FactorySection.vue'
import { useI18n, useStaticLists } from '@/i18n'
import { assetUrl } from '@/utils/asset'

const { t } = useI18n()
const lists = useStaticLists()

const factoryGallery = [
  {
    title: 'UD 布生产线',
    label: 'MATERIAL LINE',
    image: '/images/factory/UD布生成线.JPG',
  },
  {
    title: 'UD 布托料工位',
    label: 'UD FABRIC',
    image: '/images/factory/一托UD布2.jpg',
  },
  {
    title: '切割机设备',
    label: 'CUTTER',
    image: '/images/factory/切割机.JPG',
  },
  {
    title: '纤维与材料收卷',
    label: 'ROLLING',
    image: '/images/factory/收卷4.jpg',
  },
  {
    title: '液压成型设备',
    label: 'HYDRAULIC',
    image: '/images/factory/液压机.jpg',
  },
  {
    title: '激光切割工序',
    label: 'CUTTING',
    image: '/images/factory/激光切割.jpg',
  },
  {
    title: '压制产线',
    label: 'PRESSING',
    image: '/images/factory/压制产线.jpg',
  },
  {
    title: '热压罐设备',
    label: 'AUTOCLAVE',
    image: '/images/factory/热压罐.jpg',
  },
  {
    title: '热封处理工位',
    label: 'HEAT SEALING',
    image: '/images/factory/热封.JPG',
  },
  {
    title: '纤维生产线',
    label: 'FIBER LINE',
    image: '/images/factory/纤维生产线.jpg',
  },
  {
    title: '装甲板加工设备',
    label: 'ARMOUR PLATE',
    image: '/images/factory/装甲板机器.jpg',
  },
  {
    title: '生产设备全景',
    label: 'WORKSHOP',
    image: '/images/factory/设备.jpg',
  },
]

const localizedFactoryGallery = computed(() => {
  const titles = lists.factoryGalleryTitles()
  return factoryGallery.map((item, index) => ({
    ...item,
    title: titles[index] ?? item.title,
  }))
})
</script>

<template>
  <main class="standalone-page">
    <FactorySection />

    <section class="factory-gallery" :aria-label="t('factorySiteLabel')">
      <div class="factory-gallery__header">
        <p>FACTORY SITE</p>

        <div>
          <h2>{{ t('factorySiteTitle') }}</h2>
          <span>
            {{ t('factorySiteDescription') }}
          </span>
        </div>
      </div>

      <div class="factory-gallery__grid">
        <article v-for="(item, index) in localizedFactoryGallery" :key="item.image" class="factory-shot">
          <img :src="assetUrl(item.image)" :alt="item.title" />

          <div class="factory-shot__meta">
            <span>{{ String(index + 1).padStart(2, '0') }} / {{ item.label }}</span>
            <h3>{{ item.title }}</h3>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.standalone-page {
  padding-top: 54px;
}

.factory-gallery {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: -54px auto 108px;
}

.factory-gallery__header {
  margin-bottom: 32px;
}

.factory-gallery__header > p {
  margin: 0 0 14px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.factory-gallery__header > div {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px;
  align-items: end;
}

.factory-gallery__header h2 {
  margin: 0;
  font-size: clamp(37.8px, 4.6vw, 64px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.factory-gallery__header span {
  max-width: 720px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.factory-gallery__grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr 0.92fr;
  grid-auto-rows: 260px;
  gap: 16px;
}

.factory-shot {
  position: relative;
  min-height: 0;
  border: 0.9px solid var(--color-line);
  border-radius: 26px;
  overflow: hidden;
  background: var(--color-surface-raised);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);
  isolation: isolate;
  transition:
    transform 0.32s ease,
    border-color 0.32s ease,
    box-shadow 0.32s ease;
}

.factory-shot:first-child {
  grid-row: span 2;
}

.factory-shot:nth-child(4),
.factory-shot:nth-child(10) {
  grid-column: span 2;
}

.factory-shot:nth-child(7) {
  grid-row: span 2;
}

.factory-shot::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(180deg, transparent 35%, rgba(4, 5, 7, 0.72) 100%);
  background-size: 34px 34px, 34px 34px, auto;
  opacity: 0.82;
}

.factory-shot::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(112deg, transparent 0%, rgba(244, 241, 234, 0.12) 48%, transparent 62%);
  opacity: 0;
  transform: translateX(-72%);
  transition:
    opacity 0.32s ease,
    transform 0.72s ease;
}

.factory-shot:hover {
  transform: translateY(-8px);
  border-color: rgba(244, 241, 234, 0.22);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.32);
}

.factory-shot:hover::after {
  opacity: 0.72;
  transform: translateX(72%);
}

.factory-shot img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: saturate(0.82) contrast(1.08) brightness(0.82);
  transform: scale(1.02);
  transition:
    transform 0.58s ease,
    filter 0.38s ease;
}

.factory-shot:hover img {
  filter: saturate(0.95) contrast(1.08) brightness(0.92);
  transform: scale(1.08);
}

.factory-shot__meta {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 20px;
  z-index: 3;
}

.factory-shot__meta span {
  font-family: var(--font-mono);
  font-size: 9.5px;
  letter-spacing: 0.16em;
  color: var(--color-accent);
}

.factory-shot__meta h3 {
  margin: 8px 0 0;
  font-size: 22px;
  letter-spacing: -0.04em;
}

@media (max-width: 990px) {
  .factory-gallery {
    margin-top: -28px;
  }

  .factory-gallery__header > div,
  .factory-gallery__grid {
    grid-template-columns: 1fr;
  }

  .factory-gallery__grid {
    grid-auto-rows: 260px;
  }

  .factory-shot:first-child,
  .factory-shot:nth-child(4),
  .factory-shot:nth-child(7),
  .factory-shot:nth-child(10) {
    grid-row: auto;
    grid-column: auto;
  }
}

@media (max-width: 612px) {
  .standalone-page {
    padding-top: 36px;
  }

  .factory-gallery {
    margin-bottom: 72px;
  }
}
</style>
