class SlideButton extends Composant{

  /**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   * @param {HTMLElement} domTarget  l'endroit où injecter le composant
   */
  constructor(name, domTarget, classname, action){
    super(name, domTarget, "slideButton");
    this.DOM.className = classname;
    this.DOM.onclick = action;
  }

  update(classname){
    this.DOM.className = classname;
  }
}