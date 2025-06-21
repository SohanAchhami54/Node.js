const http=require('http');
http.createServer((req,res)=>{
    console.log(req.url,req.method);
//    if(req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`
        <html>
         <header class="header" style="display:flex">
           <nav class="nav" style="display:flex; padding:20px 40px">
            <section class="home"><a href="/">Home</a></section>
            <section class="list">
                <ul style="display:flex;justify-content-space-around; gap:20px;list-style:none">
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kid">Kid</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </section>
        </nav>
    </header>
        </html>
        `)
        if(req.url==="/"){
            res.write("This is the home page.   <br>");
            res.write("It will give you the introduction of all this site <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This page will give you information about the available clothes <br>");
            res.write("This is the main page");
            return res.end();
            
        }else if(req.url==="/men"){
            res.write("this is men clothes");
            res.write("this is the field of the men pages");
            res.write("in this page there is the  clothes of all the categories of the men pages");
            return res.end();
        }else if(req.url==="/women"){
             res.write("this is women clothes");
             res.write("You can shop any items in this categories");
             res.write("this is the field of the women clothes section");
             return res.end();
        }else if (req.url==="/kid"){
            res.write("this is kid clothes");
            return res.end();
        }else if(req.url==="/cart"){
            res.write("this is the cart method.");
            return res.end();
        }
 
       // res.writeHead(200,{'Content-Type':'text/html'});
        res.write("this is the main page");
        res.end();
  // }
   
}).listen(3000);