const addition=require('./addition');
const calculator=require('./calculator')
const incomingRequest=(req,res)=>{
   if(req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Welcome THis is our home");
    res.write('<html>');
    res.write('<body>');
    res.write('<a href="/calculator">Calculator</a>');
    res.write('</body>');

    res.write('</html>');

    return res.end();
}else if(req.url.toLowerCase()==="/calculator" ){
    calculator(req,res);

}else if(req.url.toLowerCase()==="/calculate-result" && req.method==="POST"){
    addition(req,res);
}else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello");
    return res.end();
}
}
module.exports=incomingRequest;
console.log(module.exports.incomingRequest);
