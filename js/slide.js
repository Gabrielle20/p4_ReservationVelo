class Slide extends Composant{

  /**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   * @param {HTMLElement} domTarget  l'endroit où injecter le composant
   */
  constructor(name, domTarget){
    super(name, domTarget, "slide");
  }

  render(){

  }

  /**
   * change l'image affichée
   * @param {string} newImage l'url de la nouvelle image
   * @returns {void}
   */
  update(newImage){
    this.DOM.style.backgroundImage= `url("${newImage}")`;
  }
}