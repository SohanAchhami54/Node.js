const express=require('express');
const authController =require('../controllers/authController');
const authRouter=express.Router();//to create the seperate router for the auth.
authRouter.get('/login',authController.getLogin);
authRouter.post('/login',authController.getPostLogin);
authRouter.post('/logout',authController.postLogout);

module.exports={
    authRouter:authRouter,
}