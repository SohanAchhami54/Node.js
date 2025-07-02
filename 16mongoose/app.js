const express=require('express');
const app=express();
const {storeRouter}=require('./routers/storeRouter');
const {hostRouter}=require('./routers/hostRouter');
const errorController=require('./controllers/error');
const { default: mongoose } = require('mongoose');
app.set('view engine','ejs');//to use the ejs features in our app.
app.use((req,res,next)=>{  // it runs for all.
    console.log("Url:"+req.url+"Method:"+req.method);
    next();
});
app.use(express.urlencoded());//to parse the form data.
app.use(storeRouter);

app.use(hostRouter);
app.use(errorController.errorPage);//to handle the error page.

// const Db_path="mongodb+srv://sohanachhami:sohanachhami123@airbnb.tjemzt4.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";
// mongoose.connect(Db_path)
// .then(()=>{
//    console.log("Connecting to mongodb");
//    app.listen(3000,()=>{
//         console.log('Server is running at the port 3000:');
//     })
// })
// .catch((err)=>{
//    console.log("Error was occured:",err);
// })
const DB_PATH="mongodb+srv://sohanachhami:sohanachhami123@airbnb.tjemzt4.mongodb.net/airbnb?retryWrites=true&w=majority&appName=airbnb";
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