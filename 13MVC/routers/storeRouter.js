const express=require('express');
const storeRouter=express.Router();
const storeController=require('../controllers/storeController');

storeRouter.get('/',storeController.getIndex);//main page (/)

storeRouter.get('/bookings',storeController.getBooking);//booking

storeRouter.get('/favorite',storeController.getFavorite);//favorite
storeRouter.get('/homes',storeController.getHomes);//home-list  
module.exports={
    storeRouter:storeRouter,
}