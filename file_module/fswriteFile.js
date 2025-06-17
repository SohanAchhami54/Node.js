var fs=require('fs');
fs.writeFile('hello2.txt','i am learning the node.js content series.',(err)=>{
    if(err) throw err;
    console.log("File write");
});