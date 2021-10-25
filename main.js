if (document.querySelector('.swiper') !== null) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      750: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      }
    }
  });
}