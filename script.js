// =========================================================
// ESLAM EL HOSSENY PORTFOLIO — MAIN JAVASCRIPT
// =========================================================


// =========================================================
// CURSOR GLOW
// =========================================================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-stats, .skill-card, .project-card, .contact-container"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}


// Run immediately
revealOnScroll();

// Run while scrolling
window.addEventListener("scroll", revealOnScroll);


// =========================================================
// BACK TO TOP
// =========================================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================================
// PAGE LOADER
// =========================================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1800);

});


// =========================================================
// PROJECT CARD MOUSE EFFECT
// =========================================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) rotateX(0) rotateY(0)";

    });

});


// =========================================================
// NAVIGATION ACTIVE EFFECT
// =========================================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active-link");
        });

        link.classList.add("active-link");

    });

});