class MapLeaflet extends Composant {

    /**
     * construtor
     * @constructor
     * @param {string}      name       le nom du composant
     */
    constructor(name){
        super(name, document.body, "div");
        // veloReservation[name] = this;
        // this.name = name;
        this.DOM.id="mapid"
        this.mymap = L.map('mapid').setView([config.lat, config.long], 13);
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.leafletToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token',
        }).addTo(this.mymap);
    }

    addToMap(list) {
        console.log(list[0]);
        let msg;
        for (let i = 0, size = list.length; i < size; i++) {
            msg = `
                <em>${list[i].name}</em><br>
                <i class="fas fa-parking"></i> : ${list[i].available_bike_stands}<br>
                <i class="fas fa-bicycle"></i> : ${list[i].available_bikes}
                <button onclick="veloReservation.reservation.newBooking(${i}, this.parentNode)">réservation</button>
            `;



            L.marker([list[i].position.lat,list[i].position.lng]).addTo(this.mymap)
                .bindPopup(msg)
                .openPopup();
        }

        // this.markerCluster = new L.MarkerClusterGroup();
        // this.stations = getStations();

        // for (let i = 0; i < this.stations.length; i++){
        //     this.latLng = new L.LatLng(stations[i][1], stations[i][2]);
        //     this.marker = new L.marker(latLng, {title: stations[i][0]});
        //     this.markerCluster.addLayer(marker);
        // }

        // this.mymap.addLayer(makerCluster);

    }
}

