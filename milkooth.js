document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnShopVideo = document.querySelector(".pawn-shop_video");

    // Scrub Animation for .pawn-shop_video
    pawnShopVideo.onloadedmetadata = function() {
        let scrubAnimation = gsap.to(pawnShopVideo, {
            currentTime: pawnShopVideo.duration,
            ease: "none",
            scrollTrigger: {
                trigger: ".h-scrolling-height.tv-pawnshop",
                start: "top top+=50vh", // Delayed start by 50vh
                end: "bottom bottom", 
                scrub: true,
                markers: true,
                onUpdate: (self) => {
                }
            },
        });
    };
});
