//this is the rouring request by the user
const http=require('http');
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("hello this is home page.");
        return res.end();
    }else if(req.url==="/services"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("This is the product");
        return res.end();
    }else if(req.url==="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Email address is:sohanachmm@gmail.com");
        res.end();
        return res.end();
    }else if(req.url==="/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("We provide full stack and cloud based services");
        res.write("We also provide the web and app dev services");
        res.write("We have been providing these services over the past 5 years");
        res.write("you can also see the review of our services");
        return res.end();
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("this is dashboard");
    res.end();
}).listen(3000);