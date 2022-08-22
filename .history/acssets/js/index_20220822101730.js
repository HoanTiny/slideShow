const imgs = [
    "./acssets/img/logo.jpg",
    "./acssets/img/manU.jpg",
    "./acssets/img/mU.jpg",
    "./acssets/img/Jennie.jpg",
];
const widthImg = 600;
const slides = document.querySelector(".slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotMain = document.querySelector(".dot-main");
// slides.style.width = `${widthImg * listImg.length}px`;
let slideIndex = 0;
render();
makeSlideshow(slideIndex);
// clear interval when click btn left and run again

leftBtn.addEventListener("click", () => {
    transferSlides(-1);
    clearInterval(autoSlide);
    autoSlide();
});
rightBtn.addEventListener("click", () => {
    transferSlides(1);
    clearInterval(autoSlide);
});
function render() {
    const htmls = imgs.map((img) => {
        console.log(img);
        return `
                <img src="${img}" alt="" class="slide" />
                        `;
    });
    slides.innerHTML = htmls.join("");
    imgs.forEach((img) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotMain.appendChild(dot);
    });
}
function transferSlides(n) {
    makeSlideshow((slideIndex += n));
}
function makeSlideshow(n) {
    const dots = document.querySelectorAll(".dot");
    const listImg = document.querySelectorAll(".slide");
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
            slideIndex = indexdot;
        });
    });
}
var autoSlide = setInterval(transferSlides(1), 5000);
