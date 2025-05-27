gsap.registerPlugin(
    ScrambleTextPlugin,
    ScrollTrigger,
    ScrollSmoother,
    MorphSVGPlugin,
    DrawSVGPlugin
);

// gsap.fromTo(".rotate-shape-2",
//     {rotation: 0},
//     {rotation: 360, duration: 5, ease: "none"},
// );

// gsap.to(".rotate-shape-2", {
//    rotation: 360,
//    duration: 5,
//    ease: "linear",
//    repeat: -1
// });

// Бесконечная прокрутка без рывков
gsap.to(".rotate-shape-2", {
    keyframes: [
        {rotation: 0, duration: 0, opacity: 0},
        {rotation: 360, duration: 2, opacity: 1},
        {rotation: 0, duration: 2, ease: "linear", opacity: 0}
    ],
    repeat: -1
});

gsap.to(".rotate-text",
    {
        keyframes: [
            {rotation: 0, duration: 0},
            {rotation: -360, duration: 20},
            {rotation: 0, duration: 1, ease: "none"}
        ],
        repeat: -1,
    }
);

//use the defaults
// gsap.to(".title-part-2", {duration: 10, scrambleText: "THIS IS NEW TEXT"}); // изменение текста на указанные новый

gsap.to(".title-part-2", {
    duration: 3,
    scrambleText: {
        text: "Full-Stack",
        chars: "0101010011",
        revealDelay: 0.5,
        speed: 0.3,
    }
});

// Стилизация карусели с преимуществами

const createClassSelectArray = (className) => {
    return gsap.utils.toArray(className);
}

const imagesArray = createClassSelectArray(".select-thumb img");
const counterSixArray = createClassSelectArray(".single-counter-inner");

// imagesArray.forEach((img, index) => {
//     let fromX = index % 2 === 0 ? -100 : 100;
//     gsap.from(img, {
//         scrollTrigger: {
//             trigger: img,
//             start: "top 90%",
//             toggleActions: "play none none none",
//             markers: false,
//         },
//         x: fromX,
//         opacity: 0,
//         scale: 0.5,
//         duration: 1,
//         ease: "power3.out",
//     })
// });

// counterSixArray.forEach((circleNumber, index) => {
//     let fromX = index * 100 + 100;
//     gsap.from(circleNumber, {
//         scrollTrigger: {
//             trigger: circleNumber,
//             start: "top 90%",
//             toggleActions: "play none none none",
//             markers: false,
//         },
//         x: fromX,
//         opacity: 0,
//         scale: 0.7,
//         duration: 1.2,
//         delay: index * 0.3,
//         ease: "power1.out",
//     })
// });

const imagesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".select-thumb",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        scrub: true,
        markers: false,
    },
});

imagesArray.forEach((img, index) => {
    let fromX = index % 2 === 0 ? -100 : 100;
    imagesTimeline.from(img, {
        x: fromX,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
    }, index * 0.2);
})

const counterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".counter-six-wrapper",
        start: "top 90%",
        toggleActions: "play none none none",
        markers: false,
    }
});

// counterTimeline
//     .from(".fade-anim:nth-child(1)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5,
//     })
//     .from(".fade-anim:nth-child(2)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5,
//     })
//     .from(".fade-anim:nth-child(3)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5,
//     })
//     .from(".fade-anim:nth-child(4)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5,
//     });

counterSixArray.forEach((element, index) => {
    counterTimeline.from(element, {
        x: 50,
        opacity: 0,
        duration: 0.5
    }, index * 0.2);
});

ScrollTrigger.matchMedia({
    "(min-width: 992px)": () => {
        const blockScrolling = document.querySelector(".about-content-box");

        ScrollTrigger.create({
            trigger: ".about-six-bottom-wrapper",
            start: "top top",
            end: () => "+=" + blockScrolling.offsetHeight,
            pin: ".text-sticky",
            pinSpacing: true,
            scrub: true,
            markers: false
        });
    }
});

ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: false,
});

