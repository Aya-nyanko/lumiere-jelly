/* =========================
   MENU / PRODUCT PAGE
========================= */


/* -------------------------
   PARTICLES

   ABOUT・NEWS・CONTACTと
   同じコード
------------------------- */

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
   PRODUCT DATA
========================= */

const products = {

    1:{
        category:"SHORT CAKE",
        title:"Crystal Berry",
        image:"img/product01.webp",
        copy:"苺やラズベリー、チェリーの甘酸っぱく華やかな味わいを、宝石のようなジェリーに。",
        flavor:"Berry × Berry",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥5,500"
    },


    2:{
        category:"SHORT CAKE",
        title:"Crystal Blue",
        image:"img/product02.webp",
        copy:"青い光を閉じ込めた、透明感のあるクリスタルゼリー。",
        flavor:"Blue Citrus",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥5,500"
    },


    3:{
        category:"SHORT CAKE",
        title:"Crystal Green",
        image:"img/product03.webp",
        copy:"みずみずしい白桃の魅力を、宝石のような透明感で表現した一品。",
        flavor:"White Peach",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥5,500"
    },


    4:{
        category:"GLASS IN",
        title:"Crystal Blue Hawaii",
        image:"img/product04.webp",
        copy:"輝くマリンにベリーを閉じ込めた華やかなクリスタル。",
        flavor:"Blue × Hawaii",
        size:"Glass",
        serves:"1",
        storage:"要冷蔵",
        price:"¥3,800"
    },


    5:{
        category:"GLASS IN",
        title:"Jewel Aurora",
        image:"img/product05.webp",
        copy:"オーロラの光が揺らめくグラデーションのクリスタル。",
        flavor:"Blue Citrus",
        size:"Glass",
        serves:"1",
        storage:"要冷蔵",
        price:"¥3,800"
    },


    6:{
        category:"GLASS IN",
        title:"Jewel Peach",
        image:"img/product06.webp",
        copy:"桃色の輝かしく、優雅なパーティータイム。",
        flavor:"Rose × Peach",
        size:"Glass",
        serves:"1",
        storage:"要冷蔵",
        price:"¥3,800"
    },


    7:{
        category:"EVENT",
        title:"Crystal Garden",
        image:"img/product07.webp",
        copy:"花々を閉じ込めた、特別な一日のための華やかなクリスタル。",
        flavor:"Flower × Peach",
        size:"φ 15cm",
        serves:"4–6",
        storage:"要冷蔵",
        price:"¥8,800"
    },


    8:{
        category:"EVENT",
        title:"Anniversary Jewel",
        image:"img/product08.webp",
        copy:"記念日という大切な一日を、ひとつの宝石に閉じ込めました。",
        flavor:"Berry × Rose",
        size:"φ 15cm",
        serves:"4–6",
        storage:"要冷蔵",
        price:"¥9,800"
    },


    9:{
        category:"EVENT",
        title:"Royal Celebration",
        image:"img/product09.webp",
        copy:"華やかな席を彩る、Lumière Jellyのラグジュアリーコレクション。",
        flavor:"Seasonal Fruit",
        size:"φ 18cm",
        serves:"6–8",
        storage:"要冷蔵",
        price:"¥12,000"
    },


    10:{
        category:"GIFT",
        title:"Royal Gift",
        image:"img/product10.webp",
        copy:"大切な人へ贈るために仕立てた、特別なクリスタルギフト。",
        flavor:"Seasonal Fruit",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥7,500"
    },


    11:{
        category:"GIFT",
        title:"Lumière Gift Box",
        image:"img/product11.webp",
        copy:"箱を開いた瞬間、光がこぼれるような特別な贈り物。",
        flavor:"Peach × Rose",
        size:"Gift Set",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥8,500"
    },


    12:{
        category:"GIFT",
        title:"Crystal Anniversary",
        image:"img/product12.webp",
        copy:"感謝と祝福を込めて贈る、記念日のためのクリスタル。",
        flavor:"Berry × Rose",
        size:"φ 15cm",
        serves:"4–6",
        storage:"要冷蔵",
        price:"¥10,000"
    },


    13:{
        category:"SEASONAL",
        title:"Sakura Crystal",
        image:"img/product13.webp",
        copy:"春だけに出会える、桜色のクリスタルコレクション。",
        flavor:"Sakura × Peach",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥6,500"
    },


    14:{
        category:"SEASONAL",
        title:"Summer Aqua",
        image:"img/product14.webp",
        copy:"夏の光を閉じ込めた、涼やかで透明感のある一品。",
        flavor:"Citrus × Mint",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥6,500"
    },


    15:{
        category:"SEASONAL",
        title:"Winter Snow",
        image:"img/product15.webp",
        copy:"冬の静けさを表現した、透明なクリスタルゼリー。",
        flavor:"White Peach × Vanilla",
        size:"φ 12cm",
        serves:"2–4",
        storage:"要冷蔵",
        price:"¥7,000"
    }

};



/* =========================
   MODAL ELEMENTS
========================= */

