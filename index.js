// init code
// importing the required modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys'); // importing the keys

// making the express app
const app = express();

const PORT = process.env.PORT || 8000;

// default route
app.get('/',(req,res)=>{
    res.send('hello world');
});

// authentication via google strategy

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:"/auth/google/callback"
},
  function(accessToken , refreshToken , profile , done){
      console.log("access token" , accessToken);
      console.log("refresh token" , refreshToken);
      console.log("profile" , profile);
      console.log("done" , done);
  }
))

// callback url

app.get('/auth/google/callback', passport.authenticate('google'));

// google sigin route

app.get('/auth/google' , passport.authenticate('google',{
    scope:['profile', 'email']    // scope is for what you want from the googlr account
}));

// assigning the port no.
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})