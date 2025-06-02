<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.footer-content', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <router-link to="/" class="logo">
            <span>CTRL</span>Solutions
          </router-link>
          <p class="tagline">Showcasing innovation and excellence in creating eye catching projects</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-section">
            <h4>Navigation</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/team">Team</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
          
          <div class="footer-section">
            <h4>Connect</h4>
            <a href="#" target="_blank" rel="noopener">Twitter</a>
            <a href="#" target="_blank" rel="noopener">GitHub</a>
            <a href="#" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} CTRLSolutions All rights reserved.</p>
        <p>Designed with ❤️ by the CTRLSolutions Team</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-surface);
  padding: var(--space-6) 0 var(--space-3);
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-logo {
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--space-1);
    display: inline-block;
    
    span {
      color: var(--color-primary);
    }
  }
  
  .tagline {
    color: var(--color-text-secondary);
    margin-top: var(--space-1);
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: var(--space-2);
    font-weight: 600;
  }
  
  a {
    color: var(--color-text-secondary);
    margin-bottom: var(--space-1);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-primary);
    }
  }
}

.footer-bottom {
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  
  p {
    margin: 0;
  }
}
</style>