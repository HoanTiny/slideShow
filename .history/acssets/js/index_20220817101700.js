const widthImg = 600;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const img = document.querySelectorAll(".slide");
slides.style.width = `${widthImg * img.length}px`;
let index = 0;
let slideIndex = 1;
makeSlideshow(slideIndex);

function makeSlideshow(n) {
    if (n === true) {
        if (index >= img.length - 1) {
            index = 0;
        } else {
            index++;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[index].className += " active";
        slides.style.transform = `translateX(-${widthImg * index}px)`;
    } else {
        if (index <= 0) {
            index = img.length - 1;
        } else {
            index--;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[index].className += " active";
        slides.style.transform = `translateX(-${widthImg * index}px)`;
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
setInterval(() => {
    makeSlideshow(true);
}, 5000);