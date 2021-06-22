// init code
// importing the required modules
const express = require('express');
// making the express app
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./model/db');
require('./strategy/google_strategy');
//const UserControl = require('./controllers/user');


const PORT = process.env.PORT || 8000;

app.use(cookieSession({    // we will send the user id in the form of cookie for security purpose
    maxAge:24*60*60*1000,
    keys:[keys.cookieKey]    // this key will encrypt our cookie value
}))

app.use(passport.initialize());
app.use(passport.session());

// default route
app.get('/',(req,res)=>{
    res.send('hello world');
});



// google sigin route

app.get('/auth/google', passport.authenticate('google',{
    scope:['profile', 'email']    // scope is for what you want from the googlr account
}));

// callback url

app.get('/auth/google/callback', passport.authenticate('google'));

// 

app.get('/current-user',(req,res)=>{
    res.send(req.user);
})

// route to logout

app.get('/logout',(req,res)=>{
    req.logout();
    res.send(req.user);
})


// assigning the port no.
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})