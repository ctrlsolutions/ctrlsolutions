<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    category: string
    link: string
  }
}>()

const cardRef = ref(null)
const isHovered = ref(false)

const toggleHover = (state: boolean) => {
  isHovered.value = state
}

onMounted(() => {
  if (cardRef.value) {
    gsap.from(cardRef.value, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: props.project.id * 0.1,
      ease: 'power3.out'
    })
  }
})
</script>

<template>
  <div 
    ref="cardRef" 
    class="project-card" 
    @mouseenter="toggleHover(true)" 
    @mouseleave="toggleHover(false)"
  >
    <div class="project-image">
      <img :src="project.image" :alt="project.title" />
      <div class="project-overlay" :class="{ 'active': isHovered }">
        <div class="project-actions">
          <a :href="project.link" target="_blank" rel="noopener" class="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
    
    <div class="project-content">
      <span class="project-category">{{ project.category }}</span>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
}

.project-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .project-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-normal);
    
    &.active {
      opacity: 1;
    }
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.project-content {
  padding: var(--space-3);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-category {
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-1);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-2);
  font-weight: 600;
}

.project-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  flex: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: auto;
}

.tech-tag {
  background-color: var(--color-surface-variant);
  color: var(--color-text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
}
</style>