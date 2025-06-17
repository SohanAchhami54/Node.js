var fs=require('fs');
fs.unlink('hello2.txt',(err)=>{
    if(err) throw  err;
    console.log("file deleted successfully");
});