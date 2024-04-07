// Ensure GSAP plugins are registered at the beginning
gsap.registerPlugin(ScrollTrigger);

// Fade in body content on page load
gsap.from("body", { duration: 1.5, opacity: 0 });

// Smooth scrolling w/ anchor links
document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.getAttribute("href");
      let targetElement = document.querySelector(href);
      gsap.to(window, {duration: 1, scrollTo: {y: targetElement, offsetY: 60}});
    });
  });
});

