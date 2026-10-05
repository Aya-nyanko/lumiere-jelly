document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       Scroll Reveal
    ========================= */

    const revealItems =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach((item) => {

        revealObserver.observe(item);

    });



    /* =========================
       Crystal Particles
    ========================= */

    const particleContainer =
        document.querySelector(".particles");


    if (particleContainer) {

        const particleCount = 28;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.classList.add("particle");


            const size =
                Math.random() * 4 + 2;

            const left =
                Math.random() * 100;

            const duration =
                Math.random() * 15 + 12;

            const delay =
                Math.random() * -20;


            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particle.style.left =
                `${left}%`;

            particle.style.animationDuration =
                `${duration}s`;

            particle.style.animationDelay =
                `${delay}s`;


            particleContainer.appendChild(
                particle
            );

        }

    }



    /* =========================
       Fruit Card Parallax
    ========================= */

    const cards =
        document.querySelectorAll(
            ".fruit-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                    centerY) * -2;

                const rotateY =
                    ((x - centerX) /
                    centerX) * 2;


                card.style.transform =
                    `translateY(-12px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });



    /* =========================
       Hero Slideshow + Parallax
    ========================= */

    const heroImage =
        document.querySelector(
            ".farm-hero-image"
        );


    /* -------------------------
       Hero Slideshow
    ------------------------- */

    if (heroImage) {

        const heroImages = [
            "img/farm-hero01.webp",
            "img/farm-hero02.webp",
            "img/farm-hero03.webp"
        ];

        let currentHero = 0;


        setInterval(() => {

            /* フェードアウト */

            heroImage.style.opacity = "0";


            setTimeout(() => {

                /* 次の画像へ */

                currentHero =
                    (currentHero + 1) %
                    heroImages.length;


                heroImage.style.backgroundImage =
                    `url("${heroImages[currentHero]}")`;


                /* フェードイン */

                heroImage.style.opacity = "1";

            }, 2500);

        }, 7000);

    }



    /* -------------------------
       Hero Parallax
    ------------------------- */

    window.addEventListener(
        "scroll",
        () => {

            if (!heroImage) {
                return;
            }


            const scrollY =
                window.scrollY;


            if (scrollY < window.innerHeight) {

                heroImage.style.transform =
                    `scale(1.10)
                     translateY(${scrollY * 0.12}px)`;

            }

        },
        {
            passive: true
        }
    );

});