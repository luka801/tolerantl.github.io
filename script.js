const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const actionButton = document.getElementById("actionButton");
const toast = document.getElementById("toast");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
    }

    if (header) {
        header.classList.toggle("scrolled", scrollTop > 50);
    }
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", menuToggle.classList.contains("active") ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => revealObserver.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("visible"));
}

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if (hero && window.scrollY < window.innerHeight) {
        hero.style.backgroundPositionY = `${window.scrollY * 0.25}px`;
    }
});

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(section => sectionObserver.observe(section));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.querySelectorAll(".value-card").forEach(card => {
    card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        if (!centerX || !centerY) return;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

let toastTimeout;

if (actionButton && toast) {
    actionButton.addEventListener("click", () => {
        toast.classList.add("show");
        window.clearTimeout(toastTimeout);
        toastTimeout = window.setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    });
}

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    document.querySelectorAll(".reveal").forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) element.classList.add("visible");
    });
});
