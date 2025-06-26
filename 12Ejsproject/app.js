const express=require('express');
const app=express();
const {userRouter}=require('./routers/userRouter');
const {hostRouter}=require('./routers/hostRouter');
app.set('view engine','ejs');//to use the ejs features in our app.
app.use((req,res,next)=>{  // it runs for all.
    console.log("Url:"+req.url+"Method:"+req.method);
    next();
});

app.use(userRouter);
app.use(express.urlencoded());//to parse the form data.
app.use(hostRouter);
app.listen(3000,()=>{
    console.log('Server is running at the port:3000');
});