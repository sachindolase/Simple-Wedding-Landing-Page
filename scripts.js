// scripts.js

// Change navbar background color on scroll
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
  } else {
      $('.navbar').removeClass('scrolled');
  }
});

// Smooth scroll for navbar links
$(document).ready(function(){
  $(".nav-link").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top - 70
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
});
