const express=require('express');
const path=require('path');
const rootDir=require('../utils/pathUtil');
const homeRouter=express.Router();//for the seperate router.

homeRouter.get("/",(req,res,next)=>{
     console.log("This is the default path");
    res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports=homeRouter;