<<<<<<< HEAD
//My Lab 1


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


//function to retrieve the data and place it on the map
function getData(map){
    //load the data
    $.ajax("data/COL_slaughterhouse_geocoded.geojson", {
        dataType: "json",
        success: function(response){
            //create marker options
            var geojsonMarkerOptions = {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };

            //create a Leaflet GeoJSON layer and add it to the map
           L.geoJson(response, {
                pointToLayer: function (feature, latlng){
                    return L.circleMarker(latlng, geojsonMarkerOptions);
                }
            }).addTo(map);
        }
    });
};

$(document).ready(createMap);
=======
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "My Table";


//jQuery version of creating a table
//call the initialize function when the window has loaded
window.onload = initialize();


//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population in Colombia (the top 4 by population)
    var cityPop = [
        { 
            city: 'Bogotá',
            population: 7963379
        },
        {
            city: 'Medellín',
            population: 2457680
        },
        {
            city: 'Cali',
            population: 2358302
        },
        {
            city: 'Baranquilla',
            population: 1219382
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");
    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
      //call new functions
      addColumns(cityPop);
      addEvents();
};

//call the initialize function when the document has loaded
//$(document).ready(initialize);

//create function to add columns to cityPop
function addColumns(cityPop){
    //loop to add a new column for each city
    $('tr').each(function(i,v) {
        //conditional statement to define city size arrays
        if (i == 0){
            //add the title to the header row
            $(this).append('<th>City Size</th>');
            //three rule statements defining size thresholds
        } else {

            var citySize;

            if (cityPop[i-1].population < 100000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 500000){
                citysize = 'Medium';

            } else {
                citySize = 'Large';
            };
            //add the row's html string to the table
            $(this).append('<td>' + citySize + '</td>');
        };
    });
};

//create function to add color and mouseover to the table
function addEvents($this){
    //Trigger an event when viewer "mousesover" the table
    $('table').mouseover(function(){
        //define string variable with a CSS color code using loop
        var color = "rgb(";
        //Loop to generate three random numbers to feed into .css()
        for (var i=0; i<3; i++){
            //Generate a random number and round it to an interger, multiply by 255 to conform to RGB color model
            var random = Math.round(Math.random() * 255);

            color += random;

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
        };
        //set the value of the element using CSS styles, changing text color by calling variable color
        $(this).css('color', color);
    };
    //create alert function in response to clicking on the box
    function clickme(){
        //Display an alert box
        alert('Hey, you clicked me!');
    };
    //add event listener
    $('table').on('click', clickme);
});
};

>>>>>>> origin/master
