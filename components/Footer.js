// Footer.js

class Footer {
    constructor() {
      this.footerElement = document.createElement('div');
      this.footerElement.classList.add('container');
  
      this.footerElement.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <ul class="footer-nav d-flex justify-content-between list-unstyled">
              <li class="nav-item">
                <a class="nav-link fs-6" href="#" onclick="loadContent('sections/mentions_legales.html')">Mentions légales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-6" href="#" onclick="loadContent('sections/politique_confidentialite.html')">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- Contenu du footer -->
          </div>
        </div>
      </div>
      `;
    }
  
    getElement() {
      return this.footerElement;
    }
  }
  
  // Création d'une instance du composant Footer
  const footer = new Footer();
  
  // Obtention de l'élément du footer
  const footerElement = footer.getElement();
  
  // Ajout de l'élément du footer au conteneur du footer
  const footerContainer = document.getElementById('footer-container');
  footerContainer.appendChild(footerElement);
  