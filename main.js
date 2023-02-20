// Navigation section
const navBar = document.querySelector("#nav_bar");
const openNavBtn = document.querySelector("#open_nav_btn");
const closeNavBtn = document.querySelector("#close_nav_btn");

const openNav = () => {
  navBar.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  navBar.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

//close nav menu when menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav_bar li a").forEach((navBar) => {
    navBar.addEventListener("click", () => {
      closeNav();
    });
  });
}

// Reviews section(swiper js)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, //when window is < 600px(small screen)
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive Breakpoints
  breakpoints: {
    //when window is >= 600px(medium screen)
    600: {
      slidesPerView: 2,
    },
    //when window is >= 1024px(large screen)
    1024: {
      slidesPerView: 3,
    },
  },
});
