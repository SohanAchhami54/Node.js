const db=require('../utils/database');
module.exports=class Home{
    constructor(homename,price,location,imageUrl,description,id){
       this.id=id;
        this.homename=homename;
        this.price=price;
        this.location=location;
        this.imageUrl=imageUrl;
        this.description=description;
       
    }
      save(){
        if(this.id){
          return db.execute( //update
        `UPDATE air_table 
         SET homename = ?, price = ?, location = ?, imageUrl = ?, description = ? 
         WHERE id = ?`,
        [this.homename, this.price, this.location, this.imageUrl, this.description, this.id]
      );
        }  //insert
        return db.execute('INSERT INTO air_table (homename,price,location,imageUrl,description) VALUES (?,?,?,?,?)',[this.homename,this.price,this.location,this.imageUrl,this.description]);
      }

      static fetchAll(){
         return  db.execute('SELECT * FROM air_table ');
      }

      static fetchHomeDetails(id){
          return db.execute('SELECT * FROM  air_table WHERE id=?',[id]);
      }

        static deleteHome(id){  //static means we can called this method without calling this object.
          return db.execute('DELETE FROM air_table WHERE id=?',[id]);
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