AOS.init({
    duration: 1500,
    once:"true"
});

$(document).ready(function(){
    $('.second-section__accordeon_item').click(function() {
      $('.second-section__accordeon_item').not($(this)).find($('.second-section__accordeon_about')).slideUp(500);
      $(this).find('.second-section__accordeon_about').slideToggle(500);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).parent().find(".second-section__accordeon_item").removeClass("active");
        $(this).addClass("active");
      }
    });
    $(".sixth-section__cards-front_down-buttons_btn").click(function () {
      $(this).closest(".sixth-section__cards-item").addClass("active");
    });
    $(".sixth-section__cards-back_buttons-btn").click(function () {
      $(this).closest(".sixth-section__cards-item").removeClass("active");
    });
    

    $('.reviews__slick').slick({
      slidesToShow: 1,
      dots: true,
      speed: 1000,
      easing: 'ease',
    });

    let header = $('#header');
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
        header.addClass('header-fix');
      } else {
        header.removeClass('header-fix');
      }
    });

    $('.land-btn').click(function(){
      $(".corp").css("display", "none");
      $(".shop").css("display", "none");
      $(".land").css("display", "flex");
    });
    $('.corp-btn').click(function(){
      $(".land").css("display", "none");
      $(".shop").css("display", "none");
      $(".corp").css("display", "flex");
    });
    $('.shop-btn').click(function(){
      $(".corp").css("display", "none");
      $(".land").css("display", "none");
      $(".shop").css("display", "flex");
    });
    $('.all-btn').click(function(){
      $(".corp").css("display", "flex");
      $(".shop").css("display", "flex");
      $(".land").css("display", "flex");
    });

    $('.first-section__header-burger').click(function(event){
      $('.first-section__header-burger, .first-section__nav-bar').toggleClass('active');
    });
});

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 800,
  // Размер шага в пикселях 
  stepSize         : 85,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})

var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
      return false;
  });

