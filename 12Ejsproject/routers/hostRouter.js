const express=require('express');
const hostRouter=express.Router();
hostRouter.get('/contact',(req,res,next)=>{
   res.render('host',{Pagetitle:"Add home"});
});
const requestedHome=[];
hostRouter.post('/contact-data',(req,res,next)=>{
    res.render('post',{Pagetitle:"FeedBack"});
    requestedHome.push({...req.body});
    console.log(req.body);
});

module.exports={
    hostRouter:hostRouter,
    requestedHome:requestedHome,
}