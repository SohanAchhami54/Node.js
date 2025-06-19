const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html>');
        res.write('<head>Input field</head>');
        res.write('<body>');
        //form
        res.write("Enter the details");
        res.write('<form action="/form-data" method="POST">');
        res.write('<label for="username">Username:</label>');
        res.write('<input type="text" id="username" name="username" placeholder="enter your name"/> ');
        
        //for gender
        res.write('<label for="gender">Gender:<br>');
        
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male"/>');
         res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"/>');
        res.write('</label>');
    
          res.write('<input type="submit" value="Submit"/>');
        res.write('</form>');
        res.write('</body>');

        res.write('</html>');
        return  res.end();

     }else if(req.url.toLowerCase()==="/form-data" && req.method==="POST"){
        fs.writeFileSync('output.txt',"Prabhat kc");
        res.statusCode=302;
        res.setHeader('Location',"/");
        return res.end();
     }

       

     res.writeHead(200,{'Content-Type':'text/html'});
     res.write("This is nothing page.");
     res.end();
   
}).listen(3000);