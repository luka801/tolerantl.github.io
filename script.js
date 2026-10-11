// const header = document.getElementById("header");
// const scrollProgress = document.getElementById("scrollProgress");
// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");
// const actionButton = document.getElementById("actionButton");
// const toast = document.getElementById("toast");

// window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollY;
//     const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const progress = (scrollTop / documentHeight) * 100;

//     scrollProgress.style.width = `${progress}%`;

//     if (scrollTop > 50) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//     menuToggle.classList.toggle("active");
// });

// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//         navLinks.classList.remove("open");
//         menuToggle.classList.remove("active");
//     });
// });

// const revealElements = document.querySelectorAll(".reveal");

// const revealObserver = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 revealObserver.unobserve(entry.target);
//             }
//         });
//     },
//     {
//         threshold: 0.12
//     }
// );

// revealElements.forEach(element => {
//     revealObserver.observe(element);
// });

// const hero = document.querySelector(".hero");

// window.addEventListener("scroll", () => {
//     if (!hero) {
//         return;
//     }

//     const scrollValue = window.scrollY;

//     if (scrollValue < window.innerHeight) {
//         hero.style.backgroundPositionY = `${scrollValue * 0.25}px`;
//     }
// });

// const sections = document.querySelectorAll("section[id]");
// const navigationLinks = document.querySelectorAll(".nav-links a");

// const sectionObserver = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 navigationLinks.forEach(link => {
//                     link.classList.remove("active");

//                     if (link.getAttribute("href") === `#${entry.target.id}`) {
//                         link.classList.add("active");
//                     }
//                 });
//             }
//         });
//     },
//     {
//         threshold: 0.35
//     }
// );

// sections.forEach(section => {
//     sectionObserver.observe(section);
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", event => {
//         const targetId = anchor.getAttribute("href");

//         if (targetId === "#") {
//             return;
//         }

//         const target = document.querySelector(targetId);

//         if (!target) {
//             return;
//         }

//         event.preventDefault();

//         target.scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// });

// const cards = document.querySelectorAll(".value-card");

// cards.forEach(card => {
//     card.addEventListener("mousemove", event => {
//         const rect = card.getBoundingClientRect();

//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;

//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;

//         const rotateX = ((y - centerY) / centerY) * -4;
//         const rotateY = ((x - centerX) / centerX) * 4;

//         card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
//     });

//     card.addEventListener("mouseleave", () => {
//         card.style.transform = "";
//     });
// });

// actionButton.addEventListener("click", () => {
//     toast.classList.add("show");

//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 4000);
// });

// window.addEventListener("load", () => {
//     document.body.classList.add("loaded");
// });





































const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const actionButton = document.getElementById("actionButton");
const toast = document.getElementById("toast");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = `${progress}%`;

    if (scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if (!hero) {
        return;
    }

    const scrollValue = window.scrollY;

    if (scrollValue < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollValue * 0.25}px`;
    }
});

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.35
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
        const targetId = anchor.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const cards = document.querySelectorAll(".value-card");

cards.forEach(card => {
    card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

actionButton.addEventListener("click", () => {
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});