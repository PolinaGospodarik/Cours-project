import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'slick-carousel'; 

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnDotsHover:true,
    pauseOnFocus: true, 
    pauseOnDotsHover: true
});


 $(function() {
    $('.menu__burger').on('click', function() {
      
        $('.burger-icon').toggle();
        $('.close-icon').toggle();

        $('.menu__burger, .menu__list').toggleClass('active');
    });
});
