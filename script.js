document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
  
    // Alternar menu hamburguer
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Dropdown funcional no mobile (clique)
    dropdownLinks.forEach(link => {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
  
          const parent = link.parentElement;
          const isActive = parent.classList.contains('active');
  
          // Fecha outros dropdowns
          document.querySelectorAll('.dropdown').forEach(item => {
            item.classList.remove('active');
          });
  
          // Toggle no atual
          if (!isActive) {
            parent.classList.add('active');
          }
        }
      });
    });
  
    // Carrossel (caso você use)
    const carousel = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel .prev');
    const nextBtn = document.querySelector('.carousel .next');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }
  
    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });
  
    prevBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
  
    carousel?.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    carousel?.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
      } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
      }
    });
  });
  