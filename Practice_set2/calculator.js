const calculator=(req,res)=>{
     res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="/calculate-result" method="POST">');
        res.write('<label for="num1">Num1:</label>');
        res.write('<input type="number" id="num1" name="number1" placeholder="enter num1  " /> <br>');
        
        res.write('<label for="num2">Num2:</label>');
        res.write('<input type="number" id="num2" name="number2" placeholder="enter num2 "/>  <br>');
        res.write('<button type="Submit">Sum</button>');
        res.write('</form>');
        return res.end();
}
module.exports=calculator;