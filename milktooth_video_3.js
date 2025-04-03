document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let pawnshopVideo = document.querySelector(".pawnshop_video");
    let helene1Video = document.querySelector(".helene1_video");
    let milkshakeVideo = document.querySelector(".milkshake_video");
    let helene2Video = document.querySelector(".helene2_video");
    let boyfriendVideo = document.querySelector(".boyfriend_video");
    let momVideo = document.querySelector(".mom_video");

    // 1. Scrubbing for pawnshop_video
    if (pawnshopVideo && pawnshopVideo.duration) {
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
    }

    // Add milkshakeVideo to scrubbing
    if (milkshakeVideo && milkshakeVideo.duration) {
        gsap.to(milkshakeVideo, {
            currentTime: milkshakeVideo.duration,
            ease: "none",
            scrollTrigger: {
                trigger: ".section_height.is_milkshake",
                start: "top top-=100vw", // Adjust start position as needed
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });
    }

    // 2. Play for helene1_video
    if (helene1Video) {
        helene1Video.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene1",
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
                helene1Video.play();
            },
            onLeaveBack: () => {
                helene1Video.play();
            },
        });
    }

    // 4. Play for helene2_video (within multi-panel section)
    if (helene2Video) {
        helene2Video.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel1",
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
                helene2Video.play();
            },
            onLeaveBack: () => {
                helene2Video.play();
            },
        });
    }

    // 5. Play for boyfriend_video (within multi-panel section)
    if (boyfriendVideo) {
        boyfriendVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel2",
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
                boyfriendVideo.play();
            },
            onLeaveBack: () => {
                boyfriendVideo.play();
            },
        });
    }

    // 6. Play for mom_video (within multi-panel section)
    if (momVideo) {
        momVideo.loop = true;
        ScrollTrigger.create({
            trigger: ".section_height.is_helene2 .panel3",
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
                momVideo.play();
            },
            onLeaveBack: () => {
                momVideo.play();
            },
        });
    }
});
