const botaotema = document.getElementById("theme-toggle");
const temaSalvo = localStorage.getItem("tema");
if(temaSalvo==="escuro"){
    document.body.classList.add("dark-mode");
    botaotema.textContent = "🌙";
}



botaotema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        botaotema.textContent = "🌙";
        localStorage.setItem("tema", "escuro");
    } else {
        botaotema.textContent = "☀️";
        localStorage.setItem("tema", "claro");
    }
});
