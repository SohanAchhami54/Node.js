//save()
 //find()
//fetchHomeDetails(id)
//deleteHome(id)

const mongoose =require('mongoose');
//mongoose lai vaneko yo type ko Schema banau vanerw 
//ani tesma chai yo sabai object hunu parxa vanerw.
const homeSchema=  mongoose.Schema({
  homename:{type:String,required:true},
  price:{type:Number,required:true},
  location:{type:String,required:true},
  imageUrl:{type:String},
  description:{type:String}
})

// homeSchema.pre('findOneAndDelete',async function(){ //pre is the mongoose pre middleware
//   console.log("Came to pre hook while deleting the home and id's from favorite also.")
//    const homeId=this.getQuery()._id;  //home ko id nikaleko jun delete huney wala xa.
//    await favorite.deleteMany({id:homeId}); //ani tei home ko id favorite ma delete garna use gareko.
// })

module.exports=mongoose.model('Home',homeSchema);























// const { ObjectId } = require("mongodb");
// const { getDb } = require("../utils/database");

// //const mongoConnect=require('../utils/database');
// module.exports=class Home{
//     constructor(homename,price,location,imageUrl,description,_id){
//         this.homename=homename;
//         this.price=price;
//         this.location=location;
//         this.imageUrl=imageUrl;
//         this.description=description;
//         if(_id){
//           this._id=_id;
//         }
       
//     }
//       save(){
//        const db= getDb();
//        if(this._id&& ObjectId.isValid(String(this._id)) ){    //update ko case yo ho
//         const updateFields={
//           homename:this.homename,
//           price:this.price,
//           location:this.location,
//           imageUrl:this.imageUrl,
//           description:this.description,
//         }
//         return db.collection('homes')
//         .updateOne({_id: new ObjectId(String(this._id))}
//         ,{$set:updateFields});
//        }
//       //  const {_id,...insertData}=this;
//          return db.collection('homes').insertOne(this) //This accesses the homes collection from the database.
//           //db.collection open the homes drawer inside the  database.
//           // yo chai insert ko case ho.
//       } 

//       static find(){
//           const db= getDb();
//           return db.collection('homes').find().toArray();
//       }

//       static fetchHomeDetails(id){
//           console.log(id);
//           const db= getDb();
//           return db.collection('homes').
//           find({_id: new ObjectId(String(id))})
//           .next();
//           //string(id) makes sure that the id is in string
//           //new ObjectId(string(id)) converts the string into a real objectid
//       }

//         static deleteHome(id){  //static means we can called this method without calling this object.
//           console.log(id);
//           const db= getDb();
//           return db.collection('homes').
//           deleteOne({_id: new ObjectId(String(id))})
           
//         }
// }




















