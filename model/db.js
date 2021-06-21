const mongoose  = require('mongoose');

const {mongoUri} = require('../config/keys'); 

mongoose.connect(mongoUri, {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true},(err)=>{
// check error   
if(err){
        console.log('DB Connection fails' +err);
    }
    // if ok
    else{
   console.log('DB is Connected....');
    }
});