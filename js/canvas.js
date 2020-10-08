class Canvas extends Composant {
    constructor(domTarget){
        super("canvas", domTarget, "canvas");
        veloReservation = this;
        // this.mouseMvt = new MouseEvent(click);
        this.clickX;
        this.clickY;
        this.clickDrag;
        this.paint;
        this.mousedown();
        this.mouseleave();
        this.addClick();
        this.redraw();
    }

    // Canvas Souris
    mousedown(e) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - offsetTop);
        redraw();
    }

    mouseleave() {
        paint = false;
    }

    addClick (x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    redraw() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); //Nettoie le canvas

        context.strokeStyle = "#df4b26";
        context.lineJoin = "round";
        context.lineWidth = 5;

        for (var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i) {
                context.moveTo(clickX[i-1], clickY[i-1]);
            }
            else  {
                context.moveTo(clickX[i]-1, clickY[i]);
            }

            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }

    //Canvas Tactile
    // startup() {
    //     var el = document.getElementsByTagName("canvas")[0];
    //     el.addEventListener("touchstart", handleStart, false);
    //     el.addEventListener("touchend", handleEnd, false);
    //     el.addEventListener("touchcancel", handleCancel, false);
    //     el.addEventListener("touchleave", handleLeave, false);
    //     el.addEventListener("touchmove", handleMove, false);
    //   }
}

