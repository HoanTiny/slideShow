const widthImg = 600;
const slides = document.querySelector(".slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotMain = document.querySelector(".dot-main");
const dots = document.querySelectorAll(".dot");
const img = document.querySelectorAll(".slide");
slides.style.width = `${widthImg * img.length}px`;
let sildeIndex = 0;
let currentIndex = 0;
makeSlideshow(currentIndex);

function makeSlideshow(n) {
    if (n === 1) {
        if (sildeIndex >= img.length - 1) {
            sildeIndex = 0;
        } else {
            sildeIndex++;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[sildeIndex].className += " active";
        slides.style.transform = `translateX(-${widthImg * sildeIndex}px)`;
    } else if (n === -1) {
        if (sildeIndex <= 0) {
            sildeIndex = img.length - 1;
        } else {
            sildeIndex--;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[sildeIndex].className += " active";
        slides.style.transform = `translateX(-${widthImg * sildeIndex}px)`;
    }
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
// setInterval(() => {
//     makeSlideshow(true);
// }, 5000);
