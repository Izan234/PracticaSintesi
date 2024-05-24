document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.navbar-item');
  
  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }
  
  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});


$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
  