const botaotema = document.getElementById("theme-toggle");

botaotema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        botaotema.textContent = "🌙";
    } else {
        botaotema.textContent = "☀️";
    }
});
