const fs=require('fs');
console.log("1. Start of script");
//Synchronous blocking operation.
console.log("2.Reading file asynchronously");
const dataSync=fs.readFileSync("output.txt","utf8");
console.log(dataSync);

console.log("3.Synchronous read complete");

//Asynchronous operation
console.log("4.Reading file asynchronously");
fs.readFile("output.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log("5.Asynchronous data:",data);
});
console.log("6.Asynchronous read complete");