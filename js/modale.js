window.onload = initialisation;

var modale, btnOuverture, btnAnnuler, btnValider, btnFermer, form, page, premierFocus, dernierFocus, fenetre;

function initialisation() {
  btnOuverture = document.getElementById("inscrire");
  btnOuverture.onclick = ouvertureModale;
  btnValider = document.getElementById("valider");
  btnValider.onclick = validation;
  btnAnnuler = document.getElementById("annuler");
  btnAnnuler.onclick = fermetureModale;
  btnFermer = document.getElementById("fermer");
  btnFermer.onclick = fermetureModale;
  fenetre = document.getElementById("fenetre");
  let elementsModale = fenetre.getElementsByTagName('*');
  for (let i = 0, len = elementsModale.length; i < len; i++) {
    if (elementsModale[i].tabIndex >= '0') {
      if(premierFocus === undefined)
        premierFocus = elementsModale[i];
      dernierFocus = elementsModale[i];
    }
  }
  page = document.getElementById("page");
  modale = document.getElementById("modale");
  modale.onkeyup = clavier;
}

function ouvertureModale(e) {
  e.preventDefault();
  form = this.form;
  modale.classList.remove("hidden");
  page.setAttribute("aria-hidden", "true");
  btnFermer.focus();
}

function validation() {
  form.submit();
}

function fermetureModale() {
  page.setAttribute("aria-hidden", "false");
  modale.classList.add("hidden");
  btnOuverture.focus();
}

function clavier(e) {
  switch (e.keyCode) {
    case 27 : fermetureModale(); break; // Echap
    case 9 : deplacement(e); break; // Tab et Shift Tab
  }
}

function deplacement(e) {
  if(!fenetre.contains(document.activeElement)) {
    if(e.shiftKey) {
      dernierFocus.focus();
    } else {
      premierFocus.focus();
    }
  }
}