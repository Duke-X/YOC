document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Initially hide the main content
  mainContent.style.display = 'none';

  // Add a scroll event listener
  window.addEventListener('scroll', function () {
      // Check if the page has been scrolled down
      if (window.scrollY > 100) { // Added threshold for scrolling
          preloader.classList.add('pull-up'); // Add class to trigger the transition
          setTimeout(() => {
              mainContent.style.display = 'block'; // Show main content after preloader transition
              preloader.style.display = 'none'; // Hide preloader after transition
          }, 1000); // Delay to match CSS transition
      }
  });
});
