class SlideButton extends Composant{

  /**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   * @param {HTMLElement} domTarget  l'endroit où injecter le composant
   */
  constructor(name, domTarget){
    super(name, domTarget, "button");
    this.DOM.innerHTML = name;
  }
}