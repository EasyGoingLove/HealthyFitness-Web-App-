import db from '../db/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async(req,res) => {
  try {
      const {email , pass} = req.body;

      if(!email || !pass){
        return res.status(400).render('login', {
            message: 'Моля въведете Емейл и Парола'
        });
      }
      db.query('SELECT * FROM basicusers WHERE email = ?',[email],async(error,results) =>{
        if(results ==false){
            console.log("asdas");
            return  res.render('login',{
                message: 'Не съществува потребител с този Имейл'
            });
        }
        
        if(!results || !(await bcrypt.compare(pass,results[0].password))){
            res.status(401).render('login',{
                message: 'Грешно въведен Емейл или Парола'
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
           res.status(200).redirect('/dashboard')
        }
      })
  } catch (error) {
      console.log(error);
  }
}
 
export default login;