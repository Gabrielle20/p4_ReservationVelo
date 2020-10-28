var veloReservation = {};
new DataHandler(`https://api.jcdecaux.com/vls/v1/stations?contract=${config.contractJCDecaux}&apiKey=${config.keyJCDecaux}`);


function initPage(){
    const toRemove = document.querySelector("loading");
    toRemove.parentNode.removeChild(toRemove);
    new Diaporama("diaporama",document.querySelector("#main-banner"), ["images/diapo1.jpg","images/diapo2.jpg","images/diapo3.jpg"], 5000);
    new MapLeaflet("map", document.querySelector("main"));
    new Reservation(document.querySelector("main"), 20);
}


Date.prototype.addMinutes = function(minutes) {
  this.setTime(this.getTime() + (minutes*60*1000));
  return this;
}