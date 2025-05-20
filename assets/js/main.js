gsap.registerPlugin(ScrambleTextPlugin);

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
    duration: 1,
    scrambleText: {
        text: "THIS IS NEW TEXT",
        chars: "0101010011",
        revealDelay: 0.5,
        speed: 0.3,
    }
});


