const express=require('express');
const storeRouter=express.Router();
const storeController=require('../controllers/storeController');

storeRouter.get('/',storeController.getIndex);//main page (/)

storeRouter.get('/bookings',storeController.getBooking);//booking

storeRouter.get('/favorite',storeController.getFavorite);//favorite

storeRouter.post('/favorite',storeController.postAddFavorite)// adding the favorite details.

storeRouter.get('/homes',storeController.getHomes);//home-list  

storeRouter.get('/homes/:id',storeController.getHomeDetails)//home-details  

storeRouter.post('/delfavHome/:id',storeController.postRemoveFromFavorite);

module.exports={
    storeRouter:storeRouter,
}

 //home-details
 // id is the dynamic part of the url, req.params is a dynamic route 