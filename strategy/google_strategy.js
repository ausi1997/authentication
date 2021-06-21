const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys'); // importing the keys

const User = require('../model/userModel');


passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:"/auth/google/callback"
},
  function(accessToken , refreshToken , profile , done){
      console.log("profile" , profile);
      User.findOne({
        googleId:profile.id
    }).then((existUser)=>{
        if(existUser){
        }
        else{
           const user = new User({  // creating a new user
               googleId:profile.id
           });
           user.save()  // saving the data in database
        }
    })
}
  
))
