const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Require the cors package
const app = express();

// Use cors middleware to allow requests from any origin
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// Listen for POST requests on port 3001
app.post('/send-request', (req, res) => {
  console.log('Received request from App 1!');
  const timestamp = new Date().toLocaleString(); // Get current date and time
  res.send(`Hello from App 2! The current time is ${timestamp}`); // Send response with timestamp
});

// Listen for requests on port 3001
app.listen(3001, () => {
  console.log('App 2 listening on port 3001!');
});
