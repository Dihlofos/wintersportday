"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();

(function () {
  const pins = document.querySelectorAll('.js-pin');
  const vw = window.innerWidth;

  pins.forEach((pin)=>{
    if (!isTouchDevice() || vw > 1023) {
      pin.addEventListener('mouseover', () => {
        toggleOpen(pin);
      })

      pin.addEventListener('mouseout', () => {
        pin.classList.toggle('open');
      })
    } else {
      pin.addEventListener('click', () => {
        toggleOpen(pin)
        clearAllExcept(pin);

      })
    }

  })

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
  }

  function toggleOpen(pin)  {
    pin.classList.toggle('open');

      if (pin.dataset.pin === '4' && vw < 768) {
        const pin6 = document.querySelector('[data-pin="6"]');
        if (pin6.classList.contains('open')) {
          pin6.classList.remove('open')
        }
      }
  }

  function clearAllExcept(onePin) {
    pins.forEach((pin)=>{
      if (onePin.dataset.pin === pin.dataset.pin) {
        return;
      }
      pin.classList.remove('open')
    })

  }


})();

"use strict";
(function () {
  new Swiper(".js-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },

      1025: {
        slidesPerView: 'auto',
        spaceBetween: 43,
      },
    },
  });

  if (isTouchDevice()) {
    const slides = document.querySelectorAll('.js-slider .swiper-slide');
    slides.forEach((slide)=>{
      slide.addEventListener('click', ()=>{
        slide.classList.toggle('hover');
      })
    })

} else {
    return;
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}


})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

(function () {
  document.body.addEventListener("touchstart", function () {
    var video = document.querySelector('video');
    video.play();
  },{ once: true });
})();
