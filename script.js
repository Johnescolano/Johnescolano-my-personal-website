// PERSONAL WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav a");

    // Sticky navbar + active link
    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("sticky", window.scrollY > 60);
        }

        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // Fade-in animation for sections
    const boxes = document.querySelectorAll(".content-box, .flex-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    boxes.forEach((box) => {
        box.classList.add("fade-in");
        observer.observe(box);
    });

    // Button hover animation
    const buttons = document.querySelectorAll(".cta-button");

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Automatic footer year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} John Escolano. All Rights Reserved.`;
    }
});