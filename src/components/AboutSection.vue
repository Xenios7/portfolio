<template>
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="container">
      <span class="section-label">// about</span>
      <h2 id="about-title" class="section-title">About me</h2>

      <div class="about__grid">
        <div class="about__bio">
          <p class="reveal">
            Currently a Software Engineer Intern at the
            <strong>Bank of Cyprus</strong>, working on backend systems with
            Java, .NET, OracleDB and Apache Kafka.
          </p>
          <p class="reveal reveal-delay-1">
            Computer Science student at the
            <strong>University of Cyprus</strong> (GPA 8.33), focused on backend
            engineering and distributed systems. Research experience at
            <strong>KIOS Center of Excellence</strong>. Hands-on with
            Java/Spring Boot, Go, C#/.NET, Python/FastAPI, PostgreSQL, Docker,
            Kubernetes and parallel computing.
          </p>
        </div>

        <div class="about__pillars">
          <div
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            class="pillar reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="pillar__icon" aria-hidden="true">{{ pillar.icon }}</div>
            <h3 class="pillar__title">{{ pillar.title }}</h3>
            <p class="pillar__desc">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from "@/composables/useScrollObserver.js";

useScrollObserver("#about .reveal");

const pillars = [
  {
    icon: "⬡",
    title: "Backend & APIs",
    desc: "Backend services in Java and Go — REST and gRPC APIs, Spring Boot, and message-driven design with Apache Kafka.",
  },
  {
    icon: "◫",
    title: "Distributed Systems",
    desc: "Replication, partitioning, consumer offsets and delivery guarantees — built hands-on in a pub/sub system from scratch.",
  },
  {
    icon: "⬜",
    title: "DevOps & Observability",
    desc: "Docker and Kubernetes deployments, Prometheus metrics and Grafana dashboards, on Linux with Git.",
  },
];
</script>

<style scoped>
.about {
  background: var(--clr-bg);
  border-top: 1px solid var(--clr-border);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: start;
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
}

.about__bio p {
  font-size: 15px;
  color: var(--clr-text-2);
  line-height: 1.8;
}

.about__bio strong {
  color: var(--clr-text);
  font-weight: 500;
}

.about__pillars {
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

.pillar {
  padding: var(--sp-5);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  background: var(--clr-surface);
  transition: border-color var(--transition), background var(--transition);
}

.pillar:hover {
  border-color: var(--clr-border-hover);
  background: var(--clr-elevated);
}

.pillar__icon {
  font-size: 18px;
  margin-bottom: var(--sp-3);
  color: var(--clr-text-3);
}

.pillar__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.01em;
  margin-bottom: var(--sp-2);
}

.pillar__desc {
  font-size: 13px;
  color: var(--clr-text-2);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--sp-10);
  }
}
</style>
