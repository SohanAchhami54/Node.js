var fs=require('fs');
fs.appendFile('hello.txt',"\n i am learning the node.js",(err)=>{
    if(err) throw err;
    console.log("Saved");
})