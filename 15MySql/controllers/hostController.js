const Home = require("../models/home");
//main logic here. like the host
exports.getHomeDetails=(req,res,next)=>{  //executed if the path is match to /contact.
   res.render('hosts/edit-home',{Pagetitle:"Add home",editing:false});
}

//this is for editing home.
exports.getEditHome=async(req,res,next)=>{  //it gets the value from the home.id;
  const [rows,]= await Home.fetchHomeDetails(req.params.id);
  const requestedHome=rows[0];
     if(!requestedHome){
      return res.redirect('/host-home-list');
     }else{
       res.render('hosts/edit-home',{
        home:requestedHome,
        Pagetitle:"Host home",
        currentPage:"host home",
        editing:req.query.editing
      })
     }
}

exports.postAddHome=(req,res,next)=>{   //executed if the path is match to /contact-data.
    const {homename,price,location,imageUrl,description}=req.body;
    const home= new Home(homename,price,location,imageUrl,description);
    home.save();
    res.redirect('/host-home-list');
}


//adding the edit home-details.
exports.postEditHome=(req,res,next)=>{
  const {id,homename,price,location,imageUrl,description}=req.body;
    const home= new Home(homename,price,location,imageUrl,description,id);
    home.save();
    res.redirect('/host-home-list');
    console.log(req.body);
}

//for deleting the home details
exports.postDeleteHome=(req,res,next)=>{
   Home.deleteHome(req.params.id)
  .then(()=>{
    res.redirect('/host-home-list');
  })
  .catch((error)=>{
    console.log("Error was occured",error);
  })
  
  // Home.deleteHome(req.params.id, (error)=>{   //requestedhome==deletehome
  //   if(error){
  //     console.log(error);
  //   }
  //   res.redirect('/host-home-list');
  // })
  //  const homeId=req.params.id;
  //   console.log(homeId);
  //   res.redirect('/host-home-list');
  //   console.log(req.body);
}


//for getting the host-home-ilst.
exports.getHostHome=async(req,res,next)=>{
  const [requestedHome,]=await Home.fetchAll();
  res.render('hosts/host-home-list',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite"});
}



//exports.requestedHome=requestedHome;