
// API key and base URL 
const apiKey = '4566baf5619ef13feaad45cb723b64d8';


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
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
 
  // Get data from OpenWeatherMap API
  console.log("Get data from OpenWeatherMap API");
  console.log(baseURL);
  addWeather(baseURL)
  // Then Add API data & User data to the App
  .then(function(data){
    // Creating an object with the received data
    const userData = { date: newDate, temp: data.main.temp, feeling}
    postData('/add', userData)
  })
    // Then Update UI & Retrieve data from the App
  .then(()=>update())
}


// Async GET Request >>
// Creating addWeather Function to get data from OpenWeatherMap API
const addWeather = async (baseURL)=>{ 
    const res = await fetch(baseURL); 
    console.log("Async GET request to get data from OpenWeatherMap API");
    console.log(res);
    try {
      const data = await res.json();
      return data;
    } catch(error) {
      console.log("error", error);
    }
  }


  
// Async POST Request >>
// Creating postData Function to add API data & User data to the App 
const postData = async ( url = '', data = {})=>{
    console.log("Async POST request to add API data & User data to the App");
    console.log(data);
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        // "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',},
      body: JSON.stringify(userData) 
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
    }



// Creating update Function to retrieve data from the App.
const update = async () => {
    const request = await fetch('/all');
    console.log("Update Is Done")
    console.log(request)
    try {
      const theData = await request.json()
      // update weather data values
      document.getElementById('date').innerHTML = theData.date;
      document.getElementById('temp').innerHTML = theData.temp;
      document.getElementById('content').innerHTML = theData.content;
      return theData;
    }
    catch (error){
      console.log("error", error);
    }
  };