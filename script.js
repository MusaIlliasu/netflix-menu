const menuBtn = document.querySelector("#menu");
const closeNav = document.querySelector(".close_menu");
const whiteLayer = document.querySelector(".white_layer");
const redLayer = document.querySelector(".red_layer");
const blackLayer = document.querySelector(".black_layer");

menuBtn.addEventListener("click", () => {
    blackLayer.classList.add("show");
    blackLayer.style.transitionDelay = "0s";
    redLayer.classList.add("show");
    redLayer.style.transitionDelay = "0.2s";
    whiteLayer.classList.add("show");
    whiteLayer.style.transitionDelay = "0.4s";
});

closeNav.addEventListener("click", () => {
    whiteLayer.classList.remove("show");
    whiteLayer.style.transitionDelay = "0s";
    redLayer.classList.remove("show");
    redLayer.style.transitionDelay = "0.2s";
    blackLayer.classList.remove("show");
    blackLayer.style.transitionDelay = "0.4s";
});
