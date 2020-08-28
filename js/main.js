var demo = {};
new DataHandler("https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}");
new ComposantTest("monTest", document.body);
new ComposantTest("monTest2", document.body);
new ComposantTest2("gtzrheny", document.body);
new Diaporama("diaporama",document.querySelector("#main-banner"), ["images/diapo1.jpg","images/diapo2.jpg","images/diapo3.jpg"], 5000);
new Map("map", document.body);


// GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}