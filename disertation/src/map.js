 function initMap() {
    const mapElement = document.getElementById('map');
 
    // Get user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(success, error);
 
    function success(position) {
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
 
       // Create a new map centered at the user's location
       const map = new google.maps.Map(mapElement, {
          center: { lat: latitude, lng: longitude },
          zoom: 15
       });
 
       // Create a marker at the user's location
       const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: 'Your Location'
       });
    }
 
    function error() {
       console.error('Unable to retrieve location.');
    }
 }
 