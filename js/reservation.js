class Reservation extends Composant {

  booking = {};
  bookingDuration;
  user;

  constructor(domTarget, bookingDuration) {
    super("reservation", domTarget, "reservation");
    // veloReservation.reservation = this;
    this.booking = veloReservation.dataHandler.getBookingFromSessionStorage();
    this.user = veloReservation.dataHandler.getUserFromLocalStorage();
    this.bookingDuration = bookingDuration;
    console.log(this.booking);
    if (this.booking !== null) {
      this.render();
    }
  }

  // newBooking(standNumber) {
  //   console.log("newBooking", standNumber);
  //   this.booking.address = veloReservation.dataHandler.data[standNumber].address;
  //   this.available_bike_stands =
  //     veloReservation.dataHandler.data[standNumber].available_bike_stands;
  //   this.available_bikes =
  //     veloReservation.dataHandler.data[standNumber].available_bikes;
  //   this.booking.stationInformation = standNumber;
  //   this.render();
  // }

  render() {
    this.DOM.innerHTML = `
    <h4>DÉTAILS DE RÉSERVATION :</h4>
      <p>Adresse : ${this.booking.address}</p>
      <i class="fas fa-parking"> : ${this.available_bike_stands}</i> | <i class="fas fa-bicycle"> : ${this.available_bikes}</i><br/><br/>
      <label for="">Nom :</label><input type="text" id="name" name="name" id="name" value="${this.user.name}" placeholder="saisissez votre nom" required><br/>
      <label for="">Prénom :</label><input type="text" id="firstName" name="firstName" id="firstName" value="${this.user.firstName}" placeholder="saisissez votre prénom" required><br/><br/>
      <canvas></canvas><br>
      <button onclick="veloReservation.reservation.click()">Réserver</button>
      ${this.bookingText}
    `;

    new Canvas();
  }

  get bookingText(){
    if (this.booking.timestamp === undefined) return '';
    return `<p>Votre réservation prendra fin dans ${this.booking.timestamp}</p>`;
  }

  click() {
    if (veloReservation.canvas.clicked === false) {
      alert("il faut signer");
      return;
    }
    this.user = {
      firstName: document.querySelector("#firstName").value,
      name: document.querySelector("#name").value,
    };
    this.booking.timestamp = new Date().addMinutes(this.bookingDuration);
    this.booking.address = "jkljkljlkjlkj";
    this.booking.stationInformation = "kkkkùklmk";

    veloReservation.dataHandler.setUser(this.user);
    veloReservation.dataHandler.setBooking(this.booking);
    console.log(this);

    // let newP = document.createElement('p');
    // newP.textContent = "Votre réservation prendra fin dans ".this.booking.timestamp;

    this.updateCountdown();
    this.tempo = setInterval(this.updateCountdown.bind(this), 1000);
  }

  updateCountdown() {
    const gap = Math.round((this.booking.timestamp - Date.now()) / 1000);
    const minutes = Math.floor(gap / 60);
    let seconds = gap % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // if (minutes < 0) {
    //   clearInterval(this.tempo);
    //   return 'Votre réservation est arrivée à son terme.';
    // }

    // else {
    //   let newP = document.createElement('p');
    //   newP.textContent = "Votre réservation prendra fin dans ".this.booking.timestamp;
    // }

    this.render();
  }
}