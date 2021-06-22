const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys'); // importing the keys
const User = require('../model/userModel');


// serializind and deserializing 

passport.serializeUser((user,done)=>{        // encrypting the info
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{    // decrypting the info
    User.findById(id).then((user)=>{
        done(null,user)
    })
})

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
            done(null,existUser);
        }
        else{
            new User({  // creating a new user
               googleId:profile.id
           }).save().then((user)=>{
               done(null,user);
           })  // saving the data in database
        }
    })
}
  
))
