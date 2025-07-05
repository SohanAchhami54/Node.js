    const express=require('express');
    const app=express();
    const {storeRouter}=require('./routers/storeRouter');
    const {hostRouter}=require('./routers/hostRouter');
    const {authRouter}=require('./routers/authRouter');
    const errorController=require('./controllers/error');
    const multer=require('multer');
    const path=require('path')
    const { default: mongoose } = require('mongoose');
    const rootDir=require('./utils/pathutil');//local 
    const session=require('express-session');//user-session lai manage garney.
    const MongoDbStore=require('connect-mongodb-session')(session); //session lai db ma permanently store garna ko lagi.
    const DB_PATH="mongodb+srv://sohanachhami:sohanachhami123@airbnb.tjemzt4.mongodb.net/airbnb?retryWrites=true&w=majority&appName=airbnb";
    app.set('view engine','ejs');//to use the ejs features in our app.

    const store= new MongoDbStore({  //mongodb ma naya store banauney session lai store garna ko lagi.
        uri:DB_PATH,
        collection:'sessions',
    })

    app.use((req,res,next)=>{  // it runs for all.
        console.log("Url:"+req.url+"Method:"+req.method);
        next();
    });

    //to save the image to the specific folder
    
    const randomString=(length)=>{
        const characters='abcdefghijklmnopqrstuvwxyz';
        let result='';
        for(let i=0;i<length;i++){
            result+=characters.charAt(Math.floor(Math.random()*characters.length));
        }
        return result;
    }
    //this is for frontend
    //Multer writes the image file (binary data) to your filesystem:
    const storage=multer.diskStorage({  //This creates a custom disk storage engine for multer. in fileSystem
        destination:(req,file,cb)=>{   //the callback function that you must call to finish this step
            cb(null,'uploads/');    //store the upload file into the uploads
        },
        filename:(req,file,cb)=>{
            cb(null,randomString(10)+'-'+file.originalname);
        }
    })

   //this code send the data to the backend
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  } //it send the req.file if the image is of type image/jpeg and image/jpg.
};

const multerOptions = {
  storage,       // ✅ custom storage engine
  fileFilter     // ✅ correct spelling here (capital 'F')
};

    app.use(express.urlencoded());//to parse the form data.
    
    app.use(multer(multerOptions).single('image'));// helps to upload the image
    //file bata aayeko data lai multer ley accept garxa.
    app.use('/uploads',express.static(path.join(rootDir,'uploads')));
    app.use('/homes/uploads',express.static(path.join(rootDir,'uploads')));
    //app.use('/favorite/uploads',express.static(path.join(rootDir,'uploads')));
    //app.use(express.static(path.join(rootDir,'public')));
    app.use(session({  //for the session setup. and also it is used to sign the session id cookie.
        secret:'Airbnb', //to get the session    id 
        resave:false, //to unsave the value that is already present.
        saveUninitialized:true, //to store our current session.
        store  //aaba hamro memory bata session ko value database ma store hunxa.
    }))

    app.use((req,res,next)=>{ 
        req.isLoggedIn=req.session.isLoggedIn;
        next();
    })
    app.use(storeRouter);

    // app.use((req,res,next)=>{  //user authentication ko lagi
    //     if(req.isLoggedIn){
    //         next();
    //     }else{
    //         res.redirect('/login');
    //     }
    // });
    app.use( hostRouter);

    app.use(authRouter);
    app.use(errorController.errorPage);//to handle the error page.

    mongoose.connect(DB_PATH)
    .then(()=>{
        console.log("Connecting to the server.");
        app.listen(3000,()=>{
            console.log("Server is running at the port 3000:");
        })
    })
    .catch((err)=>{
        console.log("Error was occured:",err);
    })