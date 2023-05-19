
//!Charger le contenu de la page de présentation !//

// Sélectionner l'élément conteneur
var dynamicContent = document.getElementById('dynamic-content');

// Créer une instance de l'objet XMLHttpRequest
var xhr = new XMLHttpRequest();

// Définir la fonction de rappel lorsque la requête est terminée
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Mettre le contenu de la réponse dans l'élément conteneur
    dynamicContent.innerHTML = xhr.responseText;
  }
};

// Envoyer la requête GET pour charger le contenu de presentation.html
xhr.open('GET', 'sections/presentation.html', true);
xhr.send();
