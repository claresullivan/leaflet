//Leaflet Lab 2
//Author: Clare Sullivan, adapted from Module lessons
///GOAL: Proportional symbols representing attribute values of mapped features
//STEPS:
//1. Create the Leaflet map--done (in createMap())
//2. Import GeoJSON data--done (in getData())
//3. Add circle markers for point features to the map--done (in AJAX callback)
//4. Determine which attribute to visualize with proportional symbols
//5. For each feature, determine its value for the selected attribute
//6. Give each feature's circle marker a radius based on its attribute value



//initialize map and use coordinates to set the view
//Need to adjust the zoom and view
//define function
function createMap(){
    //create the map
    var map = L.map('mapid', {
        center: [20, 0],
        zoom: 2
    });

//add tile layer (street view from Mapbox)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmVjc3VsbGl2YW4iLCJhIjoiY2pzM21hOXg0MDJtYzQ1cDYxOWZpaW4wNCJ9.3YytiG4Y3QAsRIM4B0BMBA'
}).addTo(map);

    //call getData function
    getData(map);
};

//Step 3. Add circle markers for point features
function createPropSymbols(data, map){
    //Assign which attribute to visualize with proportional symbols
    var attribute = "Defor_2014";

   //create marker options
            var geojsonMarkerOptions = {
                radius: ,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };

            //calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
    //scale factor to adjust symbol size evenly
    var scaleFactor = 50;
    //area based on attribute value and scale factor
    var area = attValue * scaleFactor;
    //radius calculated based on area
    var radius = Math.sqrt(area/Math.PI);

    return radius;
};

            //create a Leaflet GeoJSON layer and add it to the map
           L.geoJson(response, {
                pointToLayer: function (feature, latlng){
                        //Step 5: For each feature, determine its value for the selected attribute
                var attValue = Number(feature.properties[attribute]);
                     //examine the attribute value to check that it is correct
            //console.log(feature.properties, attValue);
            //Give each feature's circle marker a radius based on its attribute value
            geojsonMarkerOptions.radius = calcPropRadius(attValue);
                    return L.circleMarker(latlng, geojsonMarkerOptions);
                }
            }).addTo(map);
        }
        
//function to retrieve the data and place it on the map
function getData(map){
    //load the data
    $.ajax("data/COL_slaughterhouse_geocoded.geojson", {
        dataType: "json",
        success: function(response){
         //call function to create proportional symbols
         createPropSymbols(response, map);           


    });
};

$(document).ready(createMap);
