/* global L */

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
        this.DOM.id="mapid";
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
        const markerCluster = new L.MarkerClusterGroup();
        let 
            latLng, 
            marker
        ;
        for (let i = 0, size = list.length; i < size; i++){
            latLng = new L.LatLng(list[i].position.lat, list[i].position.lng);
            marker = new L.marker(latLng, {title: list[i].name});
            marker.bindPopup(`
                <em>${list[i].name}</em><br>
                <i class="fas fa-store"></i> : ${list[i].bike_stands}<br>
            `);
            marker.on("click", function(){
                window.veloReservation.reservation.newBooking(i)
            });
            markerCluster.addLayer(marker);
        }

        this.mymap.addLayer(markerCluster);

    }
}