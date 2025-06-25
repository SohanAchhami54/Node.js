const express=require('express');//external module
const path=require('path');//core module
const rootDir=require('../utils/pathUtil');//local module
const contactRouter=express.Router();


contactRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

contactRouter.post("/contact-us",(req,res,next)=>{
    const {name}=req.body;
    console.log(`name:${name}`);
    res.send("We will contact you soon");
})
module.exports=contactRouter;