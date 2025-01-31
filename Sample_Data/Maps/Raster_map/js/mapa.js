
// Google Maps Demo
//////////////////////////////////
 var map;
   function initialize() {
      map = new google.maps.Map(
        document.getElementById('map'), {
          center: new google.maps.LatLng(58.376209186374695, 26.909323251552323),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });

	  // TADY potreba prepsat mapBounds + mapMinZoom + mapMaxZoom (vykopirovat z maptileru)
	  var mapBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(57.7672392, 25.48808516),
            new google.maps.LatLng(59.3139297, 27.6333526));
	  var mapMinZoom = 6;
      var mapMaxZoom = 12;
	  
	  var imageMapType = new google.maps.ImageMapType({
            getTileUrl: function(coord, zoom) {
              var proj = map.getProjection();
              var z2 = Math.pow(2, zoom);
              var tileXSize = 256 / z2;
              var tileYSize = 256 / z2;
              var tileBounds = new google.maps.LatLngBounds(
                proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
                proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
              );
              if (!mapBounds.intersects(tileBounds) || zoom < mapMinZoom || zoom > mapMaxZoom) return null;
              // TADY potreba prepsat URL dlazdic + upravit na radku 20 !!!!!
			  return "http://eyetracking.upol.cz/senkerik/estonsko1/{z}/{x}/{y}.png".replace('{z}',zoom).replace('{x}',coord.x).replace('{y}',coord.y);
            },
            tileSize: new google.maps.Size(256, 256),
            minZoom: mapMinZoom,
            maxZoom: mapMaxZoom,
            name: 'Tiles'
        });
		
		map.overlayMapTypes.push(imageMapType);
       
    }
    google.maps.event.addDomListener(window, 'load', initialize);
	

// Map creation
//////////////////////////////////

$(document).ready(function() {
  initialize();
});