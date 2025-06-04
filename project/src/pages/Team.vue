<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedHeading from '../components/AnimatedHeading.vue'
import TeamMember from '../components/TeamMember.vue'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = ref([
  {
    id: 1,
    name: 'Alessandra Gwyneth Busiños',
    role: 'Full Stack Developer',
    image: 'src/assets/az3.jpg',
    bio: 'Specializes in full stack development.',
    social: {
      github: 'https://github.com/lssndrrr',
      linkedin: 'https://www.linkedin.com/in/azbusinos/',
      email: 'arbusinos@up.edu.ph'
    }
  },
  {
    id: 2,
    name: 'Lanieza Marie Lopez',
    role: 'Full Stack Developer',
    image: 'src/assets/lanigurl.jpg',
    bio: 'Specializes in full stack development.',
    social: {
      github: 'https://github.com/Lanieza',
      linkedin: 'https://www.linkedin.com/in/lanieza-marie-b-lopez-09750b28a/',
      email: 'lblopez@up.edu.ph'
    }
  },
  {
    id: 3,
    name: 'Caleb Josh Berandoy',
    role: 'Full Stack Developer',
    image: 'src/assets/caleb.jpg',
    bio: 'Specializes in full stack development.',
    social: {
      github: 'https://github.com/cajober',
      linkedin: 'https://www.linkedin.com/in/caleb-josh-berandoy-544370237/',
      email: 'caleb.berandoy@gmail.com'
    }
  },
  {
    id: 4,
    name: 'Erl John Montaño',
    role: 'Frontend Developer, UX/UI Designer',
    image: 'src/assets/erl.jpg',
    bio: 'Specializes in frontend development and user experience design.',
    social: {
      github: 'https://github.com/ermontano',
      linkedin: 'https://www.linkedin.com/in/erl-john-montano-8b9393286/',
      email: 'ermontano@up.edu.ph'
    }
  },
  {
    id: 5,
    name: 'Nico Bello',
    role: 'Frontend Developer',
    image: 'src/assets/nico2.jpg',
    bio: 'Specializes in frontend development.',
    social: {
      github: 'https://github.com/ndb3llo',
      linkedin: 'https://www.linkedin.com/in/nico-bello-ba290526b/',
      email: 'ndbello@up.edu.ph'
    }
  },
  {
    id: 6,
    name: 'Angel Grace Señoron',
    role: 'Frontend Developer',
    image: 'src/assets/angel.jpg',
    bio: 'Specializes in frontend development.',
    social: {
      github: 'https://github.com/royalsprites',
      linkedin: 'www.linkedin.com/in/aasenoron',
      email: 'aaasenoron@gmail.com'
    }
  }
])

onMounted(() => {
  // Header animation
  gsap.from('.team-header h1', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  
  gsap.from('.team-header p', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="team-page">
    <!-- Header -->
    <section class="team-header">
      <div class="container">
        <AnimatedHeading :level="1">Our Team</AnimatedHeading>
        <p>Meet the talented individuals behind our innovative projects</p>
      </div>
    </section>
    
    <!-- Team Grid -->
    <section class="team-grid-section section">
      <div class="container">
        <div class="team-grid">
          <TeamMember 
            v-for="member in teamMembers" 
            :key="member.id" 
            :member="member" 
          />
        </div>
      </div>
    </section>
    
    <!-- Join Our Team Section -->
    <section class="join-team-section section">
      <div class="container">
        <div class="join-team-content">
          <AnimatedHeading :level="2">The Team</AnimatedHeading>
          <p>We're always looking for talented individuals to join our team. If you're passionate about computer science and innovation, we'd love to hear from you!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.team-page {
  padding-top: 64px;
}

.team-header {
  background: linear-gradient(135deg, var(--color-secondary), var(--color-primary-dark));
  color: white;
  padding: var(--space-8) 0;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin-bottom: var(--space-3);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.join-team-section {
  background-color: var(--color-surface);
  text-align: center;
  padding: var(--space-8) 0;
  
  .join-team-content {
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      margin-bottom: var(--space-3);
    }
    
    p {
      margin-bottom: var(--space-4);
      color: var(--color-text-secondary);
      font-size: 1.125rem;
    }
  }
}
</style>