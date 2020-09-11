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
        this.user = {};
        this.booked = null;
        // sessionStorage.setItem('name',"Gabrielle");
        this.getUserFormLocalStorage();
        this.getBookingFormSessionStorage();
        this.getDataFromApi(apiSrc);
        veloReservation.dataHandler = this;
    }

    async getDataFromApi(apiSrc){
        const data = await fetch(apiSrc);
        this.data = await data.json();
        veloReservation.map.addToMap(this.data);
    }

    getUserFormLocalStorage(){
        const name      = localStorage.getItem('name');
        const firstName = localStorage.getItem('firstName');
        if ( name !== null ) this.user.name = name;
        if ( firstName !== null ) this.user.firstName = firstName;
    }

    getBookingFormSessionStorage(){
        const timestamp          = sessionStorage.getItem('timestamp');
        const stationInformation = sessionStorage.getItem('stationInformation');
        if ( timestamp !== null ) this.user.timestamp = timestamp;
        if ( stationInformation !== null ) this.user.stationInformation = stationInformation;
    }
}