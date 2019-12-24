$(document).ready(function() {
    "use strict";

    $('.box06_list ul').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse: false,
        margin: 0,
        centerMode: true,
        centerPadding : '50px',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
              }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"><a><img src="./images/ic_prev.jpg"></a></button>',
        nextArrow: '<button type="button" class="slick-next"><a><img src="./images/ic_next.jpg"></a></button>'
    });

    AOS.init({
        duration: 1000,
        once: true,
        disable : 'mobile',
    });
});

$(window).bind('load',function(){
  "use strict";
  $(function(){
    $('a[href^="#"]').click(function(){
      if ($($(this).attr('href') ).length ) {
        var p = $( $(this).attr('href') ).offset();
        if($(window).width() > 768){
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
        else {
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
      }
      return false;
    });
  });
});
