/***objet App */


const app = {
  numberCellules: 64,
  pixelSize: 15,
  widthInvaderContainer: 120 + "px",
  colorSelect: "defaultPixel",
  classStyleDefault: "defaultPixel",
  classStyleSelected: this.classStyleDefault,
  initHeader() {
    /** Récupérer l'élément body */
    const bodyElement = document.querySelector('body');

    /** Créé l'élément header */
    const headerElement = document.createElement('header');

    /**Récupère l'élément formulaire de la page HTML */
    const formulaireElement = document.querySelector('.configuration');
    /** Insert le header dans la page */
    bodyElement.prepend(headerElement);

    /** Insert le formulaire dans le header */
    headerElement.append(formulaireElement);

    /** Insert les éléments input et button dans le formulaire */
    const inputElementGridSize = this.createInputElement("Taille de la grille");
    const inputElementPixel = this.createInputElement("Taille des pixels");

    /** Element button submit */
    const buttonElement =  document.createElement('button');
    buttonElement.setAttribute('type', 'submit');
    buttonElement.innerText = "Valider";

    formulaireElement.append(inputElementGridSize);
    formulaireElement.append(inputElementPixel);

    formulaireElement.append(buttonElement);

    formulaireElement.addEventListener('submit', app.submitFormHandler.bind(app));
  },
  initMain() {
    /** Element div container de invader */
    const divElementContainer = document.createElement('div'); 
    divElementContainer.classList.add('container');
    
    const scriptTag = document.querySelector('script');

    /** Insert le container dans la page */
    scriptTag.insertAdjacentElement('beforebegin',divElementContainer);
  
    /** Récupère l'élément Invader */
    const invaderContainer = document.querySelector('#invader');
  
    /** Insert la <div> #invader dans la container */
    divElementContainer.append(invaderContainer);
      
    /** Créé l'élément <ul> colorPicker */
    const ulElementBuilds = this.createUlElement();

    /** Injecter l'élément <ul> dans le DOM */
    divElementContainer.insertAdjacentElement('afterend', ulElementBuilds);
    
    /** Crée les <li> et les injecte dans le <ul> */
    this.createAndInjectLiElement(ulElementBuilds);
  },
  submitFormHandler(event) {
    const invaderContainer = document.querySelector('#invader');

    event.preventDefault();
    const gridSize =  Number(event.target[0].value);
    this.numberCellules = gridSize * gridSize;
    this.pixelSize = Number(event.target[1].value);
    invaderContainer.innerHTML = "";
  
    this.setGridWidth();
    this.injectCells();
  },
  createUlElement() {
    const colorPickerElement = document.createElement('ul');
    colorPickerElement.classList.add('colorPickerContainer');
    return colorPickerElement;
  },
  createAndInjectLiElement(ulElement) {
    const NUMBER_COLOR = 4;
    for(let i = 0; i < NUMBER_COLOR; i++) {
      const colorElement = document.createElement('li');
    
      colorElement.classList.add(`color${i}`);
      colorElement.addEventListener('click', this.choiceColorHandler.bind(this));
      ulElement.append(colorElement);
    };
  },
  pixelElement(size,classStyle ) {
    const pixelElement = document.createElement('div');
    pixelElement.style.height = size + "px";
    pixelElement.style.width = size + "px";
    pixelElement.classList.add(classStyle);
    return pixelElement;
  },
  /** Injection des cellules */
  injectCells() {
    const invaderContainer = document.getElementById('invader'); 

    for(let i = 0; i < this.numberCellules; i++) {
      const elementHTML = this.pixelElement(this.pixelSize,this.classStyleDefault);

      elementHTML.addEventListener('click', this.changeColorHandler.bind(this));

      invaderContainer.append(elementHTML);
    };
  },
  /** Donne une largeur à la grille en fonction du nombre de cellules et de leur taille */
  setGridWidth() {
    const invaderContainer = document.getElementById('invader');

    this.widthInvaderContainer = Math.sqrt(this.numberCellules) * this.pixelSize;

    invaderContainer.style.width = `${this.widthInvaderContainer}px`;
  },
  /** Crée un élement input de type number avec un placeholder */
  createInputElement(inputPlaceholder) {
    const inputElement = document.createElement('input');
    inputElement.placeholder = inputPlaceholder;
    inputElement.setAttribute('type', 'number');
  
    return inputElement;
  },
   changeColorHandler(event) {
    const listOfClasses = event.target.classList;
    console.log(listOfClasses)
    // const getCurrentColor = event.target.className;
  
    if(listOfClasses.length > 1) {
        event.target.className = this.classStyleDefault;
        event.target.classList.add(this.classStyleSelected);
    } else {
        event.target.classList.add(this.classStyleSelected);
    };
  },
  choiceColorHandler(event) {
    this.classStyleSelected = event.target.className; 
  },
  init() {
    this.initHeader();
    this.initMain();
    this.setGridWidth();
    this.injectCells();
  }
};

window.addEventListener('DOMContentLoaded', app.init());
