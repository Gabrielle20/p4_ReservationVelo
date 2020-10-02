class DataHandler{
    /**
     * [constructor description]
     *
     * @constructor
     *
     * @param   {string}    apiSrc  [apiSrc description]
     */
    constructor(apiSrc){
        this.data = null;
        this.user = {
            name     : "",
            firstName:""
        };
        this.booked = null;
        // this.saveDataFromForm();
        this.getUserFormLocalStorage();
        this.getBookingFormSessionStorage();
        // sessionStorage.setItem('name',"Gabrielle");
        this.getDataFromApi(apiSrc);
        veloReservation.dataHandler = this;
    }

    async getDataFromApi(apiSrc){
        const data = await fetch(apiSrc);
        this.data = await data.json();
        veloReservation.map.addToMap(this.data);
    }

    saveDataFromForm(){
    //     let name = document.getElementById(name);
    //     // let firstName = document.getElementById(${veloReservation.dataHandler.user.firstName});
        var name = "";
        localStorage.setItem('name', document.getElementById("name").value);
        localStorage.setItem('Prenom', firstName);
    }


    getUserFormLocalStorage(){
        const name      = localStorage.getItem('name');
        const firstName = localStorage.getItem('firstName');
        if ( name !== null ) this.user.name = name;
        if ( firstName !== null ) this.user.firstName = firstName;
        console.log(name);
    }

    getBookingFormSessionStorage(){
        const timestamp          = sessionStorage.getItem('timestamp');
        const stationInformation = sessionStorage.getItem('stationInformation');
        if ( timestamp !== null ) this.user.timestamp = timestamp;
        if ( stationInformation !== null ) this.user.stationInformation = stationInformation;
    }
}