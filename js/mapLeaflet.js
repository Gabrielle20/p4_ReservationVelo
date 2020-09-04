class MapLeaflet {

   /**
   * construtor
   * @constructor
   * @param {string}      name       le nom du composant
   */
    constructor(name){
        // super(name, domTarget, "map");
        demo[name] = this;
        this.name = name;
        this.mymap = L.map('mapid').setView([44.84029065139799, -0.5657958984375], 13);
    }

    addToMap(list){
        for(let i=0, size=list.length; i< size; i++){
            console.log(i);
            // L.tileLayer('https://api.maptiler.com/maps/streets/tiles.json?key=5b828jhpiWGgUYq6LMOe'), {
            //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright"target="_blank">&copy; OpenStreetMap contributors</a>',
            // }).addTo(this.mymap);
        }

        // L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.leafletToken}`, {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox/streets-v11',
        //     tileSize: 512,
        //     zoomOffset: -1,
        //     accessToken: 'your.mapbox.access.token',
        //     }).addTo(this.mymap);
    }
}





//this.marker = L.marker([44.84029065139799, -0.5657958984375]).addTo(this.mymap);

// this.circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);


// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
