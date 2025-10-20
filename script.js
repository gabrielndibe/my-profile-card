document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time-value"]');
    if (timeElement) {
      timeElement.textContent = Date.now();
    } else if (window.location.pathname.includes('index.html')) {
      console.error('Current time element not found');
    }
  
    
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
  
        // Reset error messages
        document.querySelectorAll('.error').forEach((el) => (el.textContent = ''));
        document.querySelector('.success').textContent = '';
  
       
        const name = document.getElementById('name').value.trim();
        if (!name) {
          document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Name is required';
          isValid = false;
        }
  
        
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Email is required';
          isValid = false;
        } else if (!emailRegex.test(email)) {
          document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Invalid email format';
          isValid = false;
        }
  
      
        const message = document.getElementById('message').value.trim();
        if (!message) {
          document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message is required';
          isValid = false;
        }
  
       
        if (isValid) {
          document.querySelector('[data-testid="test-contact-success"]').textContent = 'Form submitted successfully!';
          form.reset();
        }
      });
    }
  });
