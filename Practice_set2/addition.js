    const addition=(req,res)=>{ 
    res.writeHead(200,{'Content-Type':'text/html'});
      const num=[];
       res.write("The result of the sum:");
        req.on("data",(chunk)=>{
        console.log(chunk);
        num.push(chunk);
      });
      
      req.on("end",()=>{
        const bufresult=Buffer.concat(num).toString();
        console.log(bufresult);
        const stFo=new URLSearchParams(bufresult);
        console.log(stFo);
        const finalNumber=Object.fromEntries(stFo);
        console.log(finalNumber);
        console.log(parseInt(finalNumber.number1)+parseInt(finalNumber.number2));
        const sum=parseInt(finalNumber.number1)+parseInt(finalNumber.number2);
        res.write(`Result:${sum}`);
             return res.end();
      });
};
module.exports=addition;