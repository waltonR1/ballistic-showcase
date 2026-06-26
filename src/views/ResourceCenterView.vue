<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useStaticLists } from '@/i18n'

const { t } = useI18n()
const lists = useStaticLists()
const resources = computed(() => lists.resources())
</script>

<template>
  <main class="resource-page">
    <section class="resource-hero">
      <p>RESOURCE CENTER</p>
      <h1>{{ t('resourcesTitle') }}</h1>
      <span>{{ t('resourcesDescription') }}</span>
    </section>

    <section class="resource-list" :aria-label="t('resourcesLabel')">
      <article v-for="item in resources" :key="item.title">
        <strong>{{ item.label }}</strong>
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.resource-page {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container));
  margin: 0 auto;
  padding: 150px 0 108px;
}

.resource-hero {
  max-width: 920px;
}

.resource-hero p {
  margin: 0 0 14.4px;
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.22em;
  color: var(--color-accent);
}

.resource-hero h1 {
  margin: 0;
  font-size: clamp(50.4px, 7vw, 100.8px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.resource-hero span {
  display: block;
  max-width: 680px;
  margin-top: 21.6px;
  color: var(--color-text-soft);
  line-height: 1.9;
}

.resource-list {
  margin-top: 70.2px;
  display: grid;
  gap: 14.4px;
}

.resource-list article {
  padding: 28.8px 32.4px;
  display: grid;
  grid-template-columns: 180px minmax(220px, 0.6fr) 1fr;
  gap: 28.8px;
  align-items: center;
  border: 0.9px solid var(--color-line);
  border-radius: 25.2px;
  background: linear-gradient(90deg, #171b20 0%, #101317 100%);
}

.resource-list strong {
  font-family: var(--font-mono);
  font-size: 10.8px;
  letter-spacing: 0.18em;
  color: var(--color-accent);
}

.resource-list h2 {
  margin: 0;
  font-size: 25.2px;
}

.resource-list p {
  margin: 0;
  color: var(--color-text-soft);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .resource-list article {
    grid-template-columns: 1fr;
    gap: 12.6px;
  }
}

@media (max-width: 612px) {
  .resource-page {
    padding-top: 117px;
  }
}
</style>
