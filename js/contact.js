/* =========================
   SCROLL REVEAL
========================= */

const reveals =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const trigger =
            window.innerHeight - 100;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();



/* =========================
   GOLD LINE
========================= */

const lines =
    document.querySelectorAll(".gold-line");


function showLines() {

    lines.forEach(line => {

        const top =
            line.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            line.style.width = "180px";

        }

    });

}


window.addEventListener(
    "scroll",
    showLines
);

showLines();



/* =========================
   HERO PARALLAX
========================= */

const hero =
    document.querySelector(".contact-hero");


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
   CURSOR LIGHT
========================= */

const cursorLight =
    document.querySelector(".cursor-light");


if (cursorLight) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorLight.style.left =
                event.clientX + "px";

            cursorLight.style.top =
                event.clientY + "px";

        }
    );

}



/* =========================
   INPUT LIGHT EFFECT
========================= */

const inputs =
    document.querySelectorAll(
        "input[type='text'], input[type='email'], textarea"
    );


inputs.forEach(input => {

    input.addEventListener(
        "focus",
        () => {

            input.parentElement
                .classList.add("focused");

        }
    );


    input.addEventListener(
        "blur",
        () => {

            input.parentElement
                .classList.remove("focused");

        }
    );

});



/* =========================
   PARTICLES
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
   CONTACT FORM
========================= */

const form =
    document.getElementById("contactForm");

const thankYou =
    document.getElementById("thankYou");

const submitButton =
    document.querySelector(".submit-button");


if (form) {

    form.addEventListener(
        "submit",
        event => {

            /*
             * 今回はポートフォリオ用の
             * フロントエンド演出です。
             *
             * 実際のメール送信は行いません。
             */

            event.preventDefault();


            /* 光を走らせる */

            submitButton.classList.add(
                "sending"
            );


            submitButton.querySelector(
                ".button-text"
            ).textContent =
                "SENDING";


            /* 少し待ってThank youへ */

            setTimeout(() => {

                form.style.opacity = "0";

                form.style.transform =
                    "translateY(-20px)";

                form.style.transition =
                    "1s ease";


            }, 600);


            setTimeout(() => {

                form.style.display =
                    "none";

                thankYou.classList.add(
                    "show"
                );


                createThankYouSparkles();


            }, 1200);

        }
    );

}



/* =========================
   THANK YOU SPARKLES
========================= */

function createThankYouSparkles() {

    const container =
        document.querySelector(
            ".form-wrapper"
        );


    for (let i = 0; i < 18; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.style.position =
            "absolute";

        sparkle.style.width =
            "4px";

        sparkle.style.height =
            "4px";

        sparkle.style.borderRadius =
            "50%";

        sparkle.style.background =
            "white";

        sparkle.style.boxShadow =
            "0 0 12px white";

        sparkle.style.left =
            "50%";

        sparkle.style.top =
            "45%";

        sparkle.style.pointerEvents =
            "none";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        sparkle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    900 + Math.random() * 600,

                easing:
                    "cubic-bezier(.2,.7,.2,1)"
            }
        );


        container.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.remove();

        }, 1600);

    }

}



/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
            "0";

        setTimeout(() => {

            document.body.style.transition =
                "1.5s";

            document.body.style.opacity =
                "1";

        }, 100);

    }
);