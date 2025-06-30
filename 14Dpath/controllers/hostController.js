const Home = require("../models/home");
//main logic here. like the host
exports.getHomeDetails=(req,res,next)=>{  //executed if the path is match to /contact.
   res.render('hosts/edit-home',{Pagetitle:"Add home",editing:false});
}

//this is for editing home.
exports.getEditHome=(req,res,next)=>{  //it gets the value from the home.id;
  Home.fetchHomeDetails(req.params.id,(home)=>{
    if(!home){
      console.log("Home not found");
     return res.redirect('/host-home-list');
    }
    console.log(home);
    res.render('hosts/edit-home',{
        home,
        Pagetitle:"Host home",
        currentPage:"Host home",
        editing:req.query.editing
      })

  })
  // const homeid=req.params.id; //for id value. 
  // const editing=req.query.editing==='true';//for query value and comparing to get the boolean value.
  // console.log(homeid,editing);
  // res.render('hosts/edit-home',{Pagetitle:"Host home",currentPage:"Host home",editing:editing});
}

exports.postAddHome=(req,res,next)=>{   //executed if the path is match to /contact-data.
    const {homename,price,location,imageUrl}=req.body;
    const home= new Home(homename,price,location,imageUrl);
    home.save();
    res.redirect('/host-home-list');
}


//adding the edit home-details.
exports.postEditHome=(req,res,next)=>{
  const {id,homename,price,location,imageUrl}=req.body;
    const home= new Home(homename,price,location,imageUrl);
    home.id=id;
    home.save();
    res.redirect('/host-home-list');
    console.log(req.body);
}

//for deleting the home details
exports.postDeleteHome=(req,res,next)=>{
  Home.deleteHome(req.params.id, (error)=>{   //requestedhome==deletehome
    if(error){
      console.log(error);
    }
    res.redirect('/host-home-list');
  })
   // const homeId=req.params.id;
    // console.log(homeId);
    // res.redirect('/host-home-list');
    // console.log(req.body);
}


//for getting the host-home-ilst.
exports.getHostHome=(req,res,next)=>{
    Home.fetchAll((requestedHome)=>
      res.render('hosts/host-home-list',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite"})
    )
}



//exports.requestedHome=requestedHome;