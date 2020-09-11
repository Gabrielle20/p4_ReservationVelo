class Reservation extends Composant{
  constructor(){
    super("reservation", document.body, "div");
  }

  newBooking(standNumber, ref){
    console.log(standNumber, ref)
    ref.innerHTML="coucou";
  }
}