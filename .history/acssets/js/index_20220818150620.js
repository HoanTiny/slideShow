window.addEventListener("load", addDot);
window.addEventListener("load", addDotFromLocalStorage);
const widthImg = 600;
const slides = document.querySelector(".slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotMain = document.querySelector(".dot-main");
const dots = document.querySelectorAll(".dot");
const img = document.querySelectorAll(".slide");
slides.style.width = `${widthImg * img.length}px`;
let index = 0;
let slideIndex = 1;
makeSlideshow(slideIndex);
console.log(dots);
// add dot auto
function addDot() {
    for (let i = 0; i < img.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotMain.appendChild(dot);
    }
    // save localStorage for later use
    localStorage.setItem("dot", JSON.stringify(dotMain.innerHTML));
}

// add dot from localStorage
function addDotFromLocalStorage() {
    dotMain.innerHTML = localStorage.getItem("dot");
}
// lưu dot lên bộ nhớ để khi click vào nó sẽ được active
//  run function addDot() when page load

function makeSlideshow(n) {
    if (n === 1) {
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
    } else if (n === -1) {
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
// setInterval(() => {
//     makeSlideshow(true);
// }, 5000);
