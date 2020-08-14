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
    
    this.prevtBt   = new SlideButton("Prev", this.DOM);
    this.playPause = new SlideButton("Play/Pause", this.DOM);
    this.nextBt    = new SlideButton("Next", this.DOM);

    this.render();
    this.DOM.onclick = this.click.bind(this);
  }

  render(){
   if(this.nextBt.onclick) return this.nextSlideBtn();
   if(this.playPause.onclick) return this.playPauseBtn();
   if(this.prevtBtn.onclick) return this.prevSlideBtn();
  }

  click(){
    console.log(this);
        this.state = !this.state;
        this.render();
  }

  nextSlideBtn(){
    this.currentSlideId++;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }

  playPauseBtn(){
    this.currentSlideId++;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }

  prevSlideBtn(){
    this.currentSlideId++;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }

  // onkeypress
  // onkeydown
  // onkeyup

}