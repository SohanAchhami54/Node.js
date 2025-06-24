const express=require('express');
const app=express();//aaba yo line ley express lai open gareo ani tools haru lai chai app lai diyo so aaba app.use

//middleware 1
app.get("/", (req,res,next)=>{
    console.log("First middleware",req.url,req.method);
    //res.send('<p>this is first middleware');//res.send() vaneko end ho. yo set garisakey paxi next() garna mildaina.
    next();
});

//middleware 3.
//here order is very important.
app.post("/submit-details", (req,res,next)=>{
    console.log("Third middleware",req.url,req.method);
    res.send('<p>This is response second<p>');
});//yedi hami ley ya res.send() nagareko vayea next() garnu parthiyo.
//middleware 2
app.use("/",(req,res,next)=>{
    console.log("Second middleware",req.url,req.method);
    res.send('<p> this is second middleware');
});

app.listen( 3000,()=>{
    console.log("server is running at the port:3000");
})