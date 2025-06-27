const express=require('express');//external module
const hostRouter=express.Router();//core module
const homeController=require('../controllers/homes');//local module.


hostRouter.get('/contact',homeController.getHomeDetails);//only routing logic here.
hostRouter.post('/contact-data',homeController.postAddHome);//only routing logic here.
module.exports={
    hostRouter:hostRouter,
}