import db from '../db/db.js';


const getSuggestions = async (req,res)=>{

    let allSuggestions = [] ; 
    db.query('SELECT * FROM predlojeniq', await function(error,results) {
        if(error){console.log(error)}
        
        for (let i = 0; i < results.length; i++) {
            allSuggestions.push(
                 "ID : "+results[i].id+"----"+ "   Дата : "+results[i].date+"----"+
                 "   Време : "+results[i].time+"----"+"Ден : "+results[i].day+"----"+results[i].userinfo);
        }

    });

 
  return allSuggestions;
};

export default getSuggestions;