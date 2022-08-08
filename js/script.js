const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  spaceBetween: 5,

  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// swiper.slideNext();

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const navLinkMobile = document.getElementsByClassName("nav-links-mobile")[0];

hamburgerMenu.addEventListener("click", () => {
  navLinkMobile.classList.toggle("nav-show");
  if (navLinkMobile.classList.contains("nav-show") === true) {
    disableScrolling();
    hamburgerMenu.classList.add("hamburger-menu-click");
  } else {
    enableScrolling();
    hamburgerMenu.classList.remove("hamburger-menu-click");
  }
});

let scrollX = window.scrollX;
let scrollY = window.scrollY;

function disableScrolling() {
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
function enableScrolling() {
  window.onscroll = function () {};
}

activeSlideImg();

function activeSlideImg(activeSlide = 0) {
  const slides = document.querySelectorAll(".panel");

  slides[activeSlide].classList.add("panel-active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();

      slide.classList.add("panel-active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("panel-active");
    });
  }
}
