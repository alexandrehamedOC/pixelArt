
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

/** Element input nombre de pixel grid */
const inputElementPixel = document.createElement('input');

/** Element button submit */
const buttonElement =  document.createElement('button');
buttonElement.innerText = "Valider";


/** Insert les éléments dans la page, dans le parent Header */
document.querySelector('body').prepend(headerElement);

headerElement.append(formulaireElement);
formulaireElement.append(inputElementGridSize);
formulaireElement.append(inputElementPixel);
formulaireElement.append(buttonElement);

/** Ajoute de class pour centrer les élément */
/* invaderContainer.classList.add('');
formulaireElement.classList.add(''); */

/**Constructor d'un objet Pixel */
const NOMBRE_CELLULE = 64;

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
  const elementHTML = pixelElement(8,'defaultPixel');
  console.log(elementHTML);
  invaderContainer.append(elementHTML);
}


