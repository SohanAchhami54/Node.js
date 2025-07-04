const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
   firstName:{
    type:String,
    required:[true,'Firstname is required'],
   },
   lastName:String,
   email:{
    type:String,
    required:[true,'Email is required'],
    unique:true,
   },
   password:{
    type:String,
    required:[true,'Password is required'],
   },
   userType:{
    type:String,
    enum:['guest','host'],
    default:'guest',    
   },
  favoritees:[{   //This array will hold the list of homes that the user has favorited.
    type:mongoose.Schema.Types.ObjectId, //array ko type chai objectId type ko hunxa.
    ref:'Home', //home ko id chai rakney ani tei bata populate garney.
  }] //paxi teo home ko id paunu pareo vaney populate vanney method lai use garney.

})

module.exports=mongoose.model('User',userSchema);