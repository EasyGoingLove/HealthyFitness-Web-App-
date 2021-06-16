import db from '../db/db.js';

const suggestedDate = (req,res)=>{
  console.log(req.body);
   let userinf  = "Име : "+req.body.name +"----"+" Имейл : " + req.body.email +"----"+ " Телефон : " + req.body.phone;
  db.query(`INSERT INTO predlojeniq (day ,time , date,userinfo) VALUES (
      '${req.body.day}','${req.body.hour}'
      ,'${req.body.date}','${userinf}')`);
      
  res.redirect('/dashboard');
};

export default suggestedDate;