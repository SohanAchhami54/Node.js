const express=require('express');   
const path=require('path');
const rootDir=require('../utils/pathUtil');
const userRoute=express.Router();//xuttai route tei vayerw express.Router() use gareko

userRoute.get("/", (req,res,next)=>{
    //path.join is used to connect the multiple path segment.
//    res.sendFile(path.join(__dirname,'../','views','userh.html'));
res.sendFile(path.join(rootDir,'views','userh.html'));  
});
module.exports=userRoute;