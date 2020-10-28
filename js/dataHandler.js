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

    setBooking(timestamp, stationInformation){
    // setBooking(countdown(), stationInformation){
        this.booking = {
            timestamp : countdown(),
            stationInformation : stationInformation
        };
        sessionStorage.setItem('timestamp', timestamp);
        sessionStorage.setItem('stationInformation', stationInformation);
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
        if (timestamp === null && stationInformation === null) return null;
        this.booking = {
            timestamp : timestamp,
            stationInformation : stationInformation
        };
        return this.booking;
    }



    // countdown() {
    //     var now = new Date();
    //     var eventDate = new Date(m / 20);

    //     var currentTime = now.getTime();
    //     var eventDate = eventDate.getTime();

    //     var remainingTime = eventDate - currentTime;

    countdown() {
        const startingMinutes = 20;
        let time = startingMinutes * 60;
        setInterval(updateCountdown, 1000);

        updateCountdown ();
    }

    updateCountdown (){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
}