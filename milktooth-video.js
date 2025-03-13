function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnShopVideo = document.querySelector(".pawn-shop_video");

    pawnShopVideo.onloadedmetadata = function() {
        let scrubAnimation = gsap.to(pawnShopVideo, {
            currentTime: pawnShopVideo.duration,
            ease: "none",
            scrollTrigger: {
                trigger: ".h-scrolling-height.tv-pawnshop",
                start: "top top+=50vh",
                end: "bottom bottom",
                scrub: true,
                markers: true,
                onUpdate: throttle((self) => {
                    //Throttled function.
                }, 50) // Adjust the delay (milliseconds) as needed.
            },
        });
    };
});
