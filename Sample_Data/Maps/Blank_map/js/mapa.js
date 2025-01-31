
// Google Maps Demo
//////////////////////////////////
var map;
 function initialize() {
    var latlng = new google.maps.LatLng(49.283587675163496, 17.812931875540084);
    var myOptions = {
	  zoom: 10,
      center: latlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP	  
    };
    map = new google.maps.Map(document.getElementById("map"),
        myOptions);

  }

// Map creation
//////////////////////////////////

$(document).ready(function() {
  initialize();
});



