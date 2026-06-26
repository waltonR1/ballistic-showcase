<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useStaticLists } from '@/i18n'

const { t } = useI18n()
const lists = useStaticLists()
const scenarios = computed(() => lists.scenarios())
</script>

<template>
  <main class="scenario-page">
    <section class="scenario-hero">
      <p>APPLICATION SCENARIOS</p>
      <h1>{{ t('scenariosTitle') }}</h1>
      <span>{{ t('scenariosDescription') }}</span>
    </section>

    <section class="scenario-grid" :aria-label="t('scenariosLabel')">
      <article v-for="(item, index) in scenarios" :key="item.title">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.scenario-page {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 150px 0 108px;
}

.scenario-hero {
  max-width: 900px;
}

.scenario-hero p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.scenario-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 100.8px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.scenario-hero span {
  display: block;
  max-width: 680px;
  margin-top: 21.6px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.scenario-grid {
  margin-top: 70.2px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16.2px;
}

.scenario-grid article {
  min-height: 252px;
  padding: 28.8px;
  border: 0.9px solid var(--color-line);
  border-radius: 27px;
  background: linear-gradient(180deg, #171b20 0%, #101317 100%);
}

.scenario-grid span {
  font-family: var(--font-mono);
  font-size: 10.8px;
  color: var(--color-accent);
}

.scenario-grid h2 {
  margin: 43.2px 0 14.4px;
  font-size: 25.2px;
}

.scenario-grid p {
  margin: 0;
  color: var(--color-text-soft);
  line-height: 1.8;
}

@media (max-width: 990px) {
  .scenario-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 612px) {
  .scenario-page {
    padding-top: 117px;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }
}
</style>
