<template>
  <section id="education" class="education" aria-labelledby="edu-title">
    <div class="container">
      <span class="section-label">// education</span>
      <h2 id="edu-title" class="section-title">Education</h2>

      <div class="education__grid">
        <article
          v-for="(item, i) in education"
          :key="item.institution"
          class="edu-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="edu-card__icon" aria-hidden="true">
            <img
              :src="item.logo"
              :alt="item.institution"
              class="edu-card__logo"
            />
          </div>
          <div class="edu-card__content">
            <h3 class="edu-card__degree">{{ item.degree }}</h3>
            <p class="edu-card__institution">{{ item.institution }}</p>
            <span class="edu-card__period">{{ item.period }}</span>
          </div>
          <span class="edu-card__status">{{ item.status }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from "@/composables/useScrollObserver.js";

useScrollObserver("#education .reveal");

const education = [
  {
    degree: "BSc Computer Science · GPA 8.33",
    institution:
      "University of Cyprus — Distributed Systems, Parallel Computing, OS, Databases, Networks",
    logo: "/logos/ucy.png",
    period: "2022 — 2027 (expected)",
    status: "In progress",
  },
];
</script>

<style scoped>
.education {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-bg);
}

.education__grid {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
  max-width: 640px;
}

.edu-card {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-5);
  padding: var(--sp-6);
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition);
}

.edu-card:hover {
  border-color: var(--clr-border-hover);
}

.edu-card__icon {
  width: 72px;
  height: 72px;
}

.edu-card__logo {
  width: 60px;
  height: 60px;
}
.edu-card__content {
  flex: 1;
}

.edu-card__degree {
  font-size: 15px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.edu-card__institution {
  font-size: 13px;
  color: var(--clr-text-2);
  margin-bottom: var(--sp-2);
}

.edu-card__period {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--clr-text-3);
}

.edu-card__status {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 3px 9px;
  border-radius: 100px;
  background: rgba(74, 222, 128, 0.08);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.2);
  white-space: nowrap;
  align-self: flex-start;
}
</style>
