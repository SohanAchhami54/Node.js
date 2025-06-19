const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);//the part of the url that come after the domain name.
    res.write(req.method);//which method like get or post.s
    res.write("my name is sohan achhami \n and i am learning the node.js series from the youtube channel.");
    res.end();
}).listen(3000);