<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedHeading from '../components/AnimatedHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
import TeamMember from '../components/TeamMember.vue'

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = ref([
  {
    id: 1,
    title: 'SupplAI',
    description: 'An app that helps restaurants and fruit suppliers manage their inventory using AI. The app uses AI for image recognition to check the freshness of fruits, predict spoilage, and help businesses keep track of their stock to reduce waste. This app was developed during a hackathon and our team placed 8th out of 18 groups.',
    image: 'https://www.fruitsmith.com/pub/media/mageplaza/blog/post/r/e/reasons_that_make_fruit_basket_a_suitable_gift_.jpg',
    technologies: ['Vue.js', 'Django', 'Roboflow'],
    category: 'Machine Learning',
    link: 'https://supplai.ctrlsolutions.space/'
  },
  {
    id: 2,
    title: "Layman's Law",
    description: 'A platform that offers legal support and advice to help underrepresented Filipinos access easy-to-understand legal assistance. It started during an academic project and is now being developed for deployment.',
    image: 'https://blog.ipleaders.in/wp-content/uploads/2021/05/judge-hammer-gavel-lf-1-1024x585-1-1.jpg',
    technologies: ['Django', 'Nextjs', 'MyPostgreSQL'],
    category: 'Web Application',
    link: 'https://laymanslaw.ctrlsolutions.space/'
  },
  {
    id: 3,
    title: 'UPLoad',
    description: 'web application helps faculty members at the University of the Philippines Cebu create accomplishment reports more easily. It makes data entry simple, keeps the formatting consistent, and automatically generates reports. This saves time and reduces mistakes.',
    image: 'https://irarenas.wordpress.com/wp-content/uploads/2014/02/20160710_151831.jpg',
    technologies: ['Vue', 'Django', 'Axios', 'RestFramework', 'Websockets', 'PostgreSQL'],
    category: 'Web Application',
    link: 'https://upload.ctrlsolutions.space/'
  }
])

const teamMembers = ref([
  {
    id: 1,
    name: 'Alessandra Gwyneth Busiños',
    role: 'Full Stack Developer',
    image: 'src/assets/az.jpg',
    bio: 'Specializes in full stack development.',
    social: {
      github: 'https://github.com/lssndrrr',
      linkedin: 'https://www.linkedin.com/in/azbusinos/',
      facebook: 'https://twitter.com',
      email: 'arbusinos@up.edu.ph'
    }
  },
  {
    id: 2,
    name: 'Lanieza Marie Lopez',
    role: 'Full Stack Developer',
    image: 'src/assets/lani.jpg',
    bio: 'Specializes in full stack development.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah@example.com'
    }
  }
])

