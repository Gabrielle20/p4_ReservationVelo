class Reservation extends Composant{
  constructor(domTarget){
    super("reservation", domTarget, "reservation");
    // veloReservation.reservation = this;
    this.booking = veloReservation.dataHandler.getBookingFromSessionStorage();
    this.user       = veloReservation.dataHandler.getUserFromLocalStorage();
    console.log(this.booking);
    if (this.booking !== null) {
      this.newBooking(this.booking.stationInformation);
    }
  }

  newBooking(standNumber){
    console.log("newBooking",standNumber);
    this.address               = veloReservation.dataHandler.data[standNumber].address;
    this.available_bike_stands = veloReservation.dataHandler.data[standNumber].available_bike_stands;
    this.available_bikes       = veloReservation.dataHandler.data[standNumber].available_bikes;
    this.standNumber           = standNumber;
    this.render();
  }

  render(){
    this.DOM.innerHTML = `
      Adresse : ${this.address} <br/>
      <i class="fas fa-parking"></i> : ${this.available_bike_stands} | <i class="fas fa-bicycle"></i> : ${this.available_bikes}<br/>
      Nom : <input type="text" id="name" name="name" id="name" value="${this.user.name}" placeholder="saisissez votre nom"><br/>
      Prénom : <input type="text" id="firstName" name="firstName" id="firstName" value="${this.user.firstName}" placeholder="saisissez votre prénom"><br/><br/>
      <button onclick="veloReservation.reservation.click()">Réserver</button>
    `;
 
  }

  click(){
    this.user = {
      firstName: document.querySelector("#firstName").value,
      name     : document.querySelector("#name").value
    }
    veloReservation.dataHandler.setUser(this.user);
    veloReservation.dataHandler.setBooking(Date.now(), this.standNumber);
    console.log(this);

    veloReservation.canvas.mousedown();
    console.log(this);

  }

}