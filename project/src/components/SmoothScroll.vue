<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const scroller = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

let currentY = ref(0)
let targetY = ref(0)
let rafId = ref<number | null>(null)

const smoothness = 0.1

const updateBodyHeight = () => {
  if (content.value) {
    const rect = content.value.getBoundingClientRect()
    document.body.style.height = `${rect.height}px`
  }
}

const initSmoothScroll = () => {
  if (!content.value || !scroller.value) return

  const onScroll = () => {
    targetY.value = window.scrollY
  }

  const render = () => {
    const diff = targetY.value - currentY.value
    const delta = Math.abs(diff) < 0.1 ? 0 : diff * smoothness

    if (delta !== 0) {
      currentY.value += delta

      if (content.value) {
        gsap.set(content.value, { y: -currentY.value })
        updateBodyHeight() // Update height after transform
      }

      ScrollTrigger.update()
    }

    rafId.value = requestAnimationFrame(render)
  }

  window.addEventListener('scroll', onScroll)
  rafId.value = requestAnimationFrame(render)

  updateBodyHeight() // Initial height set

  onUnmounted(() => {
    if (rafId.value !== null) cancelAnimationFrame(rafId.value)
    window.removeEventListener('scroll', onScroll)
    document.body.style.height = ''
  })
}

onMounted(() => {
  setTimeout(() => {
    if (window.innerWidth > 768) {
      initSmoothScroll()
    }
    ScrollTrigger.refresh()
  }, 100)

  window.addEventListener('resize', () => {
    updateBodyHeight()
    ScrollTrigger.refresh()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {})
})
</script>

<template>
  <div ref="scroller" class="smooth-scroll">
    <div ref="content" class="smooth-scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.smooth-scroll {
  width: 100%;
  overflow: hidden;
}

.smooth-scroll-content {
  will-change: transform;
  pointer-events: all;
  box-sizing: border-box;
}
</style>
