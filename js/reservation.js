class Reservation extends Composant{
  constructor(){
    super("reservation", document.body, "reservation");
  }

  newBooking(standNumber){
    console.log("newBooking",standNumber);
    this.available_bike_stands = veloReservation.dataHandler.data[standNumber].available_bike_stands;
    this.available_bikes       = veloReservation.dataHandler.data[standNumber].available_bikes;
    this.render();
  }

  render(){
    this.DOM.innerHTML = `
      <i class="fas fa-parking"></i> : ${this.available_bike_stands} | <i class="fas fa-bicycle"></i> : ${this.available_bikes}
      <input name="name" id="name" value="${veloReservation.dataHandler.user.name}" placeholder="saisissez votre nom">
    `;
  }

}