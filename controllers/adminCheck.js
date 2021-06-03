import {promisify} from 'util';
import db from '../db/db.js';
import jwt from 'jsonwebtoken';

const isItTheAdmin = async(req,res,next) => {
  if(req.cookies.jwt){
      try {
          // Verify Token
          const decoded = await promisify(jwt.verify)(
              req.cookies.jwt ,
              process.env.JWT_SECRET
              );
          //Check if the user is still here
          db.query('SELECT * FROM adminaccount WHERE id = ?',[decoded.id], (error,results) =>{
              if(!results){
                  return next();
              }
              req.user = results[0];
              return next();
          });

      } catch (error) {
          console.log(error);
          return next();
      }
  }else{
    next();
  }
      
}

export default isItTheAdmin;