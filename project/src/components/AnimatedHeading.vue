<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
  tag?: string
  level?: number
  animated?: boolean
}>()

const headingRef = ref(null)

const headingTag = () => {
  if (props.tag) return props.tag
  if (props.level) return `h${props.level}`
  return 'h2'
}

onMounted(() => {
  if (props.animated !== false && headingRef.value) {
    const element = headingRef.value as HTMLElement
    const text = element.textContent || ''
    const words = text.split(' ')
    
    element.innerHTML = ''
    
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span')
      wordSpan.classList.add('word')
      wordSpan.style.display = 'inline-block'
      wordSpan.style.overflow = 'hidden'
      
      const innerSpan = document.createElement('span')
      innerSpan.classList.add('inner')
      innerSpan.textContent = word + (index < words.length - 1 ? ' ' : '')
      innerSpan.style.display = 'inline-block'
      innerSpan.style.transform = 'translateY(100%)'
      innerSpan.style.opacity = '0'
      
      wordSpan.appendChild(innerSpan)
      element.appendChild(wordSpan)
    })
    
    gsap.to('.inner', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })
  }
})
</script>

<template>
  <component :is="headingTag()" ref="headingRef" class="animated-heading">
    <slot></slot>
  </component>
</template>

<style scoped>
.animated-heading {
  overflow: hidden;
}
</style>