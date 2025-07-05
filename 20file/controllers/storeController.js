const Home = require("../models/home");
const user = require("../models/user");
const User = require("../models/user");
//main logic here. like the host



exports.getIndex=async(req,res,next)=>{  //executed if the path is match to the  home(/) again
  console.log('Session Value:',req.session)
   const requestedHome=await Home.find();
   res.render('store/index',{requestedHome,Pagetitle:"Home",currentPage:"Home page",
   isLoggedIn:req.isLoggedIn,
   user:req.session.user
  });
}

exports.getHomes=async(req,res,next)=>{  //executed if the path is match to the  home(/homes) again //home-list
   const requestedHome= await Home.find();
   res.render('store/home-list',{requestedHome,Pagetitle:"Home list",currentPage:"Home list",
    isLoggedIn:req.isLoggedIn,
    user:req.session.user
   });
}
//this is for booking.
exports.getBooking= (req,res,next)=>{
  res.render('store/bookings',{Pagetitle:"Bookings",currentPage:"CurrentPage",
    isLoggedIn:req.isLoggedIn,user:req.session.user});
}

//this is for favorite

  exports.getFavorite = async(req, res, next) => {
  const userId= await req.session.user._id;//populate('favoritees')////favorite ko objectId aayo.
  console.log(userId);
  const user=await User.findById(userId).populate('favoritees');
  res.render('store/favorite',{
     requestedHome:user.favoritees,
     Pagetitle:'Favorite',
     currentPage:'Favorite',
     isLoggedIn:req.isLoggedIn,
     user:req.session.user
  });
};

//this is for adding home to favorite list.
exports.postAddFavorite=async(req,res,next)=>{
    const homeId=req.body.id; //home ko id
    const userId=req.session.user._id; //user ko id
    const user=await User.findById(userId);//user ko id bata specific user ko data get garney.
    if(!user.favoritees.includes(homeId)){
           user.favoritees.push(homeId);
          await  user.save();
      }
      res.redirect('/favorite');
} 

//delete the favorite home.
exports.postRemoveFromFavorite=async(req,res,next)=>{
  const delId=req.params.id;
  const userId=req.session.user._id;
   const user=await User.findById(userId);
  if(user.favoritees.includes(delId)){
     user.favoritees=user.favoritees.filter(fav=>fav.toString()!==delId);
     await user.save();
  }
  res.redirect('/favorite');
}

//for getting the individual details of the home.
exports.getHomeDetails=async(req,res,next)=>{
    const requestedHome=await Home.findById(req.params.id);
    console.log(requestedHome);
    if(!requestedHome){
      res.redirect('/homes');
    }else{
      res.render('store/home-detail',{homeDetails:requestedHome,Pagetitle:"Home Details",currentPage:"home",
        isLoggedIn:req.isLoggedIn,
        user:req.session.user
      });
    }
}

//exports.requestedHome=requestedHome;