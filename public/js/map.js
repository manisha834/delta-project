document.addEventListener("DOMContentLoaded", function () {
  // Get the map div
  var mapDiv = document.getElementById("map");

  // Read coordinates from data attributes
  var lat = mapDiv.dataset.lat;
  var lng = mapDiv.dataset.lng;

  var map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup("Listing Location")
    .openPopup();
});
