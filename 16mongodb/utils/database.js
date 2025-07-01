const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;

const MONGO_URL="mongodb+srv://sohanachhami:sohanachhami123@airbnb.tjemzt4.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";

let _db;
const mongoConnect=async(callback)=>{
     const client= await mongoClient.connect(MONGO_URL);
     _db=client.db('airbnb'); //to connect to the database.
     callback(); 
}

const getDb=()=>{
     return _db;
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

