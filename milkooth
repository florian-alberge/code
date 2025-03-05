document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis();
   
    // Log Lenis initialization (optional, you can remove this)
    console.log("Lenis initialized:", lenis);

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's raf to GSAP's ticker
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Disable lag smoothing
    gsap.ticker.lagSmoothing(0);

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
                    // Log ScrollTrigger updates (optional, you can remove this)
                    console.log("ScrollTrigger update:", self.progress);
                }
            },
        });

        // Log GSAP animation (optional, you can remove this)
        console.log("GSAP animation created:", scrubAnimation);
    };
});
