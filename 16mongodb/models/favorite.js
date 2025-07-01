const { getDb } = require("../utils/database");

module.exports=class Favorite{
     constructor(homeId){
         this.homeId=homeId;
    }


    save(){
      const db=getDb();
       return db.collection('favorite').findOne({homeId:this.homeId})//paila nai favorite xa vaney 
       .then((existing)=>{ //paila nai favorite xa vaney Promise.resolve() return gardiney.
        if(!existing){
            return db.collection('favorite').insertOne(this);
        } 
        return Promise.resolve();
       })
    }
  
     static addFavorite(homeid,callback){
         
    }


     
    static getFavorites(){
      const db=getDb();
      return db.collection('favorite').find().toArray();
         
    }

     static deleteFavHome(delid){  //static means we can called this method without calling this object.
       console.log(delid);
          const db= getDb();
          return db.collection('favorite')
          .deleteOne({homeId:delid.trim()});
    }
}