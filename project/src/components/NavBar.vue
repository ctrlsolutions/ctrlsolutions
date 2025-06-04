<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const { isDarkMode } = defineProps<{
  isDarkMode: boolean
}>()


const emit = defineEmits(['toggle-theme'])

const router = useRouter()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  const menuTimeline = gsap.timeline()
  
  if (isMenuOpen.value) {
    menuTimeline
      .to('.mobile-menu', {
        clipPath: 'circle(150% at top right)',
        duration: 0.5,
        ease: 'power4.out'
      })
      .fromTo('.mobile-menu .nav-link', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.3
      }, '-=0.3')
  } else {
    menuTimeline
      .to('.mobile-menu .nav-link', {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.2
      })
      .to('.mobile-menu', {
        clipPath: 'circle(0% at top right)',
        duration: 0.5,
        ease: 'power4.in'
      }, '-=0.1')
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateTo = (path: string) => {
  if (isMenuOpen.value) {
    toggleMenu()
  }
  router.push(path)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo">
          <span>CTRL</span>Solutions
        </router-link>
        
        <div class="desktop-menu">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/team" class="nav-link">Team</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          
          <button @click="$emit('toggle-theme')" class="theme-toggle" aria-label="Toggle theme">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>
        
        <button @click="toggleMenu" class="menu-toggle" aria-label="Toggle menu">
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
        </button>
      </nav>
    </div>
    
    <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
      <div class="container">
        <div class="mobile-nav-links">
          <a @click="navigateTo('/')" class="nav-link">Home</a>
          <a @click="navigateTo('/projects')" class="nav-link">Projects</a>
          <a @click="navigateTo('/team')" class="nav-link">Team</a>
          <a @click="navigateTo('/contact')" class="nav-link">Contact</a>
          
          <button @click="$emit('toggle-theme')" class="theme-toggle mobile" aria-label="Toggle theme">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all var(--transition-normal);
  padding: var(--space-2) 0;
  background-color: rgba(var(--color-background-rgb), 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &.scrolled {
    background-color: var(--color-background);
    box-shadow: var(--shadow-md);
    padding: var(--space-1) 0;
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  z-index: 1001;
  
  span {
    color: var(--color-primary);
  }
}

.desktop-menu {
  display: none;
  align-items: center;
  gap: var(--space-3);
  
  @media (min-width: 768px) {
    display: flex;
  }
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-fast);
  }
  
  &:hover::after, &.router-link-active::after {
    width: 100%;
  }
  
  &.router-link-active {
    color: var(--color-primary);
  }
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  transition: color var(--transition-fast);
  z-index: 1001;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &.mobile {
    margin-top: var(--space-3);
    font-size: 1rem;
    color: var(--color-text);
    padding: var(--space-1) var(--space-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  .bar {
    width: 100%;
    height: 2px;
    background-color: var(--color-text);
    transition: transform 0.3s ease, opacity 0.3s ease;
    
    &:nth-child(1) {
      transform-origin: top left;
      
      &.active {
        transform: rotate(45deg) translate(5px, -5px);
      }
    }
    
    &:nth-child(2) {
      &.active {
        opacity: 0;
      }
    }
    
    &:nth-child(3) {
      transform-origin: bottom left;
      
      &.active {
        transform: rotate(-45deg) translate(5px, 5px);
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: circle(0% at top right);
  transition: clip-path 0.5s ease;
  
  &.active {
    clip-path: circle(150% at top right);
  }
  
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    
    .nav-link {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}
</style>