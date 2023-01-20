const btn = document.querySelector(".boton");
const text = document.querySelector(".leer-mas");
const wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", e => {
    text.classList.toggle("leer-mas_open");
    text.classList.contains("leer-mas_open") ? btn.innerHTML = "Mostrar Menos" : btn.innerHTML = "Mostrar Más";
});
