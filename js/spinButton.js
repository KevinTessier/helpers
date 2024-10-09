class SpinButton extends HTMLElement {
    constructor () {
        super();
        this.min = parseInt(this.getAttribute('min-value'));
        this.max = parseInt(this.getAttribute('max-value'));
        this.arialabel = this.getAttribute('aria-label');
        let div = document.createElement('div');
        
        this.btnMoins = document.createElement('button');
        this.btnMoins.setAttribute('tabindex', '-1');
        this.btnMoins.setAttribute('aria-label', 'moins');
        this.btnMoins.innerHTML = "&#9650;";
        div.append(this.btnMoins);

        this.divPrev = document.createElement('div');
        this.divPrev.setAttribute('aria-hidden', 'true');
        div.append(this.divPrev);

        this.divVal = document.createElement('div');
        this.divVal.setAttribute('role', 'spinbutton');
        this.divVal.setAttribute('tabindex', '0');
        this.divVal.setAttribute('aria-valuemin', this.min);
        this.divVal.setAttribute('aria-valuemax', this.max);
        this.divVal.setAttribute('aria-label', this.arialabel);
        this.divVal.style.fontWeight = 'bolder';
        div.append(this.divVal);

        this.divNext = document.createElement('div');
        this.divNext.setAttribute('aria-hidden', 'true');
        div.append(this.divNext);

        this.btnPlus = document.createElement('button');
        this.btnPlus.setAttribute('tabindex', '-1');
        this.btnPlus.setAttribute('aria-label', 'plus');
        this.btnPlus.innerHTML = "&#9660;";
        div.append(this.btnPlus);

        this.majValeurs(parseInt(this.getAttribute('value')));

        this.divVal.addEventListener("keydown", e => this.clavier(e));
        this.btnMoins.addEventListener("click", e => this.majValeurs(this.val - 1));
        this.btnPlus.addEventListener("click", e => this.majValeurs(this.val + 1));

        this.append(div);
    }

    majValeurs(val) {
        if(val < this.min) {
            this.val = this.max;
        } else if(val > this.max) {
            this.val = this.min;
        } else {
            this.val = val;
        }
        if(this.val === this.min) {
            this.prev = this.max;
        } else {
            this.prev = this.val - 1;
        }
        if(this.val === this.max) {
            this.next = this.min;
        } else {
            this.next = this.val + 1;
        }
        this.divPrev.innerHTML = this.prev;
        this.divVal.setAttribute('aria-valuenow', this.val);
        this.divVal.innerHTML = this.val;
        this.divNext.innerHTML = this.next;
    }

    clavier(e) {
        switch (e.keyCode) {
            case 38 : this.majValeurs(this.val + 1); break; // flèche haut
            case 40 : this.majValeurs(this.val - 1); break; // flèche bas
            case 36 : this.majValeurs(this.min); break; // home
            case 35 : this.majValeurs(this.max); break; // fin
            case 33 : this.majValeurs(this.val + 10); break;// page up
            case 34 : this.majValeurs(this.val - 10); break;// page down
        }
    }
}

window.customElements.define('spin-button', SpinButton);