<template>
  <section id="projects" class="projects" aria-labelledby="proj-title">
    <div class="container">
      <span class="section-label">// projects</span>
      <h2 id="proj-title" class="section-title">Projects</h2>

      <div class="projects__grid" role="list">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card reveal"
          :class="[
            `reveal-delay-${(i % 3) + 1}`,
            { 'project-card--featured': project.featured },
          ]"
          role="listitem"
        >
          <!-- Project Image -->
          <div
            class="project-card__image-wrapper"
            :class="{
              'healthcare-image': project.id === 'healthcare-platform',
            }"
          >
            <img
              :src="project.image"
              :alt="`${project.title} screenshot`"
              class="project-card__image"
              loading="lazy"
              @error="handleImageError"
            />
            <div class="project-card__image-overlay">
              <span class="project-card__category mono-badge">
                {{ project.categoryLabel }}
              </span>
              <span
                v-if="project.stars"
                class="project-card__stars"
                :aria-label="`${project.stars} stars on GitHub`"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                {{ project.stars }}
              </span>
            </div>
          </div>

          <div class="project-card__content">
            <h3 class="project-card__title">{{ project.title }}</h3>

            <p class="project-card__desc">{{ project.description }}</p>

            <div class="project-card__tech" aria-label="Technologies">
              <span v-for="t in project.tech" :key="t" class="mono-badge">{{
                t
              }}</span>
            </div>

            <div class="project-card__footer">
              <a
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                :aria-label="`View ${project.title} repository on GitHub`"
              >
                <IconGithub />
                <span>Repository</span>
                <svg
                  class="project-card__arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <div class="projects__more reveal">
        <a
          href="https://github.com/Xenios7"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          aria-label="View all repositories on GitHub"
        >
          <IconGithub />
          View all on GitHub
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollObserver } from "@/composables/useScrollObserver.js";
import { projects } from "@/data/projects.js";
import IconGithub from "@/components/icons/IconGithub.vue";

useScrollObserver("#projects .reveal");

// Fallback image if project image fails to load
const handleImageError = (event) => {
  event.target.src = "/logos/fallback.png";
};
</script>

<style scoped>
.projects {
  border-top: 1px solid var(--clr-border);
  background: var(--clr-surface);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
  margin-bottom: var(--sp-10);
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--clr-elevated);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition),
    box-shadow var(--transition);
}

.project-card:hover {
  border-color: var(--clr-border-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.project-card--featured {
  border-color: var(--clr-border-hover);
}

/* Image */
.project-card__image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  background: var(--clr-surface);
}

.project-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
}

/* Healthcare-specific image styling - slightly zoomed while keeping full image */
.healthcare-image .project-card__image {
  object-fit: contain;
  object-position: center;
  background: var(--clr-surface);
  transform: scale(1.4); /* Slight zoom while maintaining full image */
}

.healthcare-image:hover .project-card__image {
  transform: scale(1.15);
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.healthcare-image:hover .project-card__image {
  transform: scale(1.2); /* Slightly zoom in more on hover */
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card__image-overlay {
  position: absolute;
  top: var(--sp-4);
  left: var(--sp-4);
  right: var(--sp-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  pointer-events: none;
}

.project-card__category {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 11px;
  color: var(--clr-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card__stars {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: #fbbf24;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Content */
.project-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
  padding: var(--sp-4);
  flex: 1;
}

.project-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.project-card__desc {
  font-size: 13px;
  color: var(--clr-text-2);
  line-height: 1.7;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-1);
  margin-top: auto;
}

.project-card__footer {
  margin-top: var(--sp-3);
  padding-top: var(--sp-3);
  border-top: 1px solid var(--clr-border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--clr-text-2);
  transition: color var(--transition);
}

.project-card__link:hover {
  color: var(--clr-text);
}

.project-card__arrow {
  transition: transform var(--transition);
}

.project-card__link:hover .project-card__arrow {
  transform: translate(2px, -2px);
}

.projects__more {
  display: flex;
  justify-content: center;
}

@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .project-card__desc {
    -webkit-line-clamp: 4;
  }
}
</style>
