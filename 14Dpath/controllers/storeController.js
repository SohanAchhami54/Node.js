const Home = require("../models/home");
const Favorite=require('../models/favorite')
//main logic here. like the host



exports.getIndex=(req,res,next)=>{  //executed if the path is match to the  home(/) again
    Home.fetchAll((requestedHome)=>
    res.render('store/index',{requestedHome, Pagetitle:"Home Page",currentPage:"index"})
    );
}

exports.getHomes=(req,res,next)=>{  //executed if the path is match to the  home(/homes) again //home-list
    Home.fetchAll((requestedHome)=>
    res.render('store/home-list',{requestedHome, Pagetitle:"Home Page"})
    );
}
//this is for booking.
exports.getBooking=(req,res,next)=>{
    Home.fetchAll((requestedHome)=>
    res.render('store/bookings',{requestedHome, Pagetitle:"Booking",currentPage:"bookings"})
    );
}

//this is for favorite
  exports.getFavorite=((req,res,next)=>{ //add favorites garney bitikai /favorite ma redirect hunxa ni yo chalxa
    Favorite.getFavorites((favorite)=>{
      Home.fetchAll((allhome)=>{
          const requestedHome=favorite.map((homeid)=>{
          return allhome.find((home)=>String(home.id).trim()===String(homeid).trim());
        })
        res.render('store/favorite',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite"});
      })
    })
  })


//this is for adding home to favorite list.
exports.postAddFavorite=(req,res,next)=>{
    console.log(req.body);//this is the id of the favorite home
    Favorite.addFavorite(req.body.id,error=>{
      if(error){
        console.log(error);
      }
       res.redirect('/favorite');
    });
    //console.log("Came to Favorite:",req.body);
   
}

//delete the favorite home.
exports.postRemoveFromFavorite=(req,res,next)=>{
    Favorite.deleteFavHome(req.params.id,error=>{
      if(error){
        console.log("error",error);
      }
         res.redirect('/favorite');
      
    })
}

//for getting the individual details of the home.
exports.getHomeDetails=(req,res,next)=>{
    const homeId=req.params.id;
      Home.fetchHomeDetails(homeId,(requestedHome)=>{
        if(!requestedHome){
            res.redirect('/homes');
            console.log("Home not found");
        }else{
             // console.log(requestedHome);
           res.render('store/home-detail',{homeDetails:requestedHome, Pagetitle:"Home Details",currentPage:"home"});
        }
        
      }
    )
}
//exports.requestedHome=requestedHome;