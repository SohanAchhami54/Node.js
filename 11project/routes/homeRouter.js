const express=require('express');
const path=require('path');
const homeRouter=express.Router();
const rootDir=require('../utils/path');

homeRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html'));
})

module.exports=homeRouter;