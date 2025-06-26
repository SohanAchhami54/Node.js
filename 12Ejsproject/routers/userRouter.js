const express=require('express');
const userRouter=express.Router();
const {requestedHome}=require('./hostRouter')
userRouter.get('/',(req,res,next)=>{
    res.render('home',{requestedHome,Pagetitle:"Home page"});
    console.log(requestedHome);
});

module.exports={
    userRouter:userRouter,
}