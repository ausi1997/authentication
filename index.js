// init code
// importing the required modules
const express = require('express');
// making the express app
const app = express();
const passport = require('passport');
require('./model/db');
require('./strategy/google_strategy');
//const UserControl = require('./controllers/user');


const PORT = process.env.PORT || 8000;

// default route
app.get('/',(req,res)=>{
    res.send('hello world');
});


// callback url

app.get('/auth/google/callback', passport.authenticate('google'));

// google sigin route

app.get('/auth/google', passport.authenticate('google',{
    scope:['profile', 'email']    // scope is for what you want from the googlr account
}));

// assigning the port no.
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})