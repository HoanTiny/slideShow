const widthImg = 600;
const slides = document.querySelector(".slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotMain = document.querySelector(".dot-main");
const dots = document.querySelectorAll(".dot");
const listImg = document.querySelectorAll(".slide");
slides.style.width = `${widthImg * listImg.length}px`;
let slideIndex = 0;
makeSlideshow(slideIndex);
function transferSlides(n) {
    makeSlideshow((slideIndex += n));
}
function makeSlideshow(n) {
    if (n > listImg.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = listImg.length - 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides.style.transform = `translateX(-${widthImg * slideIndex}px)`;
    dots[slideIndex].className += " active";
    dots.forEach((dot, indexdot) => {
        dot.addEventListener("click", () => {
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[indexdot].className += " active";
            slides.style.transform = `translateX(-${widthImg * indexdot}px)`;
        });
    });
}
setInterval(() => {
    transferSlides(1);
}, 5000);
