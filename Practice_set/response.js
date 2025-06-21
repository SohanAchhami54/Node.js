//this is the example of routing requests.
const http=require('http');
http.createServer((req,res)=>{
  if(req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("This is the home page");
    return res.end();
  }else if (req.url==="/about"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("This is the About page");
    return res.end();
  }else if (req.url==="/service"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("this is services page");
    return res.end();
  }
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("This is the default page");
  return res.end();
}).listen(3000);