const express=require('express');
const app=express();
const {storeRouter}=require('./routers/storeRouter');
const {hostRouter}=require('./routers/hostRouter');
const {authRouter}=require('./routers/authRouter');
const errorController=require('./controllers/error');
const { default: mongoose } = require('mongoose');
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


app.use(express.urlencoded());//to parse the form data.
app.use(session({
    secret:'Airbnb', //to get the session id 
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