import db from '../db/db.js';

const setGoal = async(req,res)=>{
   console.log(req.body);
  
    db.query('SELECT * FROM celnapotrbitelq', await function(error,results) {
        if(error){console.log(error)}
        if(results.length==0){
        db.query(`INSERT INTO celnapotrbitelq (userID ,cel) VALUES ('${req.body.id}','${req.body.cel}')`);
        console.log("insert 1");
        }
        
        for (let i = 0; i < results.length; i++) {
          if( results[i].userID ==req.body.id ){
             db.query(`UPDATE celnapotrbitelq SET cel = '${req.body.cel}' WHERE cel = '${results[i].cel}'`);
             console.log("update");
             break;
           }
           if(i == results.length-1){
            db.query(`INSERT INTO celnapotrbitelq (userID ,cel) VALUES ('${req.body.id}','${req.body.cel}')`);
            console.log("insert 2");
            break;
           }
           
            
        }
      
    });
    
    res.redirect('/adminboard');


}

export default setGoal;