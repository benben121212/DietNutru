// App.js

// Création d'une instance du composant NavBar
const navBar = new NavBar();

// Obtention de l'élément de la barre de navigation
const navBarElement = navBar.getElement();

// Ajout de l'élément de la barre de navigation au conteneur
const navBarContainer = document.getElementById('navbar-container');
navBarContainer.appendChild(navBarElement);

// Création d'une instance du composant Presentation
const presentation = new Presentation();

// Obtention de l'élément de la présentation
const presentationElement = presentation.getElement();

// Ajout de l'élément de la présentation au conteneur
const presentationContainer = document.getElementById('presentation-container');
presentationContainer.appendChild(presentationElement);

// Création d'une instance du composant Footer
const footer = new Footer();

// Obtention de l'élément du footer
const footerElement = footer.getElement();

// Ajout de l'élément du footer au conteneur
const footerContainer = document.getElementById('footer-container');
footerContainer.appendChild(footerElement);
