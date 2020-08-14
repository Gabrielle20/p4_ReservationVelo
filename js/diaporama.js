class Diaporama extends Composant{

  /**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   * @param {HTMLElement} domTarget  l'endroit où injecter le composant
   * @param {Array}       images     la liste des images
   */
  constructor(name, domTarget, images, timeout){
    super(name, domTarget, "diaporama");
    
    this.currentSlideId = -1;
    this.images         = images;
    this.timeout        = timeout;

    this.tempo = setInterval(this.nextSlide.bind(this), this.timeout);
    
    this.slide     = new Slide("imageSlide", this.DOM);
    this.prevtBt   = new SlideButton("Prev", this.DOM);
    this.playPause = new SlideButton("Play/Pause", this.DOM);
    this.nextBt    = new SlideButton("Next", this.DOM);

    this.nextSlide();
  }

  nextSlide(){
    this.currentSlideId++;
    if (this.currentSlideId >= this.images.length) this.currentSlideId = 0;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }

  
}