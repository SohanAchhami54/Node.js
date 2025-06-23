const http=require('http');
const logical=require('./logical');
http.createServer((req,res)=>{
    logical();
    return res.end();
}).listen(3000);