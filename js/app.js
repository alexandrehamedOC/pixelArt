
/******** RECUPERATION DES ELEMNTS HTML **********/

/** Récupérer l'élément body */
const bodyElement = document.querySelector('body');

/**Récupère l'élément formulaire de la page HTML */
const formulaireElement = document.querySelector('.configuration');

/** Récupère l'élément Invader */
const invaderContainer = document.querySelector('#invader');


/*************** CREATION DES ELEMENTS HTML ************/
/** Créé l'élément header */
const headerElement = document.createElement('header');

/** Element input taille de la grid */
const inputElementGridSize = document.createElement('input');
inputElementGridSize.placeholder = "Taille de la grille";
inputElementGridSize.setAttribute('type', 'number');
// inputElementGridSize.setAttribute('min', '8');
// inputElementGridSize.setAttribute('max', '20');

/** Element input nombre de pixel grid */
const inputElementPixel = document.createElement('input');
inputElementPixel.placeholder = "Taille des pixels";
inputElementPixel.setAttribute('type', 'number');
// inputElementPixel.setAttribute('min', '15');
// inputElementPixel.setAttribute('max', '35');

/** Element button submit */
const buttonElement =  document.createElement('button');
buttonElement.innerText = "Valider";

/** Element div container de invader */
const divElementContainer = document.createElement('div'); 
divElementContainer.classList.add('container');

/** Créé l'élément <ul> colorPicker */
const colorPickerElement = document.createElement('ul');
colorPickerElement.classList.add('colorPickerContainer');


/*********** FUNCTIONS  *********/
/** Création de la cellule */
function pixelElement(size,classStyle ) {
  const pixelElement = document.createElement('div');
  pixelElement.style.height = size +"px";
  pixelElement.style.width = size +"px";
  pixelElement.classList.add(classStyle);
  return pixelElement;
}

/** Injection des cellules */
function injectCells(numberCellules, pixelSize) {
  for(let i = 0; i < numberCellules; i++) {
    const elementHTML = pixelElement(pixelSize,'defaultPixel');
    elementHTML.addEventListener('click', changeColorHandler);
    invaderContainer.append(elementHTML);
  };
}


/*********** EVENTS **************/

/** Sélectionner la couleur */
function choiceColorHandler (event){
  classStyleSelected = event.target.className; 
}

/** Changer la couleur au click */
// function changeColorHandler (event){
//   const getCurrentColor = event.target.className;
//   console.log(getCurrentColor);

//     console.log(event.target.className)
//     if(getCurrentColor === "defaultPixel"){
//         event.target.className="blackPixel";
//     }
//     else{
//         event.target.className="defaultPixel";
//     }
// }
function changeColorHandler (event){
  const listOfClasses = event.target.classList;
  const getCurrentColor = event.target.className;
  if(listOfClasses.length > 1){
      event.target.className = classStyleDefault;
      event.target.classList.add(classStyleSelected);
    }
    else{
      event.target.classList.add(classStyleSelected);
  };
}

/** Récupère les informations à la validation du formulaire */
function submitFormHandler (event){
  event.preventDefault();
  numberCellules = Number(event.target[0].value) * Number(event.target[0].value);
  pixelSize = Number(event.target[1].value);
  invaderContainer.innerHTML ="";
  setGridWidth(numberCellules, pixelSize);
  injectCells(numberCellules, pixelSize);
}

/** Donne une largeur à la grille en fonction du nombre de cellules et de leur taille */
function setGridWidth (numberCellules, pixelSize){
  widthInvaderContainer = Math.sqrt(numberCellules) * pixelSize;
  invaderContainer.style.width = `${widthInvaderContainer}px`;
}


/************ CODE ***********/
let numberCellules = 64;
let pixelSize = 15;
let widthInvaderContainer = 120 + "px";
let colorSelect ="defaultPixel";

let classStyleDefault ="defaultPixel";
let classStyleSelected = classStyleDefault;


/** Insert le header dans la page */
bodyElement.prepend(headerElement);

/** Insert le formulaire dans le header */
headerElement.append(formulaireElement);

/** Insert les éléments input et button dans le formulaire */
formulaireElement.append(inputElementGridSize);
formulaireElement.append(inputElementPixel);
formulaireElement.append(buttonElement);

formulaireElement.addEventListener('submit', submitFormHandler);

/** Insert le container dans la page */
headerElement.insertAdjacentElement('afterend',divElementContainer);

/** Insert la <div> #invader dans la container */
divElementContainer.append(invaderContainer);


/****** Création de la grille */
/** Injection des cellules */
injectCells(numberCellules, pixelSize);


/***** Création des bouttons  */
/** Injecter l'élément <ul> dans le DOM */
divElementContainer.insertAdjacentElement('afterend', colorPickerElement);

/** Créé les <li> color de l'élément <ul> */
const NUMBER_COLOR = 4;
for(let i = 0; i < NUMBER_COLOR; i++) {
  const colorElement = document.createElement('li');

  colorElement.classList.add(`color${i}`);
  colorElement.addEventListener('click', choiceColorHandler);
  colorPickerElement.append(colorElement);
};




