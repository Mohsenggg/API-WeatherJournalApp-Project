// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    console.log(server);
    console.log(`Give me a smile :)
    because I want to tell you that the localhost is running on : ${port}`);
  };

  // GET request that returns the projectData object in your server code
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
  console.log(req);
};


//    Add a POST route that adds incoming data to projectData.
app.post('/add', addData )

function addData (req, res){

  console.log(req.body);

  projectData = {
   date: request.body.date,
   temp: request.body.temp,
   content: request.body.content
  }
  response.send(projectData);
  console.log(projectData)
}