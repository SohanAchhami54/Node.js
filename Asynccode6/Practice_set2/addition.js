    const addition=(req,res)=>{ 
    res.writeHead(200,{'Content-Type':'text/html'});
      const num=[];
      let sum;
      console.log("1.Data is coming.");
       res.write("The result of the sum:");

       req.on("data",(chunk)=>{//It emits the "data" event on the req object.
        console.log("2.Data is coming as a buffer Object.");
        console.log(chunk);
        num.push(chunk);
      });
      
      req.on("end",()=>{
        console.log("3.Data is collected into the new buffer and then standard format and then object.");
        const bufresult=Buffer.concat(num).toString();
       
        console.log(bufresult);
        const stFo=new URLSearchParams(bufresult);
        console.log(stFo);
        const finalNumber=Object.fromEntries(stFo);
        console.log(finalNumber);
         sum=parseInt(finalNumber.number1)+parseInt(finalNumber.number2);
        console.log(parseInt(finalNumber.number1)+parseInt(finalNumber.number2));
         console.log("4.Final data.");
        res.write(`${sum}`);
             return res.end();
      });
     //we need to calculate the result of sum inside in the res.on("end",()=>{}) because of async code.
};
module.exports=addition;