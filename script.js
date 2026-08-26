/* =========================================================
   PAGE SYSTEM
========================================================= */

function goToPage(number) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    let target;

    if (number === 3.5) {

        target =
            document.getElementById("calendarPage");

    } else {

        target =
            document.getElementById("page" + number);

    }

    if (target) {

        target.classList.add("active");

    }

}


/* =========================================================
   MUSIC
========================================================= */

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("music");

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play().catch(() => {});

        musicPlaying = true;

    }

}


/* =========================================================
   PASSWORD
========================================================= */

function checkPassword() {

    const input =
        document.getElementById("passwordInput");

    const error =
        document.getElementById("passwordError");

    if (input.value === "081017") {

        error.innerText = "";

        goToPage(3);

        setTimeout(() => {

            goToPage(3.5);

        }, 4500);

    } else {

        error.innerText =
            "Hmm... passwordnya salah";

        input.value = "";

    }

}


/* =========================================================
   ENTER KEY PASSWORD
========================================================= */

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });


/* =========================================================
   FIRST LETTER
========================================================= */

const letter1 = `
Selamat ulang tahun yaa, bess!

Akhirnya resmi tua juga lu HAHAHA

Hari ini adalah hari spesial,
hari di mana 18 tahun yang lalu
lahir seorang manusia
yang sampai sekarang masih aja nyebelin.

Tapi yaudahlah,
berhubung hari ini hari ulang tahun mu,
aku baik dulu. 

Tapi kalau dipikir-pikir...
aku kan orangnya emang baik hati,
ramah, manis, lucu, gak nyebelin,
gak pernah bohong, rajin,
selalu fast respon.

Jadi...
akui aja lah yaaa bess
Jangan gengsi buat ngakuin semuanyaaa 😌☝️
`;

let letter1Started = false;

function openLetter1() {

    const envelope =
        document.getElementById("envelope1");

    const hint =
        document.getElementById("hint1");

    const paper =
        document.getElementById("letter1");

    envelope.style.display = "none";

    hint.style.display = "none";

    paper.style.display = "block";

    if (!letter1Started) {

        letter1Started = true;

        typeWriter(
            "typedLetter1",
            letter1,
            25
        );

    }

}


/* =========================================================
   SECOND LETTER
========================================================= */

const letter2 = `
Sebenarnya aku gak tau harus mulai dari mana,
karena ada banyak hal yang sudah aku omongin.

Tapi satu hal yang pasti,
aku senang pernah ketemu sama kamu.

Manusia anto yang pernah aku temui,
tapi juga seseorang yang akhirnya
punya begitu banyak cerita kecil,
yang sekarang jadi kenangan.

Semoga di umur 18 ini,
kamu menemukan lebih banyak hal
yang membuat kamu bahagia.

Semoga semua yang kamu perjuangkan
pelan-pelan menemukan jalannya,
makin banyak rezekinya,
makin sukses, sehat selalu,
apa yang kamu impikan tercapai,
dan lolos PTN yang kamu mau.
Aamiin. 

Jangan lupa jaga kesehatanmu.
Kalau udah tau capek, istirahat.
Jangan terlalu dipaksain.

Kesehatan itu nomor satu,
karena diri kamu itu berharga.
gak ada gantinya. Asekkk

jadilah diri kamu sendiri,
jangan jadi diri orang lain

Dan kamu harus ingat
kalau ada seseorang dengan tulus
senang melihat kamu bertumbuh,
terus melangkah dan terus bersinar.

Happy 18th birthday, Suci.

See you in the next chapter. 
`;

let letter2Started = false;


/* =========================================================
   PAGE 6 TYPEWRITER
========================================================= */

document
    .getElementById("page6")
    .addEventListener("transitionend", function() {

        if (
            this.classList.contains("active")
            &&
            !letter2Started
        ) {

            letter2Started = true;

            typeWriter(
                "typedLetter2",
                letter2,
                22
            );

        }

    });


/* =========================================================
   TYPEWRITER
========================================================= */

function typeWriter(
    elementId,
    text,
    speed
) {

    const element =
        document.getElementById(elementId);

    element.innerHTML = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            const char =
                text.charAt(index);

            if (char === "\n") {

                element.innerHTML += "<br>";

            } else {

                element.innerHTML += char;

            }

            index++;

            setTimeout(type, speed);

        }

    }

    type();

}


/* =========================================================
   WISH PAGE
========================================================= */

let wishStarted = false;

document
    .getElementById("page7")
    .addEventListener(
        "transitionend",
        function() {

            if (
                this.classList.contains("active")
                &&
                !wishStarted
            ) {

                wishStarted = true;

                startWish();

            }

        }
    );


/* =========================================================
   WISH INTRO
========================================================= */

