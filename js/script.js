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
});