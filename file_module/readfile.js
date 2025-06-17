var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('index.html', (err,data)=>{
         res.writeHead(200,{'Content-type':'text/html'});
         res.write(req.url);
         res.write(data);
         res.end();
    });
}).listen(8087);