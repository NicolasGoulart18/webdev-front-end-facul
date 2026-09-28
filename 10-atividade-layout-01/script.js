const botaotema = document.getElementById("theme-toggle");
const temaSalvo = localStorage.getItem("tema");
const somTema = new Audio("assets/Fahhhh.mp3");

if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
    botaotema.textContent = "🌙";
}

botaotema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    somTema.currentTime = 0;
    somTema.play();

    if (document.body.classList.contains("dark-mode")) {
        botaotema.textContent = "🌙";
        localStorage.setItem("tema", "escuro");
    } else {
        botaotema.textContent = "☀️";
        localStorage.setItem("tema", "claro");
    }
});
