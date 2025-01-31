
// Google Maps Demo
//////////////////////////////////
 var map;
   function initialize() {
      map = new google.maps.Map(
        document.getElementById('map'), {
          center: new google.maps.LatLng(49.33717911427964, 17.992797561355264),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });
	  
    var ctaLayer = new google.maps.KmlLayer({
    url: "http://eyetracking.upol.cz/senkerik/vsetin/Vektor_Vsetin.kml",
    map: map,
  });

      }
    google.maps.event.addDomListener(window, 'load', initialize);


// Map creation
//////////////////////////////////

$(document).ready(function() {
  initialize();
});



