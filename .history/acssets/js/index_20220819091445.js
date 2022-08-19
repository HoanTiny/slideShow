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
dots[slideIndex].className += " active";
function plusSlides(n) {
    makeSlideshow((slideIndex += n));
}
function makeSlideshow(n) {
    // if (n === 1) {
    //     if (sildeIndex >= listImg.length - 1) {
    //         sildeIndex = 0;
    //     } else {
    //         sildeIndex++;
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     dots[sildeIndex].className += " active";
    //     slides.style.transform = `translateX(-${widthImg * sildeIndex}px)`;
    // } else if (n === -1) {
    //     if (sildeIndex <= 0) {
    //         sildeIndex = listImg.length - 1;
    //     } else {
    //         sildeIndex--;
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     dots[sildeIndex].className += " active";
    //     slides.style.transform = `translateX(-${widthImg * sildeIndex}px)`;
    // }
    if (n > listImg.length - 1) {
        slideIndex = 0;
    }
    if (n < 1) {
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
// setInterval(() => {
//     makeSlideshow(1);
// }, 5000);