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
    this.tempo          = setInterval(this.nextSlide.bind(this), this.timeout);
    this.playing        = true;
    
    this.slide       = new Slide("imageSlide", this.DOM);
    this.prevtBt     = new SlideButton("Prev", this.DOM, "prev", this.prevSlide.bind(this));
    this.playPauseBt = new SlideButton("Play/Pause", this.DOM, "pause", this.playPause.bind(this));
    this.nextBt      = new SlideButton("Next", this.DOM, "next", this.nextSlide.bind(this));
    this.nextSlide();
  }

  nextSlide(){
    // console.log(this);
    this.currentSlideId++;
    if (this.currentSlideId >= this.images.length) this.currentSlideId = 0;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }

  prevSlide(){
    this.currentSlideId--;
    if (this.currentSlideId <= this.images.length) this.currentSlideId = 0;
    console.log(this.currentSlideId);
    this.slide.update(this.images[this.currentSlideId]);
  }


  playPause(){
    console.log(this);
    this.playing = !this.playing;
    if(this.playing){
      //arreter la tempo   
      clearInterval(this.tempo);
      delete this.tempo;
      clearTimeout();
      delete this.timeout;
      this.playPauseBt.update("play");
    }
    else {
      this.tempo = setInterval(this.nextSlide.bind(this), this.timeout);
      this.playPauseBt.update("pause");
    }

  }



  //Touches du clavier
  window.addEventListener('keyup', (e)) => {
    switch (e.key) {
      case 'ArrowLeft': 
        prevSlide = prevSlide.bind(this);
        break;

      case 'ArrowRight':
        nextSlide = nextSlide.bind(this);
        break;
    }
  }

  // onkeypress
  // onkeydown
  // onkeyup

  
}