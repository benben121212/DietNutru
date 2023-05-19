// Presentation.js

// Définition du composant Presentation
class Presentation {
    constructor() {
      // Création de l'élément de la présentation
      this.presentationElement = document.createElement('div');
      this.presentationElement.classList.add('container');
  
      // Contenu de la présentation
      this.presentationElement.innerHTML = `
        <div class="row">
          <div class="col">
            <h1>Présentation</h1>
            <p class="lead mt-4">Sandrine Coupart est une diététicienne-nutritionniste dont le cabinet est situé à Caen. En tant que professionnelle de santé, elle prend en charge des patients dans le cadre de consultations diététiques. Madame Coupart anime également des ateliers de prévention et d’information sur la nutrition.</p>
            <p>Son fonctionnement habituel était de transmettre par email à ses patients des recettes santé. N’ayant pas de site web, elle voulait profiter de l’occasion pour partager, à l’avenir, quelques-unes de ses recettes à un plus grand nombre de visiteurs. De plus, madame Coupart désire qu’il y ait un système d’authentification sur son site, afin de proposer pour chaque patient des recettes supplémentaires adaptées à son régime.</p>
            <img src="/images/dieteticienne_nutritionniste.jpg" alt="Image de présentation" class="img-fluid">
          </div>
        </div>
      `;
    }
  
    // Méthode pour obtenir l'élément de la présentation
    getElement() {
      return this.presentationElement;
    }
  }
  
  // Création d'une instance du composant Presentation
  const presentation = new Presentation();
  
  // Obtention de l'élément de la présentation
  const presentationElement = presentation.getElement();
  
  // Ajout de l'élément de la présentation au conteneur dynamique
  const dynamicContentContainer = document.getElementById('presentation-container');
  dynamicContentContainer.classList.add('my-5'); // Ajout d'une marge en haut et en bas
  dynamicContentContainer.appendChild(presentationElement);
  