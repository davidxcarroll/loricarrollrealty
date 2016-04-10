// STICKY NAV - DEFAULT

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation-default").addClass("head-collapsed head-fixed").removeClass("head-default");
    $(".nav-cta").removeClass("hide");
  } else {
    $("#navigation-default").addClass("head-default").removeClass("head-collapsed head-fixed");
    $(".nav-cta").addClass("hide");
  }
});

// FAQ - LIST

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#navigation-default').height() + $('#hero').height()) {
    $("#faq-list").addClass("faq-list-fixed");
  } else {
    $("#faq-list").removeClass("faq-list-fixed");
  }
});

// ================================================================================

// HOME - MOBILE NAV EXPANDED

$(document).ready(function(){
  $("#mobile-nav-button").click(function(){
    $("#navigation-home").toggleClass("mobile-nav-expanded");
    if ($("#icon-nav-mobile").hasClass("icon-nav-hide")) {
      $(this).addClass("icon-nav-hide");
      $("#icon-nav-mobile-close").removeClass("icon-nav-hide");
    } else {
      $(this).removeClass("icon-nav-hide");
      $("#icon-nav-mobile-close").addClass("icon-nav-hide");
    }
  });
});

// DEFAULT - MOBILE NAV EXPANDED

$(document).ready(function(){
  $("#mobile-nav-button").click(function(){
    $("#navigation-default").toggleClass("mobile-nav-expanded");
    $("#icon-nav-mobile").toggleClass("icon-nav-hide");
    $("#icon-nav-mobile-close").toggleClass("icon-nav-hide");
  });
});

// ================================================================================

// LOAD RANDOM HERO IMAGES

// var images = ['bg-image-01.jpg',
//               'bg-image-07.jpg',
//               'bg-image-08.jpg'];
// $('<img src="_img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#bg-image-hero');

// FAQ - SCROLL TO AND CLICK HIGHLIGHT

$("#faq-general-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-general").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-general-button").addClass("selected");
});
$("#faq-about-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-about").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-about-button").addClass("selected");
});
$("#faq-services-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-services").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-services-button").addClass("selected");
});
$("#faq-equipment_chemicals-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-equipment_chemicals").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-equipment_chemicals-button").addClass("selected");
});
$("#faq-careers-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-careers").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-careers-button").addClass("selected");
});

// MOBILE MENU DISABLE SCROLL

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// if ($("#navigation").hasClass("mobile-nav-expanded")) {

//   function preventDefault(e) {
//     e = e || window.event;
//     if (e.preventDefault)
//       e.preventDefault();
//     e.returnValue = false;  
//   }

//   function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//       preventDefault(e);
//       return false;
//     }
//   }

//   function disableScroll() {
//     if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//     window.onwheel = preventDefault; // modern standard
//     window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//     window.ontouchmove  = preventDefault; // mobile
//     document.onkeydown  = preventDefaultForScrollKeys;
//   }

//   function enableScroll() {
//     if (window.removeEventListener)
//       window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null; 
//     window.onwheel = null; 
//     window.ontouchmove = null;  
//     document.onkeydown = null;  
//   }

// }
