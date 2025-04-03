document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnshopVideo = document.querySelector(".pawnshop_video");
    let helene1Video = document.querySelector(".helene1_video");
    let milkshakeVideo = document.querySelector(".milkshake_video");
    let helene2Video = document.querySelector(".helene2_video");
    let boyfriendVideo = document.querySelector(".boyfriend_video");
    let momVideo = document.querySelector(".mom_video");

    // 1. Scrubbing for pawnshop_video
    if (pawnshopVideo) {
        pawnshopVideo.onloadedmetadata = function () {
            gsap.to(pawnshopVideo, {
                currentTime: pawnshopVideo.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: ".h-scrolling-height.tv-pawnshop",
                    start: "top top+=150vw", // 1.2: 150vw start delay
                    end: "bottom bottom",
                    scrub: true,
                    markers: false,
                },
            });
        };
    }

    // 2. Play/Reset for helene1_video
    if (helene1Video) {
        helene1Video.loop = true;
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-helene",
            start: "top bottom", // 2.2: No delay
            end: "bottom top",   // 2.2: No delay
            onEnter: () => {
                helene1Video.currentTime = 0;
                helene1Video.play();
            },
            onLeave: () => {
                helene1Video.pause();
                helene1Video.currentTime = 0;
            },
            onEnterBack: () => {
                helene1Video.currentTime = 0;
                helene1Video.play();
            },
            onLeaveBack: () => {
                helene1Video.pause();
                helene1Video.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    helene1Video.currentTime = 0;
                }
            },
        });
    }

    // 3. Play/Reset for milkshake_video
    if (milkshakeVideo) {
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-milkshake",
            start: "top bottom", // 3: No delay
            end: "bottom top",   // 3: No delay
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

    // 4. Play/Reset for helene2_video (no delay)
    if (helene2Video) {
        helene2Video.loop = true;
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-helene2", // Make sure you have this trigger element
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
                helene2Video.currentTime = 0;
                helene2Video.play();
            },
            onLeave: () => {
                helene2Video.pause();
                helene2Video.currentTime = 0;
            },
            onEnterBack: () => {
                helene2Video.currentTime = 0;
                helene2Video.play();
            },
            onLeaveBack: () => {
                helene2Video.pause();
                helene2Video.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    helene2Video.currentTime = 0;
                }
            },
        });
    }

    // 5. Play/Reset for boyfriend_video (100vw delay)
    if (boyfriendVideo) {
        boyfriendVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-boyfriend", // Make sure you have this trigger element
            start: "top bottom-=100vw",
            end: "bottom top+=100vw",
            onEnter: () => {
                boyfriendVideo.currentTime = 0;
                boyfriendVideo.play();
            },
            onLeave: () => {
                boyfriendVideo.pause();
                boyfriendVideo.currentTime = 0;
            },
            onEnterBack: () => {
                boyfriendVideo.currentTime = 0;
                boyfriendVideo.play();
            },
            onLeaveBack: () => {
                boyfriendVideo.pause();
                boyfriendVideo.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    boyfriendVideo.currentTime = 0;
                }
            },
        });
    }

    // 6. Play/Reset for mom_video (200vw delay)
    if (momVideo) {
        momVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".h-scrolling-height.tv-mom", // Make sure you have this trigger element
            start: "top bottom-=200vw",
            end: "bottom top+=200vw",
            onEnter: () => {
                momVideo.currentTime = 0;
                momVideo.play();
            },
            onLeave: () => {
                momVideo.pause();
                momVideo.currentTime = 0;
            },
            onEnterBack: () => {
                momVideo.currentTime = 0;
                momVideo.play();
            },
            onLeaveBack: () => {
                momVideo.pause();
                momVideo.currentTime = 0;
            },
            onUpdate: (self) => {
                if (self.progress === 0 || self.progress === 1) {
                    momVideo.currentTime = 0;
                }
            },
        });
    }
});
