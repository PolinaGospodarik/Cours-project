// Импорт jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Импорт Slick Slider
import 'slick-carousel'; 

$('.slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    // autoplay:true,
    autoplaySpeed:3000,
    pauseOnDotsHover:true,
    pauseOnFocus: true, 
    pauseOnDotsHover: true
});


// $(function() {
//     $('.menu__burger').on('click', function() {
//        $('.menu__burger, .menu__list').toggleClass('active');
//     });
//  });

 $(function() {
    $('.menu__burger').on('click', function() {
        // Переключение видимости иконок
        $('.burger-icon').toggle();
        $('.close-icon').toggle();

        // Переключение класса 'active' для меню
        $('.menu__burger, .menu__list').toggleClass('active');
    });
});



// const slides = document.querySelectorAll('.slider-item');

// // Проходимся по слайдам и задаем им чередующиеся классы
// slides.forEach((slide, index) => {
//     if (index % 2 === 0) {
//         slide.classList.add('red-bg');
//     } else {
//         slide.classList.add('blue-bg');
//     }
// });
