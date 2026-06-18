<template>
  <div class="floating-badge">
    <span>CN -> FR</span>
    <strong>Ballistic Showcase</strong>
  </div>
</template>

<style scoped>
.floating-badge {
  position: fixed;
  right: 21.6px;
  bottom: 21.6px;
  z-index: 60;
  padding: 9px 12.6px;
  border: 0.9px solid var(--color-line);
  border-radius: 899.1px;
  background: rgba(8, 9, 10, 0.78);
  backdrop-filter: blur(12.6px);
  box-shadow: 0 9px 27px rgba(0, 0, 0, 0.25);
}

.floating-badge span {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.floating-badge strong {
  display: block;
  margin-top: 2.7px;
  font-size: 10.8px;
  color: var(--color-text);
}
</style>
