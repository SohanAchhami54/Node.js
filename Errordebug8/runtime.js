const http=require('http');
http.createServer((req,res)=>{
    res.write("Runtime error");
    res.write("node.js is very easy to learn.");
    res.write("I am also going to learn the mongodb and mysql from the yt channel");
    // console.log(x);
   // let num=10;
   // num();
    return res.end();
}).listen(3000);