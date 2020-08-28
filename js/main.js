var demo = {};
new DataHandler(`https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey=${config.apiJCDecaux}`);
new Diaporama("diaporama",document.querySelector("#main-banner"), ["images/diapo1.jpg","images/diapo2.jpg","images/diapo3.jpg"], 5000);
new MapLeaflet("map");


// GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}