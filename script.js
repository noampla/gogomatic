document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
          ? 'Light Mode' 
          : 'Dark Mode';
      });
    }
  
    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Flip Cards
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  
    // Audio Toggle
    const audioToggle = document.getElementById('audio-toggle');
    const bgAudio = document.getElementById('bg-audio');
    if (audioToggle && bgAudio) {
      audioToggle.addEventListener('click', () => {
        if (bgAudio.paused) {
          bgAudio.volume = 0.2;
          bgAudio.play();
          audioToggle.textContent = 'Audio On';
        } else {
          bgAudio.pause();
          audioToggle.textContent = 'Enable Audio';
        }
      });
    }
  });
  
  // Grab all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    // If it's already open, close it
    if (item.classList.contains('open')) {
      item.classList.remove('open');
    } else {
      // Close any other open items first (optional)
      accordionItems.forEach(i => i.classList.remove('open'));
      // Then open the current one
      item.classList.add('open');
    }
  });
});
