const express=require('express');
const userRouter=express.Router();
const homeController=require('../controllers/homes');
userRouter.get('/',homeController.getHome);//only routing logic here
module.exports={
    userRouter:userRouter,
}