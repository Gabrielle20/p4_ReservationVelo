var veloReservation = {};
// new Diaporama("diaporama",document.querySelector("#main-banner"), ["images/diapo1.jpg","images/diapo2.jpg","images/diapo3.jpg"], 5000);
new MapLeaflet("map");
new DataHandler(`https://api.jcdecaux.com/vls/v1/stations?contract=${config.contractJCDecaux}&apiKey=${config.keyJCDecaux}`);
new Reservation();



