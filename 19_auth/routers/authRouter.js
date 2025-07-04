const express=require('express');
const authController =require('../controllers/authController');
const authRouter=express.Router();//to create the seperate router for the auth.
authRouter.get('/login',authController.getLogin);
authRouter.post('/login',authController.getPostLogin);
authRouter.post('/logout',authController.postLogout);
authRouter.get('/signup',authController.getSignup);
authRouter.post('/signup',authController.PostSignup);

module.exports={
    authRouter:authRouter,
}