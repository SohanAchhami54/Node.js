const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello i am event loop and js");
    // to kill the event loop.
    //process.end();
    res.end();
}).listen(3005);