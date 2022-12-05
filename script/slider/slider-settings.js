
$(document).ready(function(){
$('.top-banner-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 150,
    touchThreshold: 150,
    loop: true,
    arrows: true,
    waitForAnimate:true,
    swipeToSlide: true,
    swipe: true,
    prevArrow: '<div class="top-button-prev"></div>',
    nextArrow: '<div class="top-button-next"><i class="bi bi-chevron-right"></i></div>'

    
});
});