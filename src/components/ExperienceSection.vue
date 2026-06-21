<template>
  <section id="experience" class="experience" aria-labelledby="exp-title">
    <div class="container">
      <span class="section-label">// experience</span>
      <h2 id="exp-title" class="section-title">Experience</h2>

      <div class="timeline" role="list">
        <article
          v-for="(item, i) in experiences"
          :key="item.company"
          class="timeline__item reveal"
          :class="`reveal-delay-${i + 1}`"
          role="listitem"
        >
          <div class="timeline__marker" aria-hidden="true">
            <div class="timeline__dot"></div>
            <div class="timeline__line"></div>
          </div>

          <div class="timeline__content">
            <div class="timeline__header">
              <div class="timeline__header-left">
                <div class="timeline__company-row">
                  <img
                    :src="item.logo"
                    :alt="item.company"
                    class="timeline__logo"
                  />

                  <h3 class="timeline__company">
                    {{ item.company }}
                  </h3>
                </div>

                <p class="timeline__role">
                  {{ item.role }}
                </p>
              </div>

              <div class="timeline__header-right">
                <span class="timeline__period">{{ item.period }}</span>
                <span v-if="item.current" class="timeline__badge">
                  Current
                </span>
              </div>
            </div>

            <ul class="timeline__responsibilities" role="list">
              <li
                v-for="resp in item.responsibilities"
                :key="resp"
                class="timeline__resp-item"
              >
                {{ resp }}
              </li>
            </ul>

            <div v-if="item.tech.length" class="timeline__tech">
              <span v-for="t in item.tech" :key="t" class="mono-badge">
                {{ t }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from "@/composables/useScrollObserver.js";

useScrollObserver("#experience .reveal");

const base = import.meta.env.BASE_URL;

const experiences = [
  {
    company: "Bank of Cyprus · Nicosia",
    role: "Software Engineer Intern",
    logo: `${base}logos/boc.png`,
    period: "Jun 2026 — Present",
    current: true,
    responsibilities: [
      "Backend development within the bank's in-house engineering teams using Java, .NET, OracleDB and Apache Kafka",
      "API testing with Bruno and project tracking via Jira",
    ],
    tech: ["Java", ".NET", "OracleDB", "Apache Kafka", "Bruno", "Jira"],
  },
  {
    company: "KIOS Research Center · University of Cyprus",
    role: "Software Engineer Intern",
    logo: `${base}logos/kios.jpg`,
    period: "Jul 2025 — Apr 2026",
    current: false,
    responsibilities: [
      "Built data engineering pipelines for EV-charging datasets under the EU ePowerMove project — synthetic data generation, timestamp alignment and feature engineering",
      "Created MATLAB/Python visualizations tracking charging-schedule evolution across optimization iterations",
      "Researched European V2G/V2X pilot projects",
    ],
    tech: ["Python", "MATLAB"],
  },
  {
    company: "IKEA · Nicosia",
    role: "Help Desk",
    logo: `${base}logos/ikea.jpg`,
    period: "Jul 2024 — Sep 2024",
    current: false,
    responsibilities: [
      "Customer support and technical guidance for in-store and online purchases",
    ],
    tech: [],
  },
];
</script>

<style scoped>
.experience {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-bg);
}

.timeline {
  max-width: 720px;
}

.timeline__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: var(--sp-5);
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
}

.timeline__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--clr-text);
  border: 2px solid var(--clr-bg);
  outline: 1px solid var(--clr-border-hover);
  flex-shrink: 0;
}

.timeline__line {
  flex: 1;
  width: 1px;
  background: var(--clr-border);
  margin-top: var(--sp-2);
}

.timeline__content {
  padding-bottom: var(--sp-10);
}

.timeline__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--sp-4);
  margin-bottom: var(--sp-5);
  flex-wrap: wrap;
}

.timeline__company-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.timeline__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 8px;
}

.timeline__company {
  font-size: 18px;
  font-weight: 650;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  margin: 0;
}

.timeline__role {
  font-size: 14px;
  color: var(--clr-text-3);
  margin: 0;
}

.timeline__header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--sp-2);
  flex-shrink: 0;
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--clr-text-3);
  white-space: nowrap;
}

.timeline__badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 100px;
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.25);
}

.timeline__responsibilities {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  margin-bottom: var(--sp-5);
}

.timeline__resp-item {
  display: flex;
  gap: var(--sp-3);
  font-size: 14px;
  color: var(--clr-text-2);
  line-height: 1.6;
}

.timeline__resp-item::before {
  content: "—";
  color: var(--clr-text-3);
  flex-shrink: 0;
}

.timeline__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

@media (max-width: 600px) {
  .timeline__header {
    flex-direction: column;
  }

  .timeline__header-right {
    align-items: flex-start;
    flex-direction: row;
    gap: var(--sp-3);
  }

  .timeline__company {
    font-size: 16px;
  }
}
</style>
