let posterSwiper = new Swiper(".swiper.is_poster", {
      effect: "cards",
      grabCursor: true,
      loop: true,
      keyboard: true,
      navigation: {
        nextEl: ".arrow.is-right",
        prevEl: ".arrow.is-left"
      }
    });

let contentSwiper = new Swiper(".swiper.is_content", {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      followFinger: false,
      grabCursor: true,
      loop: true
    });

posterSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = posterSwiper;
