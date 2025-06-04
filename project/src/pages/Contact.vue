<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import AnimatedHeading from '../components/AnimatedHeading.vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  
  // Simulate API call
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    isSubmitted.value = true
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    errorMessage.value = 'There was an error submitting your message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Header animation
  gsap.from('.contact-header h1', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  
  gsap.from('.contact-header p', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  })
  
  // Info boxes animation
  gsap.from('.info-box', {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out'
  })
  
  // Form animation
  gsap.from('.contact-form', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="contact-page">
    <!-- Header -->
    <section class="contact-header">
      <div class="container">
        <AnimatedHeading :level="1">Contact Us</AnimatedHeading>
        <p>Get in touch for more information about our projects and the expo</p>
      </div>
    </section>
    
    <!-- Contact Info -->
    <section class="contact-info-section section">
      <div class="container">
        <div class="info-grid">
          <div class="info-box">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email</h3>
            <p><a href="mailto:ctrlsolutions@gmail.com">ctrlsolutions@gmail.com</a></p>
          </div>
          
          <div class="info-box">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Phone</h3>
            <p><a href="tel:09351196398">+63-935-119-6398</a></p>
          </div>
          
          <div class="info-box">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Location</h3>
            <p>University of the Philippines Cebu<br>Gorordo Avenue<br>Cebu City</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Form -->
    <section class="contact-form-section section">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <AnimatedHeading :level="2">Send Us a Message</AnimatedHeading>
            <p>Have questions about our projects? Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div v-if="isSubmitted" class="success-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Message Sent!</h3>
              <p>Thank you for contacting us. We'll get back to you shortly.</p>
              <button @click="isSubmitted = false" class="btn btn-primary">Send Another Message</button>
            </div>
            
            <div v-else class="form-fields">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required 
                  placeholder="Your name"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required 
                  placeholder="Your email address"
                />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  required 
                  placeholder="Message subject"
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  required 
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              
              <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">
                  <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  </svg>
                  Sending...
                </span>
                <span v-else>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-content">
          <h3>Visit Us</h3>
          <p>University of the Philippines Cebu<br>Gorordo Avenue<br>Cebu City</p>
          <a href="https://maps.google.com" target="_blank" class="btn btn-outline">Get Directions</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  padding-top: 64px;
}

.contact-header {
  background: linear-gradient(135deg, var(--color-accent-dark), var(--color-primary));
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

.contact-info-section {
  padding: var(--space-6) 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
  justify-items: center;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.info-box {
  width: 100%;
  max-width: 350px;
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .info-icon {
    margin: 0 auto var(--space-2);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 102, 204, 0.1);
    border-radius: 50%;
    color: var(--color-primary);
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-2);
    text-align: center;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.6;
    text-align: center;
    
    a {
      color: var(--color-primary);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.contact-form-section {
  background-color: var(--color-surface);
  padding: var(--space-6) 0;
}

.form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.form-header {
  text-align: center;
  margin-bottom: var(--space-4);
  
  h2 {
    margin-bottom: var(--space-2);
  }
  
  p {
    color: var(--color-text-secondary);
  }
}

.contact-form {
  background-color: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-md);
}

.form-fields {
  display: grid;
  gap: var(--space-3);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  
  label {
    font-weight: 500;
    font-size: 0.95rem;
  }
  
  input, textarea {
    padding: 0.75rem 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    font-family: var(--font-family);
    transition: border-color var(--transition-fast);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }
}

.success-message {
  text-align: center;
  padding: var(--space-4) 0;
  
  svg {
    color: var(--color-success);
    width: 48px;
    height: 48px;
    margin-bottom: var(--space-2);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-2);
  }
  
  p {
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
  }
}

.error-message {
  color: var(--color-error);
  padding: var(--space-1) 0;
  text-align: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  
  &-primary {
    background-color: var(--color-primary);
    color: white;
    
    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
  
  &-outline {
    background-color: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
    
    &:hover {
      background-color: rgba(0, 102, 204, 0.1);
    }
  }
}

.spinner {
  animation: rotate 2s linear infinite;
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  vertical-align: middle;
  
  .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.map-section {
  height: 400px;
  
  .map-placeholder {
    width: 100%;
    height: 100%;
    background-image: url('https://images.pexels.com/photos/2906882/pexels-photo-2906882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  
  .map-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    text-align: center;
    max-width: 300px;
    box-shadow: var(--shadow-lg);
    color: black;
    
    h3 {
      font-size: 1.25rem;
      margin-bottom: var(--space-2);
    }
    
    p {
      color: black;
      margin-bottom: var(--space-3);
      line-height: 1.6;
    }
  }
}

.section {
  padding: var(--space-6) 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}
</style>