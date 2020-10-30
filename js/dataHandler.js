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
        this.booking = null;
        this.getDataFromApi(apiSrc);
        veloReservation.dataHandler = this;
    }

    async getDataFromApi(apiSrc){
        const data = await fetch(apiSrc);
        this.data = await data.json();
        initPage();
    }

    setUser(user){
        localStorage.setItem('name', user.name);
        localStorage.setItem('firstName', user.firstName);
    }

    setBooking(booking){
      console.log("dataHandler  booking", booking)
        this.booking = {
            address : booking.address,
            timestamp : booking.timestamp,
            stationInformation : booking.stationInformation
        };
        sessionStorage.setItem('address', booking.address);
        sessionStorage.setItem('timestamp', booking.timestamp);
        sessionStorage.setItem('stationInformation', booking.stationInformation);
    }


    getUserFromLocalStorage(){
        const name      = localStorage.getItem('name');
        const firstName = localStorage.getItem('firstName');
        if ( name !== null ) this.user.name = name;
        if ( firstName !== null ) this.user.firstName = firstName;
        // console.log(name);
        return this.user;
    }

    getBookingFromSessionStorage(){
        const timestamp          = sessionStorage.getItem('timestamp');
        const stationInformation = sessionStorage.getItem('stationInformation');
        const address = sessionStorage.getItem('address');
        if (timestamp === null && stationInformation === null) return {};
        this.booking = {
            timestamp : timestamp,
            stationInformation : stationInformation,
            address : address
        };
        return this.booking;
    }

}