gsap.from(".circle-img", {
    scrollTrigger: {
        trigger: ".circle-img",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
});

// Стилизация карточек в слайдере

const articlesArray = gsap.utils.toArray(".blog-post-single");

articlesArray.forEach((article) => {
    const articleTitle = article.querySelector(".blog-six-title");
    const articleOriginalText = article.textContent;
    const avatarName = article.querySelector(".avatar-name");
    const cursorText = document.querySelector(".cursor-text");

    article.addEventListener("mouseenter", () => {
        cursorText.textContent = "Raed";
        gsap.to(cursorText, {
            color: "var(--bd-primary)",
            duration: 0.3,
            ease: "power2.out",
            scale: 1.5,
        })
        gsap.to(articleTitle, {
            color: "var(--bd-primary)",
            // background: "var(--bd-primary)",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(avatarName, {
            color: "var(--bd-primary)",
            duration: 0.3,
        });
        gsap.to(articleTitle, {
            scrambleText: {
                text: articleOriginalText,
                chars: "01",
                delay: 0.5,
                speed: 0.3,
            },
            duration: 1.5,
        });
    });

    article.addEventListener("mouseleave", () => {
        cursorText.textContent = "";
        gsap.to(articleTitle, {
            color: "inherit",
            // background: "var(--bd-white)",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(avatarName, {
            color: "inherit",
            duration: 0.3,
        });
        gsap.to(cursorText, {
            color: "inherit",
            duration: 0.3,
            ease: "power2.out",
            scale: 1,
        })
    });
});

gsap.from(".title-anim > div", {
    scrollTrigger: {
        trigger: ".footer-area",
        start: "top 70%",
    },
    opacity: 0,
    x: -50,
    duration: 1.5,
    stagger: 0.2,
});

// Стилизация кнопок и сылок

const workLink = document.querySelector(".work-btn a");
const iconPath = document.getElementById("morph-path");

const circlePath = "M50,10a40,40 0 1,0 0.0001,0";
const starPath = "M36.1771 3.8008C40.3406 -0.883216 47.6594 -0.883218 51.8229 3.80079V3.80079C54.339 6.63144 58.188 7.88205 61.8874 7.07095V7.07095C68.009 5.72878 73.93 10.0306 74.5452 16.2673V16.2673C74.9169 20.0363 77.2957 23.3105 80.7654 24.8287V24.8287C86.5067 27.3411 88.7683 34.3016 85.6002 39.7088V39.7088C83.6856 42.9765 83.6856 47.0235 85.6002 50.2912V50.2912C88.7683 55.6984 86.5067 62.6589 80.7654 65.1713V65.1713C77.2957 66.6895 74.9169 69.9637 74.5452 73.7327V73.7327C73.93 79.9694 68.009 84.2712 61.8874 82.9291V82.9291C58.188 82.118 54.339 83.3686 51.8229 86.1992V86.1992C47.6594 90.8832 40.3406 90.8832 36.1771 86.1992V86.1992C33.661 83.3686 29.812 82.118 26.1126 82.9291V82.9291C19.991 84.2712 14.07 79.9694 13.4548 73.7327V73.7327C13.0831 69.9637 10.7043 66.6895 7.23464 65.1713V65.1713C1.49327 62.6589 -0.768337 55.6984 2.39981 50.2912V50.2912C4.31439 47.0235 4.31439 42.9765 2.39981 39.7088V39.7088C-0.768336 34.3016 1.49327 27.3411 7.23464 24.8287V24.8287C10.7043 23.3105 13.0831 20.0363 13.4548 16.2673V16.2673C14.07 10.0306 19.991 5.72878 26.1126 7.07095V7.07095C29.812 7.88205 33.661 6.63144 36.1771 3.8008V3.8008Z";

workLink.addEventListener("mouseenter", () => {
    gsap.to(iconPath, {
        morphSVG: starPath,
        duration: 0.5,
        x: 10,
        y: 5,
        ease: "power2.out",
    });
});

workLink.addEventListener("mouseleave", () => {
    gsap.to(iconPath, {
        morphSVG: circlePath,
        duration: 0.5,
        x: 1,
        y: 0,
        ease: "power2.out",
    });
});

gsap.fromTo(".text-slide path",
    {
        drawSVG: "0%",
    },
    {
        drawSVG: "100%",
        duration: 3,
        ease: "power2.out",
        repeat: -1,
    },
);

// Анимация логотипа

const iconPathsArray = gsap.utils.toArray(".icon-path");
const rectPath = document.getElementById("rectangleIcon");
const pathsLogoArray = document.querySelectorAll(".icon-path");
const pathsIconGroup = document.getElementById("pathsIconGroup");

iconPathsArray.forEach(iconPath => {
    gsap.from(iconPath, {
        opacity: 0,
        x: -15,
        duration: 3,
    });
});

gsap.from(rectPath, {
    opacity: 0,
    duration: 3,
});

pathsLogoArray.forEach((path) => {
    gsap.fromTo(path, {
            drawSVG: "0%",
        },
        {
            drawSVG: "100%",
            duration: 1,
        });
});

// Анимация логотипа в футере

gsap.from(".footer-logo", {
    scrollTrigger: {
        trigger: ".footer-area",
        start: "top 60%",
    },
    opacity: 0,
    y: 300,
    ease: "power2.out",
    duration: 3,
});

// Работа с курсором

document.addEventListener("mousemove", e => {
    gsap.to(".custom-cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
    });
});

const hoverTarget = document.querySelectorAll(".hover-target");

hoverTarget.forEach(hoverTargetElement => {
    hoverTargetElement.addEventListener("mouseenter", () => {
        gsap.to(".custom-cursor", {
            scale: 1.3,
            backgroundColor: "var(--bd-primary)",
            duration: 0.3,
            ease: "power2.out",
        });
    });

    hoverTargetElement.addEventListener("mouseleave", () => {
        gsap.to(".custom-cursor", {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
        });
    });
});

