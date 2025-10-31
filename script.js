// Utility Functions
function formatDateRange(startDate, endDate) {
  if (!endDate || endDate === null || endDate === 'Present') {
    return `${startDate} – Present`;
  }
  return `${startDate} – ${endDate}`;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateString(str, min = 1, max = 1000) {
  const trimmed = str?.trim() || '';
  if (trimmed.length < min || trimmed.length > max) {
    return null;
  }
  return trimmed;
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Navbar Scroll Effect
(function() {
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on page load
})();

// Scroll to Top Button
(function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', toggleScrollButton);
  toggleScrollButton(); // Check on page load
})();

// Contact Form Validation and Submission
(function() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const companyInput = document.getElementById('company'); // Honeypot
  const resetBtn = document.getElementById('reset-btn');
  const msgCountSpan = document.getElementById('msg-count');
  const nameHint = document.getElementById('name-hint');
  const emailHint = document.getElementById('email-hint');
  
  let isSubmitting = false;
  
  // Character counter for message
  function updateMessageCount() {
    const length = messageInput.value.length;
    msgCountSpan.textContent = `${length}/2000`;
  }
  
  messageInput.addEventListener('input', updateMessageCount);
  updateMessageCount(); // Initialize
  
  // Clear errors on input
  function clearError(fieldId, hintElement) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.setAttribute('aria-invalid', 'false');
      if (hintElement) {
        hintElement.classList.remove('error');
      }
    }
  }
  
  nameInput.addEventListener('input', function() {
    clearError('name', nameHint);
  });
  
  emailInput.addEventListener('input', function() {
    clearError('email', emailHint);
  });
  
  messageInput.addEventListener('input', function() {
    clearError('message', null);
  });
  
  // Set invalid state helper
  function setInvalid(fieldId, invalid, message, hintElement) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
      if (hintElement) {
        if (invalid) {
          hintElement.textContent = message;
          hintElement.classList.add('error');
        } else {
          hintElement.classList.remove('error');
          // Reset to default message
          if (fieldId === 'name') {
            hintElement.textContent = 'Max 80 characters.';
          } else if (fieldId === 'email') {
            hintElement.textContent = "I'll only use this to reply to you.";
          }
        }
      }
    }
  }
  
  // Validate form
  function validateForm() {
    let hasErrors = false;
    
    // Validate name
    if (!nameInput.value.trim()) {
      setInvalid('name', true, 'Please enter your name.', nameHint);
      hasErrors = true;
    } else {
      const name = validateString(nameInput.value, 2, 80);
      if (!name) {
        setInvalid('name', true, 'Name must be between 2 and 80 characters.', nameHint);
        hasErrors = true;
      } else {
        setInvalid('name', false, '', nameHint);
      }
    }
    
    // Validate email
    if (!isValidEmail(emailInput.value)) {
      setInvalid('email', true, 'Please enter a valid email.', emailHint);
      hasErrors = true;
    } else {
      setInvalid('email', false, '', emailHint);
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
      setInvalid('message', true, 'Please write a short message.', null);
      hasErrors = true;
    } else {
      const message = validateString(messageInput.value, 10, 2000);
      if (!message) {
        setInvalid('message', true, 'Message must be between 10 and 2000 characters.', null);
        hasErrors = true;
      } else {
        setInvalid('message', false, '', null);
      }
    }
    
    return !hasErrors;
  }
  
  // Reset form
  function resetForm() {
    form.reset();
    updateMessageCount();
    
    // Clear errors
    ['name', 'email', 'message'].forEach(function(fieldId) {
      const field = document.getElementById(fieldId);
      if (field) {
        field.setAttribute('aria-invalid', 'false');
      }
    });
    
    nameHint.classList.remove('error');
    nameHint.textContent = 'Max 80 characters.';
    emailHint.classList.remove('error');
    emailHint.textContent = "I'll only use this to reply to you.";
    
    // Clear status message
    const statusEl = document.querySelector('.form-status');
    if (statusEl) {
      statusEl.textContent = '';
    }
  }
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Honeypot check
    if (companyInput.value) {
      alert('Spam detected');
      return;
    }
    
    if (!validateForm()) {
      alert('Please fix the errors in the form');
      return;
    }
    
    if (isSubmitting) {
      return;
    }
    
    isSubmitting = true;
    
    // Update submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      // Show success message
      const statusEl = document.querySelector('.form-status');
      if (statusEl) {
        statusEl.textContent = 'Thanks! Your message has been prepared. Use the Email button on the left to contact me directly.';
        statusEl.setAttribute('role', 'status');
        statusEl.setAttribute('aria-live', 'polite');
      }
      
      // Create mailto link with pre-filled message
      const mailtoLink = `mailto:syal0005@algonquinlive.com?subject=Contact from Portfolio&body=Name: ${encodeURIComponent(nameInput.value.trim())}%0AEmail: ${encodeURIComponent(emailInput.value.trim())}%0A%0AMessage:%0A${encodeURIComponent(messageInput.value.trim())}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form after a delay
      setTimeout(function() {
        resetForm();
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1000);
      
    } catch (error) {
      alert('An error occurred. Please try again.');
      isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
  
  // Handle reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      resetForm();
    });
  }
})();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add hover effects to links in about section
document.addEventListener('DOMContentLoaded', function() {
  const aboutLinks = document.querySelectorAll('.about-info-grid a');
  aboutLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#00ffff';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = '#ffffff';
    });
  });
});
