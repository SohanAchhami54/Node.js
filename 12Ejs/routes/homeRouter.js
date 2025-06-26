const express=require('express');
const homeRouter=express.Router();
const { registeredName } = require('./contactRouter');

homeRouter.get("/",(req,res,next)=>{
    console.log(registeredName);   
    res.render('home',{registeredName,Pagetitle:'Home Page'});
})

module.exports=homeRouter;