const http=require('http');
const home=require('./home');
http.createServer(home).listen(3000,()=>{
    console.log("server is running at the port 3000 kindly wait");
});
