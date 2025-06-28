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


exports.getHostHome=(req,res,next)=>{
    Home.fetchAll((requestedHome)=>
      res.render('hosts/host-home-list',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite"})
    )
}



//exports.requestedHome=requestedHome;