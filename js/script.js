/// SMOOTH SCROLL
$(document).ready(function() {
    if ($(window).width() >= 767) {
        $("body").niceScroll({
            scrollspeed: 120
        });
    }
})
$(window).on('resize', function() {
    if ($(window).width() < 767) {
        $("body").getNiceScroll().remove();
    } else {
        $("body").niceScroll({
            scrollspeed: 70
        });
    }
});
$(".my-body").mouseover(function() {
  $(".my-body").getNiceScroll().resize();
});
$('.scrollTo').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 100
    }, 1000);
  }
});
jQuery(window).on('scroll', function(){
    jQuery('#section-1').waypoint(function() {
    		  jQuery('#main-navigation li a').removeClass('active');
    		  jQuery("#main-navigation a#home").addClass("active");
    }, { offset: 100 });
    jQuery('#section-2').waypoint(function() {
    		  jQuery('#main-navigation li a').removeClass('active');
    		  jQuery("#main-navigation a#about").addClass("active");
    }, { offset: 50 });
    jQuery('#section-3').waypoint(function() {
    		  jQuery('#main-navigation li a').removeClass('active');
    		  jQuery("#main-navigation a#services").addClass("active");
    }, { offset: 150 });
    jQuery('#section-4').waypoint(function() {
        jQuery('#main-navigation li a').removeClass('active');
        jQuery("#main-navigation a#portfolio").addClass("active");
    }, { offset: 150 });
    jQuery('#section-5').waypoint(function() {
        jQuery('#main-navigation li a').removeClass('active');
        jQuery("#main-navigation a#testimonials").addClass("active");
    }, { offset: 150 });
    jQuery('#section-6').waypoint(function() {
        jQuery('#main-navigation li a').removeClass('active');
        jQuery("#main-navigation a#contact").addClass("active");
    }, { offset: 300 });

})

// Sliders
$('.banner-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.testimonial-slider').slick({
    // fade:true,
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// Mobile Menu
$(document).ready(function(){
      $('.menu-bar a').on('click', function(){
          $('.header-nav').toggleClass('show-menu');
          $('body').toggleClass('open-menu');
      })
  });


 // SCROLL HEADER FIXED
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll >= 40) {
         $(".header").addClass("header-fixed animated fadeInDown");
     } else {
         $(".header").removeClass("header-fixed animated fadeInDown");
     }
 });