onMounted(() => {
  // Hero section animations
  const heroTimeline = gsap.timeline()
  
  heroTimeline
    .from('.hero-content h1', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-content p', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-buttons .btn', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')
  
  // Section animations
  gsap.from('.section-heading', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.section-heading',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })
  
  gsap.from('.about-content', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })
  
  gsap.from('.about-image', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })
  
  gsap.from('.stat-item', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Showcasing Innovation and Excellence in Creating Eye Catching Projects</h1>
          <p>Explore groundbreaking projects and meet the talented team behind the technology</p>
          <div class="hero-buttons">
            <router-link to="/projects" class="btn btn-primary">Explore Projects</router-link>
            <router-link to="/team" class="btn btn-outline">Meet Our Team</router-link>
          </div>
        </div>
      </div>
      <div class="hero-background"></div>
    </section>
    
    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <AnimatedHeading :level="2" class="section-heading">About Us</AnimatedHeading>
            <p>We are a team of passionate Computer Science students from the University of the Philippines Cebu, brought together through an academic project that sparked our shared enthusiasm for innovation, problem-solving, and technology. What began as a classroom collaboration has grown into a dynamic partnership driven by curiosity and a desire to make meaningful contributions through software development.</p>
            <p>Our team thrives on applying the principles we've learned in our courses to real-world challenges—whether through building intuitive user experiences, developing efficient systems, or exploring emerging technologies. As students of UP Cebu, we value excellence, collaboration, and the spirit of service, and we bring these values into every project we work on.</p>
            <p>This platform allows visitors to explore the diverse range of projects, learn about the technologies used, and connect with the brilliant minds behind each innovation.</p>
            <div class="about-features">
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div class="feature-content">
                  <h3>Hard-Worked Projects</h3>
                  <p>Made with tears and blood by our hardworking software engineers</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div class="feature-content">
                  <h3>Talented Team</h3>
                  <p>Diverse group of brilliant minds driving innovation.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="feature-content">
                  <h3>Modernized Frameworks</h3>
                  <p>Using the latest frameworks that is available for use.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team working on projects" />
          </div>
        </div>
      </div>
    </section>
    
    
    <!-- Featured Projects Section -->
    <section class="projects-section section">
      <div class="container">
        <AnimatedHeading :level="2" class="section-heading text-center">Featured Projects</AnimatedHeading>
        <p class="section-subheading text-center">Explore some of our innovative projects</p>
        
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
        
        <div class="text-center mt-6">
          <router-link to="/projects" class="btn btn-primary">View All Projects</router-link>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="team-section section">
      <div class="container">
        <AnimatedHeading :level="2" class="section-heading text-center">Meet Our Team</AnimatedHeading>
        <p class="section-subheading text-center">The brilliant minds behind our projects</p>
        
        <div class="team-grid">
          <TeamMember 
            v-for="member in teamMembers" 
            :key="member.id" 
            :member="member" 
          />
        </div>
        
        <div class="text-center mt-6">
          <router-link to="/team" class="btn btn-primary">View Full Team</router-link>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <AnimatedHeading :level="2">Ready to See More?</AnimatedHeading>
          <p>Visit our expo to experience these projects firsthand and connect with our team</p>
          <router-link to="/contact" class="btn btn-primary">Get Expo Details</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--color-primary-dark), var(--color-secondary));
    z-index: -1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-size: cover;
      background-position: center;
      opacity: 0.2;
      z-index: -1;
    }
  }
  
  .hero-content {
    max-width: 800px;
    
    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: var(--space-3);
      line-height: 1.2;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    p {
      font-size: 1.25rem;
      margin-bottom: var(--space-4);
      max-width: 600px;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
  
  .hero-buttons {
    display: flex;
    gap: var(--space-2);
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: var(--space-2);
    }
    
    .btn-outline {
      border-color: white;
      color: white;
      
      &:hover {
        background-color: white;
        color: var(--color-primary);
      }
    }
  }
}

.section-heading {
  margin-bottom: var(--space-2);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    
    .text-center & {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.section-subheading {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.about-section {
  background-color: var(--color-surface);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.about-features {
  margin-top: var(--space-4);
  display: grid;
  gap: var(--space-3);
}

.feature {
  display: flex;
  gap: var(--space-2);
  
  .feature-icon {
    color: var(--color-primary);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 102, 204, 0.1);
    border-radius: var(--radius-md);
  }
  
  .feature-content {
    h3 {
      font-size: 1.125rem;
      margin-bottom: var(--space-1);
    }
    
    p {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      margin: 0;
    }
  }
}

.about-image {
  img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
}

.stats-section {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-5) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
  
  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: var(--space-1);
    color: white;
  }
  
  .stat-label {
    font-size: 1.125rem;
    opacity: 0.8;
  }
}

.projects-grid, .team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-top: var(--space-4);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.team-grid {
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.mt-6 {
  margin-top: var(--space-8);
}

.cta-section {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: var(--space-6) 0;
  text-align: center;
  
  .section-heading {
    &::after {
      display: none;
    }
  }
  
  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto var(--space-4);
  }
  
  .btn-primary {
    background-color: white;
    color: var(--color-primary);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
}

.text-center {
  text-align: center;
}
</style>