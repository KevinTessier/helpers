window.onload = init;

var cp;

function init() {
  cp = document.getElementById('cpLivraison');
  cp.onchange = rechercherVilles;
}

function rechercherVilles() {
  ajax('https://apicarto.ign.fr/api/codes-postaux/communes/'+cp.value, function() {
    let chpVille = document.getElementById('villeLivraison');
    let parent = chpVille.parentElement;
    let newchpVille;
    let erreur = document.getElementById('erreur'+cp.id);
    if(this.status === 200) {
      if(erreur)
        erreur.remove();
      newchpVille = document.createElement('select');
      let villes = JSON.parse(this.responseText);
      villes.forEach(ville => {
        let option = document.createElement('option');
        option.value = ville.nomCommune;
        option.textContent = ville.nomCommune;
        newchpVille.appendChild(option);
      });
    } else if(!erreur) {
      erreur = document.createElement('span');
      erreur.textContent = 'Ce code postal n\'existe pas';
      erreur.classList.add('erreur');
      erreur.setAttribute('role', 'alert');
      erreur.id = 'erreur' + cp.id;
      cp.setAttribute('aria-describedby', erreur.id);
      parent.insertBefore(erreur, cp);
      
      newchpVille = document.createElement('input');
      newchpVille.type = 'text';
    }
    newchpVille.id = chpVille.id;
    newchpVille.name = chpVille.name;
    newchpVille.required = chpVille.required;
    parent.replaceChild(newchpVille, chpVille);
    newchpVille.focus();
  });
}

function ajax(url, callbackfunction, method='GET') {
  let req = new XMLHttpRequest();
  req.open(method, url, true);
  req.onload = callbackfunction;
  req.send();
}
