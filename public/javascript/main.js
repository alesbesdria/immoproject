console.log("Script JavaScript chargé !");

const showvente = document.querySelector(".vente");
const formsearchvente = document.querySelector(".searchvente");

const showlocation = document.querySelector(".location");
const formsearchlocation = document.querySelector(".searchlocation");

const showviager = document.querySelector(".viager");
const formsearchviager = document.querySelector(".searchviager");

showvente.addEventListener('click', showsearchvente);
showlocation.addEventListener('click', showsearchlocation);
showviager.addEventListener('click', showsearchviager);

function showsearchvente() {
    formsearchvente.style.display = "block";
    formsearchlocation.style.display = "none";
    formsearchviager.style.display = "none";
}

function showsearchlocation() {
    formsearchvente.style.display = "none";
    formsearchlocation.style.display = "block";
    formsearchviager.style.display = "none";
}

function showsearchviager() {
    formsearchvente.style.display = "none";
    formsearchlocation.style.display = "none";
    formsearchviager.style.display = "block";
}