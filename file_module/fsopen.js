var fs=require('fs');
fs.open('hello.txt','w',(err,file)=>{
    if(err) throw err;
    console.log("Saved");
})