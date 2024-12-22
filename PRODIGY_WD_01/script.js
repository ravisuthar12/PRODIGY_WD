document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    // Change navbar background color on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    });
  
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll("#navbar a");
    navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f0a500";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "white";
      });
    });
  });
  
