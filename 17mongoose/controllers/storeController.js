const Home = require("../models/home");
const Favorite=require('../models/favorite')
//main logic here. like the host



exports.getIndex=async(req,res,next)=>{  //executed if the path is match to the  home(/) again
   const requestedHome=await Home.find();
   res.render('store/index',{requestedHome,Pagetitle:"Home",currentPage:"Home page"});
}

exports.getHomes=async(req,res,next)=>{  //executed if the path is match to the  home(/homes) again //home-list
   const requestedHome= await Home.find();
   res.render('store/home-list',{requestedHome,Pagetitle:"Home list",currentPage:"Home list"});
}
//this is for booking.
exports.getBooking= (req,res,next)=>{
  res.render('store/bookings',{Pagetitle:"Bookings",currentPage:"CurrentPage"});
}

//this is for favorite

  exports.getFavorite = async(req, res, next) => {
  const favorite= await Favorite.find().populate('id');//favorite ko objectId aayo.
  const requestedHome=favorite.map(favHome=>favHome.id);
  res.render('store/favorite',{
     requestedHome,
     Pagetitle:'Favorite',
     currentPage:'Favorite',
  });
};

//this is for adding home to favorite list.
exports.postAddFavorite=async(req,res,next)=>{
    const favId=req.body.id;
    let favoriteHomeid=await Favorite.findOne({id:favId});
    if(favoriteHomeid){
     return  res.redirect('/favorite');
    }else{
       favoriteHomeid= new Favorite({id:favId}); //this is the id of the favorite home
          await favoriteHomeid.save()
    }
    res.redirect('/favorite');
} 

//delete the favorite home.
exports.postRemoveFromFavorite=async(req,res,next)=>{
  const delId=req.params.id;
  await Favorite.findOneAndDelete({id:delId});
  res.redirect('/favorite');
}

//for getting the individual details of the home.
exports.getHomeDetails=async(req,res,next)=>{
    const requestedHome=await Home.findById(req.params.id);
    console.log(requestedHome);
    if(!requestedHome){
      res.redirect('/homes');
    }else{
      res.render('store/home-detail',{homeDetails:requestedHome,Pagetitle:"Home Details",currentPage:"home"});
    }
}

//exports.requestedHome=requestedHome;