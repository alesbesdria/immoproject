const showvente = document.querySelector(".vente");
const formsearchvente = document.querySelector(".searchvente");

const showlocation = document.querySelector(".location");
const formsearchlocation = document.querySelector(".searchlocation");

const showviager = document.querySelector(".viager");
const formsearchviager = document.querySelector(".searchviager");

showvente.addEventListener('click', showsearchvente);
showlocation.addEventListener('click', showsearchlocation);
showviager.addEventListener('click', showsearchviager);

function showsearchvente(){
    navshow.classList.show("formsearchvente");
    navshow.classList.hide("formsearchlocation");
    navshow.classList.hide("formsearchviager");
}

function showsearchlocation(){
    navshow.classList.hide("formsearchvente");
    navshow.classList.show("formsearchlocation");
    navshow.classList.hide("formsearchviager");
}

function showsearchviager(){
    navshow.classList.hide("formsearchvente");
    navshow.classList.hide("formsearchlocation");
    navshow.classList.show("formsearchviager");
}