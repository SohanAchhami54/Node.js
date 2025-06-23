const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello i am learning the node.js series");
    res.write("hello i am learning the node.js series and i am learning the backend series.");
    return  res.end();
}).listen(3001);