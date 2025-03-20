document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnShopVideo = document.querySelector(".pawn-shop_video");
    let heleneVideo = document.querySelector(".helene_video");
    let milkshakeVideo = document.querySelector(".milkshake_video");

    // Scrubbing for pawnShopVideo (remains the same)
    if (pawnShopVideo) {
        pawnShopVideo.onloadedmetadata = function() {
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
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-helene",
            start: "top bottom-=100", // Play when top of video reaches bottom of viewport minus 100px
            end: "bottom top+=100", // Reset when bottom of video reaches top of viewport plus 100px
            onEnter: () => heleneVideo.play(),
            onLeave: () => heleneVideo.pause(),
            onEnterBack: () => heleneVideo.play(),
            onLeaveBack: () => heleneVideo.pause(),
            onUpdate: (self) => {
                if(self.progress === 0 || self.progress === 1) heleneVideo.currentTime = 0;
            },
        });
    }

    // Play/Reset for milkshakeVideo
    if (milkshakeVideo) {
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-milkshake",
            start: "top bottom-=100",
            end: "bottom top+=100",
            onEnter: () => milkshakeVideo.play(),
            onLeave: () => milkshakeVideo.pause(),
            onEnterBack: () => milkshakeVideo.play(),
            onLeaveBack: () => milkshakeVideo.pause(),
            onUpdate: (self) => {
                if(self.progress === 0 || self.progress === 1) milkshakeVideo.currentTime = 0;
            },
        });
    }
});
