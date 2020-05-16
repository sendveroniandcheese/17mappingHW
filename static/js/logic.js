let myMap = L.map('map', {
    center: [45.52, -122.67],
    zoom: 7


});

let apiKey = "pk.eyJ1Ijoic2VuZHZlcm9uaSIsImEiOiJja2E1eG1rbXYwMXN3Mnhtd3hwN2lrYmlqIn0.s0qiGfsnOmiU2UoWP5gpLg";

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 10,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1Ijoic2VuZHZlcm9uaSIsImEiOiJja2E1eG1rbXYwMXN3Mnhtd3hwN2lrYmlqIn0.s0qiGfsnOmiU2UoWP5gpLg"
}).addTo(myMap);

const URL = "static/js/earthquake_data.geojson"

d3.json(url, function(earthquake_data){
    L.geojson(data).addTo(map);
});

