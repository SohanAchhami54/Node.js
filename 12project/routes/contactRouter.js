const express=require('express');
const contactRouter=express.Router();
const path=require('path');
const rootDir=require('../utils/path');
contactRouter.get("/contact",(req,res,next)=>{
       res.sendFile(path.join(rootDir,'views','contact.html'));
});

contactRouter.post("/contact",(req,res,next)=>{
    console.log(req.body);
     res.sendFile(path.join(rootDir,'views','post.html'));
});

module.exports=contactRouter;