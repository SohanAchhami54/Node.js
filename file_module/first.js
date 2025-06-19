//creating our first server
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("I am currently learning the node.js and i have also completed the react.js series");
    res.end();
});
const PORT=3003;
server.listen(PORT,()=>{
    console.log(`server running at the port:${PORT}`);
});