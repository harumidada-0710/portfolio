window.addEventListener("load", () => {
    const hero = document.querySelector(".fade-in");

    setTimeout(() => {
        hero.classList.add("show");
    }, 300);
});
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove("active");

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 4000);

const fadeElements = document.querySelectorAll(".fade-up");

function checkFade() {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

window.addEventListener("load", () => {
    const catchCopy = document.getElementById("catch-copy");

    setTimeout(() => {
        catchCopy.classList.add("show");
    }, 1500);
});