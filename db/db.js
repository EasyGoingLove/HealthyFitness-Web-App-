import mysql from 'mysql';
import {} from 'dotenv/config';
// Create connection test on localhost with the DataBase
const db = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASS,
    database : process.env.DATABASE
  });

  export default db;