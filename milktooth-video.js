document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnShopVideo = document.querySelector(".pawn-shop_video");
    let heleneVideo = document.querySelector(".helene_video");
    let milkshakeVideo = document.querySelector(".milkshake_video");

    // Scrubbing for pawnShopVideo
    if (pawnShopVideo) {
        pawnShopVideo.onloadedmetadata = function () {
            gsap.to(pawnShopVideo, {
                currentTime: pawnShopVideo.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: ".h-scrolling-height.tv-pawnshop",
                    start: "top top+=50vh",
                    end: "bottom bottom",
                    scrub: true,
                    markers: false,
                },
            });
        };
    }

    // Play/Reset for heleneVideo
    if (heleneVideo) {
        heleneVideo.loop = true; // Add loop attribute in JS
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-helene",
            start: "top bottom-=100",
            end: "bottom top+=100",
            onEnter: () => {
                heleneVideo.currentTime = 0;
                heleneVideo.play();
            },
            onLeave: () => {
                heleneVideo.pause();
                heleneVideo.currentTime = 0;
            },
            onEnterBack: () => {
                heleneVideo.currentTime = 0;
                heleneVideo.play();
            },
            onLeaveBack: () => {
                heleneVideo.pause();
                heleneVideo.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    heleneVideo.currentTime = 0;
                }
            },
        });
    }

    // Play/Reset for milkshakeVideo
    if (milkshakeVideo) {
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-milkshake",
            start: "top bottom-=100",
            end: "bottom top+=100",
            onEnter: () => {
                milkshakeVideo.currentTime = 0;
                milkshakeVideo.play();
            },
            onLeave: () => {
                milkshakeVideo.pause();
                milkshakeVideo.currentTime = 0;
            },
            onEnterBack: () => {
                milkshakeVideo.currentTime = 0;
                milkshakeVideo.play();
            },
            onLeaveBack: () => {
                milkshakeVideo.pause();
                milkshakeVideo.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    milkshakeVideo.currentTime = 0;
                }
            },
        });
    }
});
