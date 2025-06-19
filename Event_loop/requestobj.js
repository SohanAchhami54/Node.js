const http=require('http');
http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);//an object.   
}).listen(3000,()=>{
    console.log("Server running at the port 3000");
});