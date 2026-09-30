const botaotema = document.getElementById("theme-toggle");
const temaSalvo = localStorage.getItem("tema");
const somTema = new Audio("./assets/Fahhhh.mp3");

somTema.preload = "auto";
somTema.volume = 1;

if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
    botaotema.textContent = "Modo Claro";
}

botaotema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    somTema.pause();
    somTema.currentTime = 0;

    somTema.play().catch(function (erro) {
        console.error("Não foi possível reproduzir o som:", erro);
    });

    if (document.body.classList.contains("dark-mode")) {
        botaotema.textContent = "Modo Claro";
        localStorage.setItem("tema", "escuro");
    } else {
        botaotema.textContent = "Modo Escuro";
        localStorage.setItem("tema", "claro");
    }
});

const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
       
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});