// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
    
    // Add an event listener for scroll
    window.addEventListener("scroll", function () {
      // Get current scroll position
      let scrollPosition = window.scrollY;

      // If user scrolls down more than 50px, start the animation to move preloader
      if (scrollPosition > 50) {
        preloader.style.transform = `translateY(${-scrollPosition}px)`;
      }

      // If preloader has scrolled off the screen, show main content
      if (scrollPosition >= window.innerHeight) {
        preloader.classList.add("pull-up");
        mainContent.classList.add("show-content"); // Reveal main content
      }
    });
  });