// Ensure the DOM is loaded before executing script
document.addEventListener("DOMContentLoaded", function () {
  // Creating map options
  var mapOptions = {
    center: [17.3849, 78.48075],
    zoom: 17,
    scrollWheelZoom: false,
  };

  // Creating a map object
  var map = new L.map("map", mapOptions);

  // Creating a Layer object
  var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  // Adding layer to the map
  map.addLayer(layer);

  // Creating popup options
  var popupOptions = {
    keepInView: true,
    closeButton: false,
    closeOnEscapeKey: false,
    closeOnClick: false,
    className: "cu-map-popup",
  };

  // Creating a popup and adding it to the map
  var popup = L.popup(popupOptions, layer)
    .setLatLng([17.385044, 78.486671]) // Set the latitude and longitude
    .setContent("<p>Office</p>900 Burrard St, Vancouver, BC V6Z 3G5") // Set the content
    .openOn(map); // Open the popup
});
