var fs=require('fs');
fs.rename('hi.txt','helloman.txt',(err)=>{
    if(err) throw err;
    console.log("file rename successfully");
})