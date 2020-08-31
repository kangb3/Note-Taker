const express = require('express');

// Create the express server
const app = express();

// Setting initial port
const PORT = process.env.PORT || 8080


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json());


require('./routes/htmlRoutes')(app);


app.listen(PORT, function () {
    console.log("Server is now running on: http://localhost:" + PORT);
  });
  
