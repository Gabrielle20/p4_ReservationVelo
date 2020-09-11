class Composant{
    constructor(name, domTarget, tagName){
        veloReservation[name] = this;
        this.name = name;
        this.DOM = document.createElement(tagName);
        domTarget.appendChild(this.DOM);
    }
}