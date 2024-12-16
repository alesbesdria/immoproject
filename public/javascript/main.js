
const showvente = document.querySelector(".vente");
const formsearchvente = document.querySelector(".searchvente");

const showlocation = document.querySelector(".location");
const formsearchlocation = document.querySelector(".searchlocation");

const showviager = document.querySelector(".viager");
const formsearchviager = document.querySelector(".searchviager");

const mefform = document.querySelectorAll(".mefform");

showvente.addEventListener('click', showsearchvente);
showlocation.addEventListener('click', showsearchlocation);
showviager.addEventListener('click', showsearchviager);

function initializeForms() {
    formsearchvente.style.display = "flex"; 
    formsearchlocation.style.display = "none";
    formsearchviager.style.display = "none";
}

function showsearchvente() {
    formsearchvente.style.display = "flex";
    formsearchlocation.style.display = "none";
    formsearchviager.style.display = "none";
}

function showsearchlocation() {
    formsearchvente.style.display = "none";
    formsearchlocation.style.display = "flex";
    formsearchviager.style.display = "none";
}

function showsearchviager() {
    formsearchvente.style.display = "none";
    formsearchlocation.style.display = "none";
    formsearchviager.style.display = "flex";
}

initializeForms();




// //////////////////////////////////

// Sélectionne les cases à cocher et la div où afficher les résultats
const checkboxes = document.querySelectorAll('.senscase input[type="checkbox"]');
const selectedTypesDiv = document.getElementById('selectedTypes');

// Fonction pour mettre à jour la liste des options sélectionnées
function updateSelectedTypes() {
    // Récupère les cases cochées
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Met à jour le contenu de la div
    if (selectedValues.length > 0) {
        selectedTypesDiv.textContent = `${selectedValues.join(', ')}`;
    } else {
        selectedTypesDiv.textContent = "Aucune sélection";
    }
}

// Ajoute un écouteur d'événement à chaque case à cocher
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedTypes);
});

// Initialise avec un état vide au chargement
updateSelectedTypes();