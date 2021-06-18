import db from '../db/db.js';

const saveMeeting = async (req,res)=>{
   const userinf = [];
   const id_extract = req.body.inf[0].match(/(\d+)/);
   userinf.push(req.body.name,req.body.email,req.body.phone);
   
   db.query('SELECT * FROM grafik', await function(error,results) {
    if(error){console.log(error)}
    
     for (let i = 0; i < results.length; i++) {
    
         if(id_extract[0]==results[i].id){
         
         db.query(`UPDATE grafik SET state = 'Зает' WHERE id = '${id_extract[0]}'`);
         db.query(`UPDATE grafik SET userinfo = '${userinf}' WHERE id = '${id_extract[0]}'`);
         }
         
     }

   });
  res.redirect('/dashboard');

};

export default saveMeeting;