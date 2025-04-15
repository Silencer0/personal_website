// Enhanced card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    // Add wave pattern overlay to cards
    cards.forEach((card, index) => {
      const waveOverlay = document.createElement('div');
      waveOverlay.classList.add('card-wave-overlay');
      card.appendChild(waveOverlay);
      
      // Set unique animation delay for each card
      card.style.animationDelay = `${index * 0.2}s`;
      
      // Initial setup with wave-like positioning
      card.style.transform = `
        translateY(${index * -0.5}px) 
        translateZ(${index}px) 
        rotate(${Math.sin(index) * 2}deg)
      `;
    });
  
    // Enhanced scroll animation with wave motion
    window.addEventListener('scroll', () => {
      const container = document.querySelector('.sticky-container');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
  
      cards.forEach((card, index) => {
        const delay = index * 0.1;
        const rotate = 180 * Math.max(0, Math.min(1, (progress - delay) / 0.5));
        
        // Add wave-like motion
        const waveOffset = Math.sin(progress * Math.PI * 2 + index) * 15;
        
        card.style.transform = `
          translateY(${-60 * progress + waveOffset}%) 
          rotateY(${rotate}deg)
          rotateZ(${Math.sin(progress * Math.PI + index) * 3}deg)
        `;
      });
    });
  });
  