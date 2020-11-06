class Canvas {
  constructor() {
    this.DOM = document.querySelector("canvas");
    veloReservation.canvas = this;
    // this.DOM.height        = "400";
    // this.DOM.width         = "200";
    this.clickDrag         = [];
    this.context           = this.DOM.getContext('2d');
    this.paint             = false;
    this.previousClickX    = null;
    this.previousClickY    = null;
    this.rect              = this.DOM.getBoundingClientRect();
    this.clicked = false;

    this.DOM.onclick = null;

    this.DOM.onmousedown   = this.mouseDown.bind(this);
    this.DOM.onmousemove   = this.mouseMove.bind(this);
    this.DOM.onmouseup     = this.mouseleave.bind(this);

    this.DOM.ontouchcancel = this.mouseleave.bind(this);
    this.DOM.ontouchend    = this.mouseleave.bind(this);
    this.DOM.ontouchleave  = this.mouseleave.bind(this);
    this.DOM.ontouchmove   = this.handleMove.bind(this);
    this.DOM.ontouchstart  = this.handleStart.bind(this);
  }

  handleStart(evt) {
    evt.preventDefault();
    this.paint = true;
    const position = this.convertCoordTouch(evt);
    this.draw(position.x, position.y);
  }
  handleMove(evt) {
    evt.preventDefault();
    if (!this.paint) return;
    const position = this.convertCoordTouch(evt);
    this.draw(position.x, position.y);
  }

  // Canvas Souris
  mouseDown(e) {
    const position = this.convertCoordMouse(e);
    this.paint = true;
    this.clicked = true;
    this.draw(position.x, position.y);
  }

  mouseMove(e) {
    if (!this.paint) return;
    const position = this.convertCoordMouse(e);
    this.draw(position.x, position.y);
  }

  convertCoordTouch(e) {
    return {
      x: e.changedTouches[0].pageX - this.rect.left,
      y: e.changedTouches[0].pageY - this.rect.top
    }
  }
  convertCoordMouse(e) {
    return {
      x: e.clientX - this.rect.left,
      y: e.clientY - this.rect.top
    }
  }

  draw(mouseX, mouseY) {
    console.log(mouseX, mouseY);
    if (this.previousClickX !== null) {
      this.context.beginPath();
      this.context.strokeStyle = 'black';
      this.context.lineWidth = 1;

      this.context.moveTo(this.previousClickX, this.previousClickY);
      this.context.lineTo(mouseX, mouseY);
      this.context.stroke();
      this.context.closePath();
    };
    this.previousClickX = mouseX;
    this.previousClickY = mouseY;
  }

  mouseleave() {
    this.paint = false;
    this.previousClickX = null;
    this.previousClickY = null;
  }

  addClick(x, y, dragging = null) {
    this.clickX = x;
    this.clickY = y;
    this.clickDrag.push(dragging);
  }

  redraw() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); //Nettoie le canvas

    this.context.strokeStyle = "#df4b26";
    this.context.lineJoin = "round";
    this.context.lineWidth = 5;

    for (var i = 0; i < this.clickX.length; i++) {
      this.context.beginPath();
      if (this.clickDrag[i] && i) {
        this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      }
      else {
        this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
      }

      this.context.lineTo(this.clickX[i], this.clickY[i]);
      this.context.closePath();
      this.context.stroke();
    }
  }
}

