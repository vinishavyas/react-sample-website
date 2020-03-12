const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_id',
  secret: 'somerandonstuffs',
  resave: true,
  saveUninitialized: true,
  cookie: {
      expires: 600000
  }
}));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get('/', function(req, res){
	res.send("Server testing with express.");
});


