// NavBar.js

// Définition du composant NavBar
class NavBar {
    constructor() {
      // Création de l'élément de la barre de navigation
      this.navBarElement = document.createElement('nav');
      this.navBarElement.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
  
      // Contenu de la barre de navigation
      this.navBarElement.innerHTML = `
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <a class="navbar-brand" href="#">
            <img src="images/nutritioniste_dietitienne-logo.png" alt="Logo du projet" class="navbar-logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadContent('sections/presentation.html')">Présentation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadContent('sections/recettes.html')">Recettes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadContent('sections/contact.html')">Contact</a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn btn-secondary" href="#" onclick="loadContent('sections/inscription.html')">Inscription</a>
              </li>
              <li class="nav-item ms-2">
                <a class="nav-link btn btn-primary" href="#" onclick="loadContent('sections/connexion.html')">Connexion</a>
              </li>
            </ul>
          </div>
        </div>
      `;
    }
  
    // Méthode pour obtenir l'élément de la barre de navigation
    getElement() {
      return this.navBarElement;
    }
  }
  
  // Création d'une instance du composant NavBar
  const navBar = new NavBar();
  
  // Obtention de l'élément de la barre de navigation
  const navBarElement = navBar.getElement();
  
  // Ajout de l'élément de la barre de navigation au conteneur
  const navBarContainer = document.getElementById('navbar-container');
  navBarContainer.appendChild(navBarElement);
  