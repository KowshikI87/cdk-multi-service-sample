const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for requests on port 3000
app.listen(3000, () => {
  console.log('App 1 listening on port 3000!');
});
