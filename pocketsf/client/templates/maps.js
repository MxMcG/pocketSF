Template.maps.onRendered(function() {
  GoogleMaps.load();
  // Session.set("latitude", "Hey")
});

Template.maps.helpers({

  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    var findClientLatitude = function() {
      return Geolocation.currentLocation().coords.latitude};

    var findClientLongitude = function() {
      return Geolocation.currentLocation().coords.longitude};

    if (GoogleMaps.loaded()) {

      // create directions route


      // initialize map
      return {
        center: new google.maps.LatLng(findClientLatitude(), findClientLongitude()),
        zoom: 14
      };

    }
  }

});


Template.maps.onCreated(function() {

Meteor.call('getBikeData', function(err,res){

    GoogleMaps.ready('exampleMap', function(map) {

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map.instance);

      directionsService.route({
        origin: {lat: 37.77, lng: -122.447},
        destination: {lat: 37.768, lng: -122.511},
        travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

      for (var i = 0 ; i <  res.length ;  i++) {
        var LatLng = new google.maps.LatLng(res[i].latitude, res[i].longitude)


       //  var infowindow = new google.maps.InfoWindow({
       //  content: "Name: " + res[i].name + " <br> Spaces: " + res[i].spaces
       // })
        var infowindow = new google.maps.InfoWindow({
         content: "Name: " + res[i].name + " <br> Spaces: " + res[i].spaces
        });

       var marker = new google.maps.Marker({
          position: LatLng,
          map: map.instance
        });

       var listener = marker.addListener('click', function(){
          infowindow.open(map.instance,  marker);
       })

      };

      var userMarker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'

      });
      // https://maps.googleapis.com/maps/api/directions/output?parameters




      // var bikeRackMarkers = new google.maps.Marker({
      //   position: myLatLng,
      //   map: map.instance
      // });
    });
  });
});





