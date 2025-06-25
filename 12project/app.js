const express=require('express');//external module
const app=express();
const path=require('path');//core module
const rootDir=require('./utils/path');//local module
const homeRouter=require('./routes/homeRouter');//local module
const contactRouter=require('./routes/contactRouter');//local module
// const rootDir=require('./utils/path')

app.use((req,res,next)=>{
    console.log("URL:"+req.url+"method:"+req.method);
    next();
})
app.use(homeRouter);
app.use(express.urlencoded());
app.use(contactRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html'));
});
app.listen(3000,()=>{
    console.log("server is running at the port:3000");
});