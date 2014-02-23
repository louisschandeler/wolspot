//Declaration of the primaries variables
var position,
    gmaps,
    geocoder, 
    infoposition;

//Get the present location
function maPosition(pos) {
  var infopos = "Ca se passe à:\n";
  var geolatitude = infopos += pos.coords.latitude +"\n";
  var geolongitude = infopos += pos.coords.longitude+"\n";
  document.getElementById("infoposition").innerHTML = infopos;
  var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

  //Callback on the coords + creation objects map and add marker on it
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        //Map-craps
        var map = new GMaps({
            div: '#map',
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            disableDefaultUI: true
          });
        //GooglePin-craps (custom-pin)
        var markers = map.addMarker({
            icon: 'images/pin-google.png',
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            markers: [
              {lat: pos.coords.latitude, lng: pos.coords.longitude, size: 'small'}
            ]
        });

        //Creation of the infobox, adress and stuff like that
        var infowindow = new google.maps.InfoWindow({
            content:  infoposition
        });

        //Creation of the click function, to open the infobox
        google.maps.event.addListener(markers, 'click', function() {
          console.log("clic clic");
          infowindow.setContent(results[1].formatted_address);
          infowindow.open(map, markers);
        });

      //Issue if the callback fail
      } else {
        console.log('No results found');
      }
    } else {
      console.log('Geocoder failed due to: ' + status);
    }
  });
}
if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(maPosition);