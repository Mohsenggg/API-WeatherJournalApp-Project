/* Global Variables */

// API key and base URL 
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=4566baf5619ef13feaad45cb723b64d8&units=imperial';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Event listener to start when generate btn clicked 
const btn = document.querySelector('#generate');
btn.addEventListener('click', startSearch); 


// Callback function for the event listener   
function startSearch() {
  // Get user values
  const zipCode = document.querySelector('#zip').value; 
  const feeling = document.querySelector('#feelings').value; 
  // Get data from OpenWeatherMap API
  console.log("Get data from OpenWeatherMap API");
  console.log(`${baseURL}${zipCode}${apiKey}`);
  addWeather(baseURL, zipCode, apiKey)
}