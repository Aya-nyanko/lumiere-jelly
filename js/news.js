
/* =========================
   NEWS & JOURNAL
   Lumière Jelly
========================= */


/* =========================
   PARTICLES
   ABOUT / CONTACTと同じ
========================= */

const particles =
    document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 50; i++) {

        const star =
            document.createElement("span");

        star.classList.add("sparkle");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 8 + "s";

        star.style.animationDuration =
            6 + Math.random() * 10 + "s";

        particles.appendChild(star);

    }

}



/* =========================
   NEWS CARD REVEAL
========================= */

const newsCards =
    document.querySelectorAll(".news-card");


function showNewsCards() {

    newsCards.forEach(
        (card, index) => {

            const top =
                card.getBoundingClientRect().top;


            if (
                top <
                window.innerHeight - 80
            ) {

                setTimeout(
                    () => {

                        card.classList.add(
                            "is-visible"
                        );

                    },
                    index * 150
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    showNewsCards
);

showNewsCards();



/* =========================
   CATEGORY FILTER
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                /* -----------------
                   ボタン状態
                ----------------- */

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );


                /* -----------------
                   カード表示
                ----------------- */

                newsCards.forEach(
                    card => {

                        const cardCategory =
                            card.dataset.category;


                        if (
                            category === "all" ||
                            cardCategory === category
                        ) {

                            card.style.display =
                                "block";


                            setTimeout(
                                () => {

                                    card.classList.add(
                                        "is-visible"
                                    );

                                },
                                50
                            );


                        } else {

                            card.classList.remove(
                                "is-visible"
                            );

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);



/* =========================
   HERO PARALLAX
========================= */

const hero =
    document.querySelector(".news-hero");

if (hero) {

    window.addEventListener(
        "scroll",
        () => {

            const offset =
                window.pageYOffset;

            hero.style.backgroundPositionY =
                offset * 0.2 + "px";

        }
    );

}



/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        showNewsCards();

    }
);