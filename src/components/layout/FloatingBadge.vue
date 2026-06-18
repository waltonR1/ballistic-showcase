<template>
  <div class="floating-badge">
    <span>CN → FR</span>
    <strong>Ballistic Showcase</strong>
  </div>
</template>

<style scoped>
.floating-badge {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 60;
  padding: 10px 14px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: rgba(8, 9, 10, 0.78);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.floating-badge span {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.floating-badge strong {
  display: block;
  margin-top: 3px;
  font-size: 12px;
  color: var(--color-text);
}
</style>
