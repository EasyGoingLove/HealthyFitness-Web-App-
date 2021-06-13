import db from '../db/db.js';

const newsUploader = (req,res) =>{

    db.query('INSERT INTO news SET ?', {news:req.body.news}, (error,results)=>{
        if(error){console.log(error)} 
        else{
            console.log("u did it!");  
            res.redirect('/adminboard');
        }
    });


};
export default newsUploader;