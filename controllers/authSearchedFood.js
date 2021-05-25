import db from '../db/db.js';

const importSerachedFood = async(req,res,next) => {
    const email =  req.body;
    console.log(email, "rarw");
    
    



        // db.query('INSERT INTO basicusers SET ?', {
        //     email:email , name:name 

        // }, (error,results)=>{
        //     if(error){console.log(error)}
        //     else{console.log("u did it!")}
        // });
};
export default importSerachedFood;