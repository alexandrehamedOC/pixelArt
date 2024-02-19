/** Récupérer l'éléemnt body */
const bodyElement = document.querySelector('body');

/**
 * Récupère l'élément formulaire de la page HTML
 */
const formulaireElement = document.querySelector('.configuration');

/** Récupère l'élément Invader */
const invaderContainer = document.querySelector('#invader');


/**
 * Créé l'élément header
 */
const headerElement = document.createElement('header');

/** Element input taille de la grid */
const inputElementGridSize = document.createElement('input');
inputElementGridSize.placeholder = "Taille de la grille";

/** Element input nombre de pixel grid */
const inputElementPixel = document.createElement('input');
inputElementPixel.placeholder = "Taille des pixels";


/** Element button submit */
const buttonElement =  document.createElement('button');
buttonElement.innerText = "Valider";

/** Element div container de invader */
const divElementContainer = document.createElement('div'); 
divElementContainer.classList.add('container');

/** Insert le header dans la page */
bodyElement.prepend(headerElement);

/** Insert les éléments dans la page, dans le parent Header */
headerElement.append(formulaireElement);
formulaireElement.append(inputElementGridSize);
formulaireElement.append(inputElementPixel);
formulaireElement.append(buttonElement);


/** Insert le container dans la page */
bodyElement.append(divElementContainer);

/** Insert invader dans la container */
divElementContainer.append(invaderContainer);

/** Ajoute de class pour centrer les élément */
/* invaderContainer.classList.add('');
formulaireElement.classList.add(''); */

const NOMBRE_CELLULE = 64;
const WIDTH_INVADER_CONTAINER = 120 + "px";
invaderContainer.style.width = WIDTH_INVADER_CONTAINER;

// Création de l'element HTML
function pixelElement(size,classStyle ) {
  // Création de lélément
  const pixelElement = document.createElement('div');
  pixelElement.style.height = size +"px";
  pixelElement.style.width = size +"px";
  pixelElement.classList.add(classStyle);
  return pixelElement;
}

for(let i = 0; i < NOMBRE_CELLULE; i++) {
  // Injecter les éléments 
  const elementHTML = pixelElement(15,'defaultPixel');

  elementHTML.addEventListener('click', changeColorHandler);
  invaderContainer.append(elementHTML);
}

/**Event*/


//change color
function changeColorHandler (event){
    console.log(event.target);
    const getCurrentColor = event.target.className;

    if(getCurrentColor === "defaultPixel"){
        event.target.className="blackPixel";
    }
    else{
        event.target.className="defaultPixel";
    }
}


