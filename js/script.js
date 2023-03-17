<< << << < HEAD
var swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}); ===
=== =
const swiper = new Swiper(".swiper-filters", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 10,
    speed: 600,
});

const swipers = new Swiper(".swiper-featured-artworks", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: -800,
    speed: 600,
}); >>>
>>> > b72ee4673cb5d85156a8cd998457fa69dfc804ae