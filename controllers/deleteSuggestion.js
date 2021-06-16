import db from '../db/db.js';

const deleteSuggestion = (req,res)=>{
    console.log(req.body);
    let id = req.body.delete_id;
    db.query(`DELETE FROM predlojeniq WHERE id = '${id}' LIMIT 1`);
        
    res.redirect('/adminboard');
  };
  
export default deleteSuggestion;