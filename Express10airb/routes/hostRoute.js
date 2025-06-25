const express=require('express');
const path=require('path');
const hostRoute=express.Router();

const rootDir=require('../utils/pathUtil');


hostRoute.get("/add-home",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-home.html'));
    res.sendFile(path.join(rootDir,'views','add-home.html'));
});
//app.use(bodyParser.urlencoded());//middleware to parse the form data.
//middleware to extract form data from the user.
hostRoute.post("/add-home",(req,res,next)=>{

    const{name} =req.body;
    //    res.sendFile(path.join(__dirname,'../','views','postm.html'));
    res.sendFile(path.join(rootDir,'views','postm.html'));
       console.log(`Name of the house:${name}`);
});
module.exports=hostRoute;