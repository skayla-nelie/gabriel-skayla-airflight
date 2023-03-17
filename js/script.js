var swiperlp = new Swiper('.swiper-screenshots', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

 



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
}); 