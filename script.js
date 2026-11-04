
/* =========================================
   ANSHIKA PORTFOLIO - JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // 1. MOBILE NAVIGATION

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-links a");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("open")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            const icon = menuBtn.querySelector("i");
            icon.classList.replace("fa-xmark", "fa-bars");
        });
    });


    // 2. TYPING TEXT ANIMATION

    const typingElement = document.querySelector(".typing-text");

    const words = [
        "modern websites",
        "web applications",
        "creative experiences",
        "digital solutions"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentWord = words[wordIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentWord.substring(0, charIndex);

        let speed = deleting ? 45 : 90;

        if (!deleting && charIndex === currentWord.length) {
            deleting = true;
            speed = 1300;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    if (typingElement) {
        typingElement.textContent = "";
        typeEffect();
    }


    // 3. SCROLL REVEAL ANIMATION

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }


    // 4. ACTIVE NAVIGATION ON SCROLL

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveLink() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // 5. BACK TO TOP BUTTON

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 450) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 6. PROJECT CARD HOVER EFFECT

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.setProperty("--hover-opacity", "1");
        });

        card.addEventListener("mouseleave", () => {
            card.style.setProperty("--hover-opacity", "0");
        });

    });


    // 7. IMAGE FALLBACK

    const projectImages = document.querySelectorAll(".project-image img");

    projectImages.forEach(img => {

        img.addEventListener("error", () => {

            img.style.display = "none";

            const imageContainer = img.parentElement;

            imageContainer.style.background =
                "linear-gradient(135deg, #2a1d3a, #7135b8)";

        });

    });


    // 8. CONSOLE MESSAGE

    console.log(
        "%c Welcome to Anshika's Portfolio! ",
        "background:#a855f7;color:white;padding:10px;border-radius:5px;font-size:14px;"
    );

});
