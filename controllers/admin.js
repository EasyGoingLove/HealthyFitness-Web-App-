import db from '../db/db.js';
import jwt from 'jsonwebtoken';

const adminAuth = async(req,res) =>{
  
    
      try {
          const {adminName , adminpass} = req.body;
    
          if(!adminName || !adminpass){
            return res.status(400).render('login', {
                message: 'Моля въведете и двете полета.'
            });
          }
          db.query('SELECT * FROM adminaccount WHERE adminName = ?',[adminName],async(error,results) =>{

            if(!results || !adminpass === results[0].adminpass){
                res.status(401).render('login',{
                    message: 'Грешно въведен Име или Парола'
                })
            }else{
                const id = results[0].id;
                const token = jwt.sign({id:id}, process.env.jwt_SECRET,{
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
               const cookieOptions ={
                    expires: new Date(
                       Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 *60 *60 *1000
                   ),
                   httpOnly: true
               }
               res.cookie('jwt',token,cookieOptions);
               res.status(200).redirect('/adminboard');
            }
          })
      } catch (error) {
          console.log(error);
      }
}

export default adminAuth;