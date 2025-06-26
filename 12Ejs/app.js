const express=require('express');//external module
const app = express();
const homeRouter=require('./routes/homeRouter');//local module
const {contactRouter}=require('./routes/contactRouter');//local module

//view engine to render the templates files.
app.set('view engine','ejs');
app.use((req,res,next)=>{
    console.log("URl:"+req.url+"Method:"+req.method);
    next();
});

app.use(homeRouter);
app.use(express.urlencoded());
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).render('error',{Pagetitle:"Error Page"});
});
app.listen(3000,()=>{
    console.log("server is running at the port:3000");
})