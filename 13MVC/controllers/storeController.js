const Home = require("../models/home");
//main logic here. like the host



exports.getIndex=(req,res,next)=>{  //executed if the path is match to the  home(/) again
    Home.fetchAll((requestedHome)=>
    res.render('store/index',{requestedHome, Pagetitle:"Home Page",currentPage:"index"})
    );
}


exports.getHomes=(req,res,next)=>{  //executed if the path is match to the  home(/homes) again
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
exports.getFavorite=(req,res,next)=>{
    Home.fetchAll((requestedHome)=>
      res.render('store/favorite',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite"})
    )
}
//exports.requestedHome=requestedHome;