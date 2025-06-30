const path=require('path');
const fs=require('fs');
const Home = require("./home"); 
module.exports=class Favorite{

     static addFavorite(homeid,callback){
         Favorite.getFavorites((favorite)=>{ //save garnu vanda paila file read garerw aauney.
          if(favorite.includes(homeid)){
            //console.log("Home is already marked");
            return callback(null);//return callback with no error.
          }else{
            favorite.push(homeid);
            const favDataPath=path.join(__dirname,'../','data','favorite.json');    
            fs.writeFile(favDataPath,JSON.stringify(favorite),callback);
          }  
        })
    }

    static getFavorites(callback){
     const favDataPath=path.join(__dirname,'../','data','favorite.json');    
     fs.readFile(favDataPath,(err,data)=>{
         callback(!err?JSON.parse(data):[]);
      });
    }

     static deleteFavHome(delid,callback){  //static means we can called this method without calling this object.
                 Favorite.getFavorites(homeIds=>{
                 homeIds= homeIds.filter(homeid=>delid!==homeid);
                  const FavoritePath=path.join(__dirname,'../','data','favorite.json');
                  fs.writeFile(FavoritePath,JSON.stringify(homeIds),callback);

             })
        }

    //  static deleteHome(id,callback){  //static means we can called this method without calling this object.
    //            Favorite.getFavorites(homes=>{
    //               homes= homes.filter(home=>String(home.id).trim()!==String(id).trim());
    //               const homeDataPath=path.join(__dirname,'../','data','favorite.json');
    //               fs.writeFile(homeDataPath,JSON.stringify(homes),callback);
    //            })
    //       }
}