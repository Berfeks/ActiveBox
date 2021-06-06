$(function () {
// fixed header
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
    scrollPos = $(this).scrollTop();

    if( scrollPos > introH ) {
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }

 });



// scroll

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

let elementId = $(this).data('scroll');
let elementOffset  = $(elementId).offset().top;

  $("html, body").animate({ scrollTop : elementOffset -80}, "slow"
  
  );

   });


//    reviews


let slider = $("#reviewsSlider");


  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear'
  });

});