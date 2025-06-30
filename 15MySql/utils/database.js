//connecting app to db.
const mysql=require('mysql2');
const pool=mysql.createPool({//group of reusable database connections instead of creatingthenew one of everyrequest.
   host:'localhost',
   user:'root',
   password:'root',
   database:'airbnb'
});
module.exports=pool.promise();