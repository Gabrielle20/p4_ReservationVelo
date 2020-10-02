class Reservation extends Composant{
  constructor(){
    super("reservation", document.body, "reservation");
    veloReservation.Reservation = this;
  }

  newBooking(standNumber){
    console.log("newBooking",standNumber);
    this.available_bike_stands = veloReservation.dataHandler.data[standNumber].available_bike_stands;
    this.available_bikes       = veloReservation.dataHandler.data[standNumber].available_bikes;
    this.address               = veloReservation.dataHandler.data[standNumber].address;
    this.render();
  }

  render(){
    this.DOM.innerHTML = `
    <form id="reservation">
      Adresse : ${this.address} <br/>
      <i class="fas fa-parking"></i> : ${this.available_bike_stands} | <i class="fas fa-bicycle"></i> : ${this.available_bikes}<br/>
      Nom : <input type="text" id="name" name="name" id="name" value="" placeholder="saisissez votre nom"><br/>
      Prénom : <input type="text" id="firstName" name="firstName" id="firstName" value="" placeholder="saisissez votre prénom"><br/><br/>
      <input type="submit" value="Réserver">
    </form>
    `;
    document.getElementById("reservation").addEventListener("submit", function(e){
      var inputs = document.getElementsByTagName("input");
      console.log("inputs");
    });

    // veloReservation.dataHandler.user.name
 
  }

  // result(){
  //   let name = document.getElementById(${veloReservation.dataHandler.user.name});
  //   let firstName = document.getElementById(${veloReservation.dataHandler.user.firstName});

  //   sessionStorage.setItem('Nom', name);
  //   sessionStorage.setItem('Prenom', firstName);
  // }

}