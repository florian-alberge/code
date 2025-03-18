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
    let heleneVideo = document.querySelector(".helene_video");
    let milkshakeVideo = document.querySelector(".milkshake_video"); // Added milkshake_video selector

    function setupScrubbing(videoElement, triggerElement) {
        videoElement.onloadedmetadata = function() {
            gsap.to(videoElement, {
                currentTime: videoElement.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top top+=50vh",
                    end: "bottom bottom",
                    scrub: true,
                    markers: false, // Set to true for debugging
                    onUpdate: throttle((self) => {
                        // Throttled function
                    }, 50) // Adjust the delay as needed
                },
            });
        };
    }

    if (pawnShopVideo) {
        setupScrubbing(pawnShopVideo, ".h-scrolling-height.tv-pawnshop");
    }

    if (heleneVideo) {
        setupScrubbing(heleneVideo, ".h-scrolling-height.tv-helene");
    }

    if (milkshakeVideo) {
        setupScrubbing(milkshakeVideo, ".h-scrolling-height.tv-milkshake"); // Added trigger for milkshake
    }
});
