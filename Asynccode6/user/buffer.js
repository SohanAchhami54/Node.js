const fs=require('fs');
// const catMe=require('cat-me');
const requestHandler=(req,res)=>{
    console.log(req.url,req.method);
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
         const body=[];
       // data continously coming in the form of chunk and store in body as a small buffer(raw data);
         req.on("data",(chunk)=>{
            console.log(chunk);//<Buffer 75 73 65 72 6e 61 6d 65 3d 53 6f 68 61 6e 26 67 65 6e 64 65 72 3d 6d 61 6c 65>//data came here as a buffer object.
            body.push(chunk);
         });
       //yo chai jaba data aauna stop hunxa ani hami ley yo function through bata thahapauxam.
         req.on("end",()=>{
            const finalResult=Buffer.concat(body).toString();//
            console.log(finalResult);
            const params=new URLSearchParams(finalResult);//URlSearchParams take the finalResult into readable form
            //params bata aako entries like value lai direct object ma convert garney kam garxa.
            const bodyObj=Object.fromEntries(params);
            console.log(bodyObj);
            //the writeFileSync Block everything. means it is done by the event loop but it has many others work.
            fs.writeFile('output.txt',JSON.stringify(bodyObj),error=>{
              res.statusCode=302;
              res.setHeader('Location','/');
              return res.end();
            });//convert obj into json string
         });
     }else{
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write("This is nothing page.");
     return res.end();
     }
};
module.exports=requestHandler;
