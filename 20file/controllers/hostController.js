const Home = require("../models/home");
//main logic here. like the host
exports.getHomeDetails=(req,res,next)=>{  //executed if the path is match to /contact.
   res.render('hosts/edit-home',{
    Pagetitle:"Add home",
    editing:false,
     isLoggedIn:req.isLoggedIn,
     user:req.session.user
    });
}

//this is for editing home.
exports.getEditHome=async(req,res,next)=>{  //it gets the value from the home._id;
  const requestedHome= await Home.findById(req.params.id);
     if(!requestedHome){
      return res.redirect('/host-home-list');
     }else{
       res.render('hosts/edit-home',{
        home:requestedHome,
        Pagetitle:"Host home",
        currentPage:"host home",
         editing:req.query.editing,
         isLoggedIn:req.isLoggedIn,
         user:req.session.user,
      })
     }
}
exports.postAddHome=(req,res,next)=>{   //executed if the path is match to /contact-data.
    const {homename,price,location,description}=req.body;
    console.log(req.body);
    console.log("image data", req.file);
    
    if(!req.file){
       return  res.status(422).send('No image provided');
    }

    const image=req.file.path;
//     image data {
//   fieldname: 'image',
//   originalname: 'sohanli.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 48 00 48 00 00 ff e1 00 4c 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 02 01 12 00 03 00 00 00 01 00 01 ... 248987 more bytes>,
//   size: 249037
// }
    const home= new Home({homename,price,location,image,description} );
    home.save().then(()=>{ //as home.save() returns the promises.
      console.log("home save successfully");
    });
    res.redirect('/host-home-list');
}


//adding the edit home-details.
exports.postEditHome=(req,res,next)=>{
  let {id,homename,price,location,description}=req.body;
  //const image=req.file.path;//teo image ko req.file.path chai uploads .... .jpg.
  id=id.trim();
      Home.findById(id)
      .then((home)=>{
        console.log("home objects:", home);
        home.homename=homename;
        home.price=price;
        home.location=location;
       // home.image=image;
        home.description=description;
        if(req.file){ //this is for new file.
          home.image=req.file.path; //image ko path yesma aayo hoina.
        }
        home.save()
       .then((result)=>{
       console.log(result); 
       });
      })
    res.redirect('/host-home-list');
    console.log(req.body);
}

//for deleting the home details
exports.postDeleteHome=(req,res,next)=>{
   Home.findByIdAndDelete(req.params.id) //when it runs the mongoose internally use findOneAndDelete
  .then(()=>{
    res.redirect('/host-home-list');
  })
  .catch((error)=>{
    console.log("Error was occured",error);
  })
}


//for getting the host-home-ilst.
exports.getHostHome=async(req,res,next)=>{
  const requestedHome=await Home.find();
  res.render('hosts/host-home-list',{requestedHome,Pagetitle:"Favorite",currentPage:"Favorite",
    isLoggedIn:req.isLoggedIn,user:req.session.user});
}



//exports.requestedHome=requestedHome;