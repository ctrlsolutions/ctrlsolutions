<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedHeading from '../components/AnimatedHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

// Project data
const projects = ref([
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
  },
])

// Filter and search functionality
const categories = ref([
  'All',
  'Machine Learning',
  'Blockchain',
  'IoT',
  'Quantum Computing',
  'Augmented Reality'
])
const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    // Filter by category
    const categoryMatch = selectedCategory.value === 'All' || project.category === selectedCategory.value
    
    // Filter by search query
    const searchMatch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                      project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    return categoryMatch && searchMatch
  })
})

const setCategory = (category: string) => {
  selectedCategory.value = category
}

onMounted(() => {
  // Header animation
  gsap.from('.projects-header h1', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  
  gsap.from('.projects-header p', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  })
  
  // Filter buttons animation
  gsap.from('.filter-buttons button', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.4,
    ease: 'power3.out'
  })
  
  // Search input animation
  gsap.from('.search-bar', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.6,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="projects-page">
    <!-- Header -->
    <section class="projects-header">
      <div class="container">
        <AnimatedHeading :level="1">Our Projects</AnimatedHeading>
        <p>Explore our innovative computer science projects showcasing cutting-edge technology and research</p>
      </div>
    </section>
    
    <!-- Filters -->
    <section class="filters-section">
      <div class="container">
        <div class="filters-container">
          <div class="filter-buttons">
            <button 
              v-for="category in categories" 
              :key="category" 
              @click="setCategory(category)"
              :class="{ active: selectedCategory === category }"
              class="filter-btn"
            >
              {{ category }}
            </button>
          </div>
          
          <div class="search-bar">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search projects..." 
              class="search-input"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="projects-grid-section section">
      <div class="container">
        <div v-if="filteredProjects.length > 0" class="projects-grid">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>
        
        <div v-else class="no-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button @click="searchQuery = ''; selectedCategory = 'All'" class="btn btn-primary">
            Reset Filters
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.projects-page {
  padding-top: 64px;
}

.projects-header {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-secondary));
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

.filters-section {
  background-color: var(--color-surface);
  padding: var(--space-4) 0;
  position: sticky;
  top: 64px;
  z-index: 10;
  box-shadow: var(--shadow-md);
}

.filters-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  background-color: transparent;
  
  &:hover {
    background-color: var(--color-surface-variant);
  }
  
  &.active {
    background-color: var(--color-primary);
    color: white;
  }
}

.search-bar {
  position: relative;
  width: 100%;
  max-width: 300px;
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    transition: border-color var(--transition-fast);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }
  
  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.no-results {
  text-align: center;
  padding: var(--space-6) 0;
  color: var(--color-text-secondary);
  
  svg {
    margin-bottom: var(--space-3);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-2);
    color: var(--color-text);
  }
  
  p {
    margin-bottom: var(--space-4);
  }
}
</style>