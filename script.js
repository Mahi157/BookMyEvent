//Location

const locationSelector =
document.querySelector(".location-selector");

const locationPopup =
document.querySelector(".location-popup");

const cityText =
document.getElementById("selected-city");

locationSelector.addEventListener("click", (e) => {


e.stopPropagation();

locationPopup.classList.toggle("show");


});

document.querySelectorAll(".location-popup button")
.forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    cityText.textContent =
      btn.textContent;

    locationPopup.classList.remove("show");

  });

});

document.addEventListener("click", () => {


locationPopup.classList.remove("show");


});

// Hamburger Menu

const menuBtn =
document.getElementById("menuBtn");

const sideMenu =
document.getElementById("sideMenu");

menuBtn.addEventListener("click", (e) => {

e.stopPropagation();

sideMenu.classList.toggle("show");


});

document.addEventListener("click", () => {


sideMenu.classList.remove("show");


});

sideMenu.addEventListener("click", (e) => {


e.stopPropagation();


});

// HERO CAROUSEL 

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateCarousel() {

track.style.transform =
  `translateX(-${currentSlide * 100}%)`;

dots.forEach(dot =>
  dot.classList.remove("active")
);

if (dots[currentSlide]) {
  dots[currentSlide].classList.add("active");
}
}

document.querySelector(".hero-right")
?.addEventListener("click", () => {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateCarousel();
});

document.querySelector(".hero-left")
?.addEventListener("click", () => {

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateCarousel();
});

// Dot Navigation

dots.forEach((dot, index) => {

dot.addEventListener("click", () => {

  currentSlide = index;
  updateCarousel();

});

});

// Auto Slide

setInterval(() => {

currentSlide++;

if (currentSlide >= slides.length) {
  currentSlide = 0;
}

updateCarousel();

}, 4000);


// CARD SCROLLERS 
querySelectorAll(".category")
.forEach(category => {

  const row =
    category.querySelector(".card-row");

  const leftBtn =
    category.querySelector(".card-left");

  const rightBtn =
    category.querySelector(".card-right");

  if (!row || !leftBtn || !rightBtn) return;

  function updateButtons() {

    leftBtn.style.display =
      row.scrollLeft <= 0
        ? "none"
        : "flex";

    rightBtn.style.display =
      row.scrollLeft + row.clientWidth >=
        row.scrollWidth - 10
        ? "none"
        : "flex";
  }

  updateButtons();

  rightBtn.addEventListener("click", () => {

    row.scrollBy({
      left: 1000,
      behavior: "smooth"
    });

    setTimeout(updateButtons, 500);

  });

  leftBtn.addEventListener("click", () => {

    row.scrollBy({
      left: -1000,
      behavior: "smooth"
    });

    setTimeout(updateButtons, 500);

  });

  row.addEventListener(
    "scroll",
    updateButtons
  );

});


// SEARCH REDIRECT 

const searchInput =
document.querySelector(".nav-search-input");

if (searchInput) {

searchInput.addEventListener("focus", () => {

  window.location.href =
    "search.html";

});

}


// Sign in Redirect

const signinBtn =
document.querySelector(".nav-accounts-signin");

if (signinBtn) {

signinBtn.addEventListener("click", () => {

  window.location.href =
    "signin.html";

});

}
