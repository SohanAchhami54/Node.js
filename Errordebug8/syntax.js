const http=require('http');
http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("hello i am learning the node.js series);
    res.write("hello i am learning the node.js series");

        return res.end();
}).listen(3000);