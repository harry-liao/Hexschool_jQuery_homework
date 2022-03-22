$(document).ready(function () {
  
  //toggle menu
  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).siblings().slideToggle();

    $(this).parent().siblings().find('.dropdown-open').slideUp();
  });

  //swiper
  const swiper = new Swiper('.banner', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'cube',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  //lightbox
  lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true,
        'positionFromTop': 250
      });

  $('.top').click(function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
  });
});
