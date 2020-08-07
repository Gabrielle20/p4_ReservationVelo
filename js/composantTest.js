class ComposantTest extends Composant{
    constructor(name, domTarget){
        super(name, domTarget, "nouveauTest");
        this.state = true;
        this.render();
        this.DOM.onclick = this.click.bind(this);
    }
    
    render(){
        if(this.state) return this.DOM.innerHTML = this.templateTrue();
        this.DOM.innerHTML = this.templateFalse();
    }

    click(){
        console.log(this);
        this.state = !this.state;
        this.render();
    }

    templateTrue(){
        this.DOM.className = "true";
        return `
            <button>${this.name}</button>
        `;
    }

    templateFalse(){
        this.DOM.className = "pastrue";
        return `
            <div class="maClasse">----------</div>
        `;
    }
        
}