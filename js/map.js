// --------------------------------------------------/
// Exercise 2.11
// --------------------------------------------------/

function initMap() {
  var home = {lat: 33.3205, lng: -111.6956};
  var map = new google.maps.Map(document.getElementById('map'), {
  // var map = new google.maps.Map($('#map'), {
    zoom: 10,
    center: home
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}
