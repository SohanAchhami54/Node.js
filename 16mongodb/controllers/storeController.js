const Home = require("../models/home");
const Favorite=require('../models/favorite')
//main logic here. like the host



exports.getIndex=async(req,res,next)=>{  //executed if the path is match to the  home(/) again
   const requestedHome=await Home.fetchAll();
   res.render('store/index',{requestedHome,Pagetitle:"Home",currentPage:"Home page"});
}

exports.getHomes=async(req,res,next)=>{  //executed if the path is match to the  home(/homes) again //home-list
   const requestedHome= await Home.fetchAll();
   res.render('store/home-list',{requestedHome,Pagetitle:"Home list",currentPage:"Home list"});
}
//this is for booking.
exports.getBooking= (req,res,next)=>{
  res.render('store/bookings',{Pagetitle:"Bookings",currentPage:"CurrentPage"});
}

//this is for favorite

  exports.getFavorite = async(req, res, next) => {
  const favorite= await Favorite.getFavorites();//favorite ko object aayo.
  const fav=favorite.map((favid)=>{return favid.homeId });//ya chai favorite object ko id matra aayo.
  const allhome=  await Home.fetchAll();//sabai home aayo yeta.
  const requestedHome=allhome.filter((home)=>{
    return fav.includes(home._id.toString());
  })
   res.render('store/favorite', {
    requestedHome,
    Pagetitle: "Favorite",
    currentPage: "Favorite"
  });
};

//this is for adding home to favorite list.
exports.postAddFavorite=async(req,res,next)=>{
    const fav= new Favorite(req.body.id); //this is the id of the favorite home
    await fav.save()
    res.redirect('/favorite');
}

//delete the favorite home.
exports.postRemoveFromFavorite=async(req,res,next)=>{
  await Favorite.deleteFavHome(req.params.id);
  res.redirect('/favorite');
}

//for getting the individual details of the home.
exports.getHomeDetails=async(req,res,next)=>{
    const requestedHome=await Home.fetchHomeDetails(req.params.id);
    console.log(requestedHome);
    if(!requestedHome){
      res.redirect('/homes');
    }else{
      res.render('store/home-detail',{homeDetails:requestedHome,Pagetitle:"Home Details",currentPage:"home"});
    }
}
//exports.requestedHome=requestedHome;