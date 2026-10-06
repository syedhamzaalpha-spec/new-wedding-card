/* =====================================
   OPEN INVITATION
===================================== */

const openButton =
    document.getElementById("openInvitation");

const openingScreen =
    document.getElementById("openingScreen");

const weddingCard =
    document.getElementById("weddingCard");


openButton.addEventListener("click", function () {

    openingScreen.style.opacity = "0";
    openingScreen.style.transform = "scale(1.15)";

    setTimeout(function () {

        openingScreen.style.display = "none";

        weddingCard.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        createPetals();

        createSparkles();

        revealElements();

    }, 1000);

});


/* =====================================
   FALLING ROSE PETALS
===================================== */

const petalsContainer =
    document.getElementById("petals");


function createPetals() {

    setInterval(function () {

        const petal =
            document.createElement("div");

        petal.classList.add("petal");

        petal.style.left =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 12 + 10;

        petal.style.width =
            size + "px";

        petal.style.height =
            size * 1.3 + "px";

        const duration =
            Math.random() * 5 + 6;

        petal.style.animationDuration =
            duration + "s, " +
            (Math.random() * 2 + 2) + "s";

        petal.style.opacity =
            Math.random() * .5 + .4;

        petalsContainer.appendChild(petal);


        setTimeout(function () {
            petal.remove();
        }, duration * 1000);

    }, 350);

}


/* =====================================
   GOLD SPARKLES
===================================== */

const sparklesContainer =
    document.getElementById("sparkles");


function createSparkles() {

    for (let i = 0; i < 45; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 4 + "s";

        sparklesContainer.appendChild(sparkle);

    }

}


/* =====================================
   COUNTDOWN
===================================== */

const weddingDate =
    new Date(
        "November 11, 2026 21:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .innerText = "00";

        document.getElementById("hours")
            .innerText = "00";

        document.getElementById("minutes")
            .innerText = "00";

        document.getElementById("seconds")
            .innerText = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================
   SCROLL REVEAL
===================================== */

function revealElements() {

    const elements =
        document.querySelectorAll(".reveal");


    function checkReveal() {

        elements.forEach(function (element) {

            const position =
                element.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;


            if (position <
                windowHeight - 80) {

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        checkReveal
    );

    checkReveal();

}


/* =====================================
   BACKGROUND MUSIC
===================================== */

const musicButton =
    document.getElementById("musicButton");

const music =
    document.getElementById("weddingMusic");

let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function () {

        if (!musicPlaying) {

            music.play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.innerText = "❚❚";

                })
                .catch(function () {

                    alert(
                        "Please add music.mp3 in the same folder."
                    );

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.innerText = "♫";

        }

    }
);