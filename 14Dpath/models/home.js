const path=require('path');
const fs=require('fs');
const Favorite = require('./favorite');
module.exports=class Home{
    constructor(homename,price,location,imageUrl){
        this.homename=homename;
        this.price=price;
        this.location=location;
        this.imageUrl=imageUrl;
    }
      // save(){
      //   //__dirname vaneko chai ma aailey kun current folder ma xu vaneko ho.
      //    this.id=Math.floor(Math.random()*1000)+1;
      //    Home.fetchAll((requestedHome)=>{ //save garnu vanda paila file read garerw aauney.
      //       requestedHome.push(this);
      //       const homeDataPath=(path.join(__dirname, '../','data','home.json'))
      //       fs.writeFile(homeDataPath,JSON.stringify(requestedHome),(error)=>{// file change vayo vaney nodemon lai lagxa ki kei change yesma vayo vanerw ani feri server restart gardinxa ani home page empty hunxa.
      //       if(error){
      //         console.log("Error occurred:", error);    
      //       }else{
      //        console.log("Home data saved successfully!");
      //      }
      //   });
      //   })
        
      // }


      save(){
           Home.fetchAll((requestedHome)=>{
              if(this.id){
                this.id=String(this.id).trim();
                 requestedHome=requestedHome.map(allhome=>String(allhome.id).trim()==this.id?this:allhome);
              }else{
                   this.id=Math.floor(Math.random()*1000)+1;
                   requestedHome.push(this);
              } 
             const homeDataPath=path.join(__dirname,'../','data','home.json');
             fs.writeFile(homeDataPath,JSON.stringify(requestedHome),(error)=>{
              if(error){
                console.log("Error occured",error);
              }else{
                console.log("Home data saved successfully");
              }
             })
         })
      }





    
      static fetchAll(callback){
        const homePath=(path.join(__dirname,'../','data','home.json'));
        fs.readFile(homePath,(err,data)=>{
          if(!err){
             callback(JSON.parse(data));
          }else{
            callback([]);
          }
        });
      }


      static fetchHomeDetails(id,callback){
           Home.fetchAll(homes=>{
              const homeFound= homes.find(home=>home.id==id);
              callback(homeFound);
           })
      }

        static deleteHome(id,callback){  //static means we can called this method without calling this object.
           Home.fetchAll(homes=>{
               homes= homes.filter(home=>String(home.id).trim()!==String(id).trim());
                const homeDataPath=path.join(__dirname,'../','data','home.json');
                 fs.writeFile(homeDataPath,JSON.stringify(homes),error=>{
                 Favorite.deleteFavHome(id,callback);
                });
                
           })
      }
}
























// class Rectangle{  //this is the template for making the objects.
//     constructor(height,width,radius){
//         this.height=height;//to create the object.
//         this.width=width;
//         this.radius=radius;
//     }
//     calculateArea(){
//         return this.height*this.width;//this refers to the current object
//     }
//     calculateAreaofCircle(){
//         return (22/7)*this.radius*this.radius;
//     }
// }

// const square=new Rectangle(10,20,30);// a real object using the class
// console.log(square);
// //to calculate the area
// console.log(square.calculateArea());    
// console.log(square.calculateAreaofCircle());