const modal =
    document.getElementById(
        "productModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalCopy =
    document.getElementById(
        "modalCopy"
    );


const modalFlavor =
    document.getElementById(
        "modalFlavor"
    );


const modalSize =
    document.getElementById(
        "modalSize"
    );


const modalServes =
    document.getElementById(
        "modalServes"
    );


const modalStorage =
    document.getElementById(
        "modalStorage"
    );


const modalPrice =
    document.getElementById(
        "modalPrice"
    );


const makeYours =
    document.getElementById(
        "makeYours"
    );


let selectedProduct = null;



/* =========================
   OPEN PRODUCT
========================= */

function openProduct(id){

    const product =
        products[id];


    if (!product) return;


    selectedProduct =
        product;


    modalImage.src =
        product.image;


    modalImage.alt =
        product.title;


    modalCategory.textContent =
        product.category;


    modalTitle.textContent =
        product.title;


    modalCopy.textContent =
        product.copy;


    modalFlavor.textContent =
        product.flavor;


    modalSize.textContent =
        product.size;


    modalServes.textContent =
        product.serves;


    modalStorage.textContent =
        product.storage;


    modalPrice.textContent =
        product.price;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* =========================
   CLOSE PRODUCT
========================= */

function closeProduct(){

    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}



/* =========================
   DETAIL BUTTON
========================= */

document
    .querySelectorAll(
        ".detail-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.product;

                openProduct(id);

            }
        );

    });



modalClose.addEventListener(
    "click",
    closeProduct
);



document
    .querySelector(
        ".modal-overlay"
    )
    .addEventListener(
        "click",
        closeProduct
    );



/* =========================
   MAKE IT YOURS
========================= */

makeYours.addEventListener(
    "click",
    () => {

        if (!selectedProduct) return;


        const thankYou =
            document.getElementById(
                "thankYou"
            );


        const selectedProductText =
            document.getElementById(
                "selectedProduct"
            );


        selectedProductText.textContent =
            selectedProduct.title;


        closeProduct();


        document
            .querySelectorAll(
                "body > section:not(.thank-you)"
            )
            .forEach(section => {

                section.style.display =
                    "none";

            });


        document.querySelector(
            "header"
        ).style.display =
            "none";


        document.querySelector(
            "footer"
        ).style.display =
            "none";


        thankYou.classList.add(
            "show"
        );


        window.scrollTo({
            top:0,
            behavior:"smooth"
        });


        createThankYouSparkles();

    }
);



/* =========================
   THANK YOU SPARKLES
========================= */

function createThankYouSparkles(){

    const container =
        document.querySelector(
            ".thank-you-inner"
        );


    for (
        let i = 0;
        i < 20;
        i++
    ){

        const sparkle =
            document.createElement(
                "span"
            );


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
            "50%";


        sparkle.style.pointerEvents =
            "none";


        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            80 +
            Math.random() * 180;


        const x =
            Math.cos(angle)
            * distance;


        const y =
            Math.sin(angle)
            * distance;


        sparkle.animate(
            [

                {
                    transform:
                    "translate(-50%, -50%) scale(0)",

                    opacity:1
                },

                {
                    transform:
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    ) scale(1.5)`,

                    opacity:0
                }

            ],

            {

                duration:
                    900 +
                    Math.random() * 600,

                easing:
                    "cubic-bezier(.2,.7,.2,1)"

            }
        );


        container.appendChild(
            sparkle
        );


        setTimeout(
            () => {

                sparkle.remove();

            },
            1600
        );

    }

}



/* =========================
   BACK TO COLLECTION
========================= */

document
    .getElementById(
        "backToCollection"
    )
    .addEventListener(
        "click",
        () => {

            location.reload();

        }
    );



/* =========================
   CATEGORY FILTER
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


const productCards =
    document.querySelectorAll(
        ".product-card"
    );



filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                productCards.forEach(
                    card => {

                        const category =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ){

                            card.style.display =
                                "";


                            setTimeout(
                                () => {

                                    card.classList.add(
                                        "visible"
                                    );

                                },
                                50
                            );

                        }

                        else{

                            card.style.display =
                                "none";


                            card.classList.remove(
                                "visible"
                            );

                        }

                    }
                );

            }
        );

    }
);



/* =========================
   SCROLL REVEAL
========================= */

function showProductCards(){

    productCards.forEach(
        (card,index) => {

            const top =
                card.getBoundingClientRect()
                    .top;


            if (
                top <
                window.innerHeight - 80
            ){

                setTimeout(
                    () => {

                        card.classList.add(
                            "visible"
                        );

                    },
                    index * 80
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    showProductCards
);


showProductCards();



/* =========================
   HERO PARALLAX
========================= */

const hero =
    document.querySelector(
        ".product-hero"
    );


if (hero){

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
   CHOOSE YOUR MOMENT
========================= */

const chooseCards =
    document.querySelectorAll(
        ".choose-card"
    );


chooseCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                chooseCards.forEach(
                    item => {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                card.classList.add(
                    "selected"
                );


                const choice =
                    card.dataset.choice;


                let filter =
                    "all";


                if (
                    choice === "self"
                ){

                    filter =
                        "short";

                }


                if (
                    choice === "gift"
                ){

                    filter =
                        "gift";

                }


                if (
                    choice === "event"
                ){

                    filter =
                        "event";

                }


                if (
                    choice === "tea"
                ){

                    filter =
                        "glass";

                }


                if (
                    choice === "season"
                ){

                    filter =
                        "seasonal";

                }


                const target =
                    document.querySelector(
                        `.filter-button[data-filter="${filter}"]`
                    );


                if (target){

                    target.click();


                    document
                        .getElementById(
                            "collection"
                        )
                        .scrollIntoView({
                            behavior:"smooth"
                        });

                }

            }
        );

    }
);



/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
            "0";


        setTimeout(
            () => {

                document.body.style.transition =
                    "1.5s";


                document.body.style.opacity =
                    "1";

            },
            100
        );

    }
);