
// SLICK - STORIES

$(document).ready(function(){
  $('.blocks-slide').slick({
    infinite: false,
    dots: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// ================================================================================

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
