const express=require('express');//external module.
const path=require('path');//core module
const rootDir=require('./utils/pathUtil');
const homeRouter=require('./rouCont/homeRou');
const contactRouter=require('./rouCont/contact');
const app=express();

//express.static is middleware to serve the css file globally.
//app.use(express.static(path.join(__dirname,'..','public'))); //to use the css file here.

app.use(homeRouter);
//form ley pathako data lai object ma convert garney kam garxa.
app.use(express.urlencoded({}));//middleware to parse the form data.
app.use(contactRouter);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html'));
});
app.listen(3000,()=>{
    console.log("Server is running at the port:3000");
});