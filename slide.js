var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    direction='';
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
