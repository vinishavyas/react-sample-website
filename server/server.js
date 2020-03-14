const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();
const cors = require('cors');

const users = require('./Models/usersModel');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/unisource', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false });

app.use(cors());
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

app.use((err, req, res, next) => {
  if (res.headersSent) {
      return next(err)
  }
  if (err.statusCode) {
      res.status(err.statusCode)
  }
  return res.json({ status:"error", message:err })
})

app.post('/register', (req, res, next) => {
  var usersModel = new users();
  usersModel.registerNewUser(req.body).then(data => {
      return res.json({ status:"success", message:"Registered Successfully." });
  }).catch(err => { return res.json({ status:"error", message:err.message })})
})


