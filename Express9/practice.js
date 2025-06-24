const express=require('express');
const app=express();
 
//first middleware.
// app.use((req,res,next)=>{
//     console.log("This is the first middleware",req.url,req.method);
//     next();
// });
// //second middleware.
// app.use((req,res,next)=>{
//     console.log("This is the second middleware",req.url,req.method);
//     next();
// });
//   //third middleware.
// app.use((req,res,next)=>{  
//     res.send('<p>Hello this is response from the server');
// });


// Middleware to parse POST form data (important)
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res,next)=>{
    console.log("This is the default path");
  res.send('<p>hello this is first middleware.</p>')
   
   
});
app.get("/contact-us",(req,res,next)=>{
    res.send(`
        <html>
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Form</title>
    </head>
   <body>
    <h2>Enter Your Details</h2>
    <form action="/contact-us" method="post">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" required><br><br>
  
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br><br>
  
      <input type="submit" value="Submit">
    </form>
   </body>
   </html>
          `)
  });
// app.post("/submit",(req,res,next)=>{
//     const {name,email}=req.body;
//     res.send(`<h3>Name:${name} and Email:${email}`);
// });

app.post("/contact-us",(req,res,next)=>{
    const {name,email}=req.body;
    res.send(`<h1> Name:${name} and Email:${email} </h1>`);
})
app.listen(3000,()=>{
    console.log("Server is running at the port:3000");
});