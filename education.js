// Enhanced education.js
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Add wave indicators to timeline
    timelineItems.forEach((item, index) => {
      const waveIndicator = document.createElement('div');
      waveIndicator.classList.add('timeline-wave-indicator');
      item.appendChild(waveIndicator);
      
      // Set animation delay based on position
      item.style.setProperty('--wave-delay', `${index * 0.2}s`);
    });
  
    const options = {
      root: null,
      threshold: 0.2,
      rootMargin: '-50px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // Only animate once
          
          // Add ripple effect when content becomes visible
          const ripple = document.createElement('div');
          ripple.classList.add('timeline-ripple');
          entry.target.querySelector('.timeline-content').appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 1000);
        }
      });
    }, options);
  
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
