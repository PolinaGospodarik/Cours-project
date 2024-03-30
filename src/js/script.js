// Импорт jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Импорт Slick Slider
import 'slick-carousel'; 


$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3000
});
