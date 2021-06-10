// init code
// importing the required modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// making the express app
const app = express();

const PORT = process.env.PORT || 6000;

// default route
app.get('/',(req,res)=>{
    res.send('hello world');
});

// assigning the port no.
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})