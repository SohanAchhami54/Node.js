const express=require('express');//external module.
const path=require('path');//core module.
// const bodyParser=require('body-parse');
const rootDir=require('./utils/pathUtil')
const userRouter=require('./routes/userRoute');
const hostRouter=require('./routes/hostRoute')
const app=express();

app.use((req,res,next)=>{
    console.log("URl:"+ req.url,"method:"+req.method);
    next();
});

app.use( userRouter);
app.use(express.urlencoded({extended:true}));
app.use("/host", hostRouter);


app.use((req,res,next)=>{   
    res.status(404).sendFile(path.join(rootDir,'views','error.html'));
});


app.listen(3000,()=>{
    console.log("Server is runnig at the port:3000");
});
