class ComposantTest2 extends Composant{
    constructor(name, domTarget){
        super(name, domTarget, "bidule");
        this.render();
    }
    
    render(){
        this.DOM.innerText = demo.dataHandler.data[0].nom;
    }

    click(){
    }

        
}