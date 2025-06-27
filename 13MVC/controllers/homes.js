const Home = require("../models/home");
//main logic here. like the host
exports.getHomeDetails=(req,res,next)=>{  //executed if the path is match to /contact.
   res.render('hosts/host',{Pagetitle:"Add home"});
}
exports.postAddHome=(req,res,next)=>{   //executed if the path is match to /contact-data.
    const {homename,price,location,imageUrl}=req.body;
    const home= new Home(homename,price,location,imageUrl);
    home.save();
    res.render('hosts/post',{Pagetitle:"FeedBack"});
    console.log(req.body);
}
6
exports.getHome=(req,res,next)=>{  //executed if the path is match to the  home(/) again
    Home.fetchAll((requestedHome)=>
    res.render('store/home',{requestedHome, Pagetitle:"Home Page"})
    );
}
//exports.requestedHome=requestedHome;