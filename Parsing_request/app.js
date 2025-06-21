const http=require('http');
const requestHandler=require('./buffer');
http.createServer(requestHandler).listen(3000,()=>{
    console.log(`server is running at the port 3000. Please kindly wait`);
});
