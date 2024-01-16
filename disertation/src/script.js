document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '82f146064edea8b8cb0c82c9a39efb7c';
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
 
    // Get user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(success, error);
 
    function success(position) {
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
 
       // Fetch weather data from OpenWeatherMap API
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
             const location = data.name;
             const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
             const description = data.weather[0].description;
 
             // Display weather information
             locationElement.textContent = `Weather in ${location}`;
             temperatureElement.textContent = `${temperature}°C`;
             descriptionElement.textContent = `Description: ${description}`;
          })
          .catch(error => console.error('Error fetching weather data:', error));
    }
 
    function error() {
       console.error('Unable to retrieve location.');
    }
 });

 