const express=require('express');//external module
const hostRouter=express.Router();//core module
const hostController=require('../controllers/hostController');//local module.

hostRouter.get('/contact',hostController.getHomeDetails);//add-home   only routing logic here.
hostRouter.post('/contact-data',hostController.postAddHome);//add-home paxi aauxa  only routing logic here.
hostRouter.get('/host-home-list',hostController.getHostHome);//host-home
hostRouter.get('/edit-home/:id',hostController.getEditHome); 
hostRouter.post('/edit-home',hostController.postEditHome);
hostRouter.post('/delete-home/:id',hostController.postDeleteHome);
module.exports={
    hostRouter:hostRouter,
}