function startWish() {

    const wishText =
        document.getElementById("wishText");

    const countdown =
        document.getElementById("countdown");

    const button =
        document.getElementById("blowButton");

    button.style.display = "none";

    setTimeout(() => {

        wishText.innerHTML =
            "<p>Make a wish, teman. ♡</p>";

    }, 1500);


    setTimeout(() => {

        wishText.innerHTML =
            "<p>Close your eyes.<br>Think of something you wish for.</p>";

    }, 4000);


    setTimeout(() => {

        countdown.innerText = "3.....";

    }, 6500);


    setTimeout(() => {

        countdown.innerText = "2.....";

    }, 7500);


    setTimeout(() => {

        countdown.innerText = "1.....";

    }, 8500);


    setTimeout(() => {

        countdown.innerText =
            "Sekarang, tiup lilinnya. 🕯️";

        button.style.display =
            "inline-block";

    }, 9500);

}


/* =========================================================
   BLOW CANDLES
========================================================= */

let candlesOff = 0;

function blowCandle() {

    const candles =
        document.querySelectorAll(".candle");

    if (candlesOff < candles.length) {

        const candle =
            candles[candlesOff];

        candle.classList.add("off");

        candlesOff++;

    }

    if (
        candlesOff === candles.length
    ) {

        finishWish();

    }

}


/* =========================================================
   FINISH WISH
========================================================= */

function finishWish() {

    const button =
        document.getElementById("blowButton");

    const result =
        document.getElementById("wishResult");

    const countdown =
        document.getElementById("countdown");

    button.style.display = "none";

    countdown.style.display = "none";

    createConfetti();

    result.style.display = "block";

}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    const symbols = [
        "✦",
        "✧",
        "✨",
        "♡",
        "·"
    ];

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-20px";

        piece.style.fontSize =
            Math.random() * 20 + 10 + "px";

        piece.style.zIndex = "2000";

        piece.style.pointerEvents =
            "none";

        piece.style.animation =
            `fall ${
                Math.random() * 3 + 2
            }s linear forwards`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =========================================================
   DYNAMIC CONFETTI ANIMATION
========================================================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    from {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    to {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);

/* =========================================================
   MEMORY ALBUM
========================================================= */

const albumPages = document.querySelectorAll(".album-page");
const albumPageNumber = document.getElementById("albumPageNumber");
const prevAlbumButton = document.getElementById("prevAlbum");
const nextAlbumButton = document.getElementById("nextAlbum");
const albumContinue = document.getElementById("albumContinue");

let currentAlbum = 0;


/* =========================================================
   SHOW ALBUM
========================================================= */

function showAlbum(index) {

    if (albumPages.length === 0) return;

    /* Batas halaman */
    if (index < 0) {
        currentAlbum = 0;
    } 
    else if (index >= albumPages.length) {
        currentAlbum = albumPages.length - 1;
    } 
    else {
        currentAlbum = index;
    }


    /* Sembunyikan semua halaman */
    albumPages.forEach((page, i) => {

        page.classList.remove("active-album");

        if (i === currentAlbum) {
            page.classList.add("active-album");
        }

    });


    /* Nomor halaman */
    if (albumPageNumber) {

        albumPageNumber.innerText =
            `${currentAlbum + 1} / ${albumPages.length}`;

    }


    /* Tombol PREV */
    if (prevAlbumButton) {

        if (currentAlbum === 0) {
            prevAlbumButton.style.opacity = "0.4";
            prevAlbumButton.disabled = true;
        } 
        else {
            prevAlbumButton.style.opacity = "1";
            prevAlbumButton.disabled = false;
        }

    }


    /* Tombol NEXT */
    if (nextAlbumButton) {

        if (currentAlbum === albumPages.length - 1) {

            nextAlbumButton.style.opacity = "0.4";
            nextAlbumButton.disabled = true;

        } 
        else {

            nextAlbumButton.style.opacity = "1";
            nextAlbumButton.disabled = false;

        }

    }


    /* Tombol lanjut hanya muncul di halaman terakhir */

    if (albumContinue) {

        if (currentAlbum === albumPages.length - 1) {

            albumContinue.style.display = "inline-block";

        } 
        else {

            albumContinue.style.display = "none";

        }

    }

}


/* =========================================================
   NEXT ALBUM
========================================================= */

function nextAlbum() {

    if (currentAlbum < albumPages.length - 1) {

        showAlbum(currentAlbum + 1);

    }

}


/* =========================================================
   PREVIOUS ALBUM
========================================================= */

function previousAlbum() {

    if (currentAlbum > 0) {

        showAlbum(currentAlbum - 1);

    }

}


/* =========================================================
   INITIALIZE ALBUM
========================================================= */

showAlbum(0);