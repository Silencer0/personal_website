// Enhanced gallery wave effect
document.querySelectorAll('.gallery-container').forEach(container => {
    const gallery = container.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    
    // Set initial positions with wave pattern
    images.forEach((img, index) => {
      img.style.setProperty('--i', index);
      img.style.transform = `translateY(${Math.sin(index) * 10}px)`;
      
      // Add wave ripple effect on hover
      img.addEventListener('mouseenter', (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.classList.add('image-ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        img.parentNode.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
      });
    });
    
    // Continuous wave animation for gallery
    let currentPos = 0;
    setInterval(() => {
      images.forEach((img, index) => {
        const offset = Math.sin(currentPos + index * 0.5) * 10;
        img.style.transform = `translateY(${offset}px)`;
      });
      currentPos += 0.05;
    }, 50);
  });
  