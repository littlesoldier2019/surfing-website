// Initialize and add the map
function initMap() {
  // The location of Integrify
  var Integrify = {
    lat: 60.170407,
    lng: 24.923704
  };
  // The map, centered at Integrify
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: Integrify
    });
  // The marker, positioned at Integrify
  var marker = new google.maps.Marker({
    position: Integrify,
    map: map
  });
}