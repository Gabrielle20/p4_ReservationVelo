class ReservationDetails extends Composant {
    constructor(){
        super("reservationDetails", document.body, "div");
      }

    
    newBookingDetails(standNumber, ref){
        console.log(standNumber, ref)
        ref.innerHTML="coucou";
        let bking;
        bking = `
            Adresse : <br>
            <i class="fas fa-parking"></i> : ${list[i].available_bike_stands} places disponibles<br>
            <i class="fas fa-bicycle"></i> : ${list[i].available_bikes} vélos disponibles<br>

            <form>
                <label for="">Nom :</label>
                <input type="text"></input>
            </form>
        `;
    }
}