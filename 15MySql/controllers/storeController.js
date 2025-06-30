const Home = require("../models/home");
const Favorite=require('../models/favorite')
//main logic here. like the host



exports.getIndex=async(req,res,next)=>{  //executed if the path is match to the  home(/) again
   const [requestedHome,]=await Home.fetchAll();
   res.render('store/index',{requestedHome,Pagetitle:"Home",currentPage:"Home page"});
}

exports.getHomes=async(req,res,next)=>{  //executed if the path is match to the  home(/homes) again //home-list
   const [requestedHome,]= await Home.fetchAll();
   res.render('store/home-list',{requestedHome,Pagetitle:"Home list",currentPage:"Home list"});
}
//this is for booking.
exports.getBooking= (req,res,next)=>{
  res.render('store/bookings',{Pagetitle:"Bookings",currentPage:"CurrentPage"});
  // const [requestedHome,]= await Home.fetchAll();
  // res.render('store/bookings',{requestedHome,Pagetitle:"Booking",currentPage:"bookings"});
    // Home.fetchAll((requestedHome)=>
    // res.render('store/bookings',{requestedHome, Pagetitle:"Booking",currentPage:"bookings"})
    // );
}

//this is for favorite
  exports.getFavorite=((req,res,next)=>{ //add favorites garney bitikai /favorite ma redirect hunxa ni yo chalxa
    Favorite.getFavorites((favorite)=>{
      // Home.fetchAll((allhome)=>{
        Home.fetchAll().then(([allhome])=>{
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
exports.getHomeDetails=async(req,res,next)=>{
    const [rows,]=await Home.fetchHomeDetails(req.params.id);
    const requestedHome=rows[0];
    console.log(requestedHome);
    if(!requestedHome){
      res.redirect('/homes');
    }else{
      res.render('store/home-detail',{homeDetails:requestedHome,Pagetitle:"Home Details",currentPage:"home"});
    }
}
//exports.requestedHome=requestedHome;