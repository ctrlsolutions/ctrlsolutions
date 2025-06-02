<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SmoothScroll from './components/SmoothScroll.vue'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = ref(false)
const appReady = ref(false)
const route = useRoute()

provide('isDarkMode', isDarkMode)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value)
  
  const timeline = gsap.timeline()
  timeline.to('body', {
    backgroundColor: isDarkMode.value ? '#121212' : '#ffffff',
    color: isDarkMode.value ? '#ffffff' : '#121212',
    duration: 0.5,
    ease: 'power2.inOut'
  })
}

onMounted(() => {
  const timeline = gsap.timeline()
  
  timeline.to('.page-transition', {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1,
    ease: 'power4.inOut',
    onComplete: () => {
      appReady.value = true
    }
  })
  
  ScrollTrigger.refresh()
})
</script>

<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <div class="page-transition"></div>
    <NavBar @toggle-theme="toggleDarkMode" :is-dark-mode="isDarkMode" />

    <SmoothScroll>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </SmoothScroll>
    <Footer />
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ease;
}

main {
  flex: 1;
}
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-primary);
  z-index: 1000;
  transform: scaleY(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

main {
  flex: 1;
}

.dark-mode {
  --color-background: #121212;
  --color-text: #ffffff;
  --color-surface: #1e1e1e;
  --color-surface-variant: #2d2d2d;
  --color-border: rgba(255, 255, 255, 0.12);
}
</style>