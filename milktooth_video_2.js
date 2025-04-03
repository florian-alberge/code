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
                    trigger: ".section_height.is_TVs",
                    start: "top top+=150vw",
                    end: "bottom bottom",
                    scrub: true,
                    markers: false,
                },
            });
        };
    }

    // Add milkshakeVideo to scrubbing
    if (milkshakeVideo) {
        milkshakeVideo.onloadedmetadata = function () {
            gsap.to(milkshakeVideo, {
                currentTime: milkshakeVideo.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section_height.is_milkshake",
                    start: "top top", // Adjust start position as needed
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
            trigger: ".section_height.is_helene1",
            start: "top bottom",
            end: "bottom top",
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

    // 4. Play/Reset for helene2_video (within multi-panel section)
    if (helene2Video) {
        helene2Video.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel1", // Trigger based on panel
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

    // 5. Play/Reset for boyfriend_video (within multi-panel section)
    if (boyfriendVideo) {
        boyfriendVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel2", // Trigger based on panel
            start: "top bottom",
            end: "bottom top",
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

    // 6. Play/Reset for mom_video (within multi-panel section)
    if (momVideo) {
        momVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel3", // Trigger based on panel
            start: "top bottom",
            end: "bottom top",
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
