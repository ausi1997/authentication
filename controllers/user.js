const User = require('../model/userModel');

require('../strategy/google_strategy');

exports.createUser = (req,res)=>{
    // checking the user in database
     User.findOne({
         googleId:profile.id
     }).then((existUser)=>{
         if(existUser){
            return res.send('Already exist');
         }
         else{
            const user = new User({  // creating a new user
                googleId:profile.id
            });
            user.save().then(result=>{  // saving the data in database
                res.json({
                    message:"saved successfully...",
                    user:result
                });
            })
         }
     })
    .catch(err=>{
        res.json({
            err
        });
    })
}
