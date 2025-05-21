gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother);

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

const createClassSelectArray = (className) => {
    return gsap.utils.toArray(className);
}

const imagesArray = createClassSelectArray(".select-thumb img");
const counterSixArray = createClassSelectArray(".single-counter-inner");

imagesArray.forEach((img, index) => {
    let fromX = index % 2 === 0 ? -100 : 100;
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none",
            markers: false,
        },
        x: fromX,
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power3.out",
    })
});

counterSixArray.forEach((circleNumber, index) => {
    let fromX = index * 100 + 100;
    gsap.from(circleNumber, {
        scrollTrigger: {
            trigger: circleNumber,
            start: "top 90%",
            toggleActions: "play none none none",
            markers: false,
        },
        x: fromX,
        opacity: 0,
        scale: 0.7,
        duration: index * 0.4,
        ease: "power1.out",
    })
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
    smooth: 1.1,
    effects: true,
    smoothTouch: 0.1,
});

gsap.from(".circle-img", {
    ScrollTrigger: {
        trigger: ".circle-img",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
});


