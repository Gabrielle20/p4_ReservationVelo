class map extends Composant {

/**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   * @param {HTMLElement} domTarget  l'endroit où injecter le composant
   */

    constructor(name, domTarget){
        super(name, domTarget, "map");

        this.mymap = L.map('mapid').setView([51.505, -0.09], 13);
    }
}