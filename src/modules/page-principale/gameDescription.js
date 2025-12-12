// Fait par Antoine

//Smash
const smashClick = document.querySelector(".G-Smash");
const smashDescription = document.querySelector(".game-description1");

smashClick.addEventListener("click", () => {
    smashDescription.classList.toggle("smash-description");
});

//Sunshine
const sunClick = document.querySelector(".G-Sun");
const sunDescription = document.querySelector(".game-description2");

sunClick.addEventListener("click", () => {
    sunDescription.classList.toggle("sun-description");
});

//Resident Evil
const re4Click = document.querySelector(".G-RE4");
const re4Description = document.querySelector(".game-description3");

re4Click.addEventListener("click", () => {
    re4Description.classList.toggle("re4-description");
});

//Silent Hill
const silentClick = document.querySelector(".P-Silent");
const silentDescription = document.querySelector(".game-description4");

silentClick.addEventListener("click", () => {
    silentDescription.classList.toggle("silent-description");
});

//GTA
const gtaClick = document.querySelector(".P-GTA");
const gtaDescription = document.querySelector(".game-description5");

gtaClick.addEventListener("click", () => {
    gtaDescription.classList.toggle("gta-description");
});

//Metal Gear
const metalClick = document.querySelector(".P-Metal");
const metalDescription = document.querySelector(".game-description6");

metalClick.addEventListener("click", () => {
    metalDescription.classList.toggle("metal-description");
});

//Gran Turismo
const gt4Click = document.querySelector(".P-Gt4");
const gt4Description = document.querySelector(".game-description7");

gt4Click.addEventListener("click", () => {
    gt4Description.classList.toggle("gt4-description");
});

//Halo
const halo1Click = document.querySelector(".X-Halo1");
const halo1Description = document.querySelector(".game-description8");

halo1Click.addEventListener("click", () => {
    halo1Description.classList.toggle("halo1-description");
});

const halo2Click = document.querySelector(".X-Halo2");
const halo2Description = document.querySelector(".game-description9");

halo2Click.addEventListener("click", () => {
    halo2Description.classList.toggle("halo2-description");
});