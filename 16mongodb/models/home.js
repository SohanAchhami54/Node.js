const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");

//const mongoConnect=require('../utils/database');
module.exports=class Home{
    constructor(homename,price,location,imageUrl,description,_id){
        this.homename=homename;
        this.price=price;
        this.location=location;
        this.imageUrl=imageUrl;
        this.description=description;
        if(_id){
          this._id=_id;
        }
       
    }
      save(){
       const db= getDb();
       if(this._id&& ObjectId.isValid(String(this._id)) ){    //update ko case yo ho
        const updateFields={
          homename:this.homename,
          price:this.price,
          location:this.location,
          imageUrl:this.imageUrl,
          description:this.description,
        }
        return db.collection('homes')
        .updateOne({_id: new ObjectId(String(this._id))}
        ,{$set:updateFields});
       }
      //  const {_id,...insertData}=this;
         return db.collection('homes').insertOne(this) //This accesses the homes collection from the database.
          //db.collection open the homes drawer inside the  database.
          // yo chai insert ko case ho.
      } 

      static fetchAll(){
          const db= getDb();
          return db.collection('homes').find().toArray();
      }

      static fetchHomeDetails(id){
          console.log(id);
          const db= getDb();
          return db.collection('homes').
          find({_id: new ObjectId(String(id))})
          .next();
          //string(id) makes sure that the id is in string
          //new ObjectId(string(id)) converts the string into a real objectid
      }

        static deleteHome(id){  //static means we can called this method without calling this object.
          console.log(id);
          const db= getDb();
          return db.collection('homes').
          deleteOne({_id: new ObjectId(String(id))})
           
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