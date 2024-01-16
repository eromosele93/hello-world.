function sendLocation() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(success, error);
    } else {
       alert("Geolocation is not supported by this browser.");
    }
 }
 
 function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
 
    var locationOutput = document.getElementById("locationOutput");
    locationOutput.textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
 

 }
 
 function error() {
    alert("Unable to retrieve location.");
 }
 