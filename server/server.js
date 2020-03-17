const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var listingMockData = require('./JsonData/listing');

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

// app.post('/login', 
//   passport.authenticate('local', { session: false }),
//   function(req, res) {
//     // res.redirect('/');
//     console.log("dfd");
//     return res.json({ status:"success", message:"login Successfully." });
//   });

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: 'email',
//       passwordField: 'password',
//       session: false,
//     },
//     (email, password, done) => {
//       try {
//         console.log("try block");

//         users.findOne({
//           where: {
//             email: email,
//           },
//         }).then(user => {
//           console.log("user dtls::",user);
//           if (user === null) {
//             return done(null, false, { message: 'bad username' });
//           } else {
//             bcrypt.compare(password, user.password).then(response => {
//               if (response !== true) {
//                 console.log('passwords do not match');
//                 return done(null, false, { message: 'passwords do not match' });
//               }
//               console.log('user found & authenticated');
//               // note the return needed with passport local - remove this return for passport JWT
//               return done(null, user);
//             });
//           }
//         });
//       } catch (err) {
//         console.log(err);
//         done(err);
//       }
//     },
//   ),
// );

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

app.post('/login', function(req,res) {
  var email = req.body.email;
  var password = req.body.password;
  users.findOne({
      email: email
  }).then((user) => {
    return new Promise((resolve, reject) => {
      if(user == null) {
        reject("Incorrect Email address");
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if(result === true) {
            resolve(user)
          } else {
            reject("Incorrect Password");
          }
        });
      }
      
    })
  }).then((user) => {
    req.session.user = user;
    console.log(req.session.user);
    res.json({
      status : 'success',
      message : "Logged In Successfully."
    })
  })
  .catch((err) => {
    return res.json({status : 'error', message : err})
  })
})


app.post('/listings', (req,res) => {
  return res.json({status : 'success', message : 'data fetched', data : listingMockData});
});


