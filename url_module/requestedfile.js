// //create a node.js file that opens the file requested by the user and returns the content of the file.
var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer((req,res)=>{
    var q=url.parse(req.url ,true);
    var fileName="."+ q.pathname;
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead(200,{'Content-type':'text/html'});
             return res.end("404 error not found");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();

    });     
}).listen(8090);
