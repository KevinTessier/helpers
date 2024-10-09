window.onload = init;

var formulaire, telephoneFixe, telephoneMobile;

function init() {
  formulaire = document.getElementById('formulaire');
  telephoneFixe = document.getElementById('telephoneFixe');
  telephoneMobile = document.getElementById('telephoneMobile');
  formulaire.onsubmit = validation;
}

function validation(e) {
  if(telephoneFixe.value === '' && telephoneMobile.value === '') {
    let erreur = document.createElement('span');
    erreur.setAttribute('role', 'alert');
    erreur.classList.add('erreur');
    erreur.innerText = 'Au moins un numéro de téléphone doit être renseigné';
    erreur.id = 'erreurTelephone';
    telephoneFixe.setAttribute('aria-describedby', erreur.id);
    telephoneMobile.setAttribute('aria-describedby', erreur.id);
    formulaire.insertBefore(erreur, document.getElementById('lblTelephoneFixe'));
    telephoneFixe.focus();
    e.preventDefault();
  } else {
    let erreur = document.getElementById('erreurTelephone');
    if(erreur)
      erreur.remove();
  }
}
