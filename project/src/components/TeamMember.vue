<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  member: {
    id: number
    name: string
    role: string
    image: string
    bio: string
    social: {
      github?: string
      linkedin?: string
      twitter?: string
      email?: string
    }
  }
}>()

const memberRef = ref(null)
const isHovered = ref(false)

const toggleHover = (state: boolean) => {
  isHovered.value = state
}

onMounted(() => {
  if (memberRef.value) {
    gsap.from(memberRef.value, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: props.member.id * 0.1,
      ease: 'power3.out'
    })
  }
})
</script>

<template>
  <div 
    ref="memberRef" 
    class="team-member" 
    @mouseenter="toggleHover(true)" 
    @mouseleave="toggleHover(false)"
  >
    <div class="member-image">
      <img :src="member.image" :alt="member.name" />
      <div class="member-social" :class="{ 'active': isHovered }">
        <a v-if="member.social.github" :href="member.social.github" target="_blank" rel="noopener" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a v-if="member.social.linkedin" :href="member.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank" rel="noopener" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a v-if="member.social.email" :href="`mailto:${member.social.email}`" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
    
    <div class="member-content">
      <h3 class="member-name">{{ member.name }}</h3>
      <p class="member-role">{{ member.role }}</p>
      <p class="member-bio">{{ member.bio }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-member {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
}

.member-image {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .member-social {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-2);
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    display: flex;
    gap: var(--space-2);
    justify-content: center;
    opacity: 0;
    transform: translateY(100%);
    transition: opacity var(--transition-normal), transform var(--transition-normal);
    
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
    
    a {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transition: background-color var(--transition-fast);
      
      &:hover {
        background-color: var(--color-primary);
      }
    }
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.member-content {
  padding: var(--space-3);
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.member-role {
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.member-bio {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>