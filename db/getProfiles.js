import db from '../db/db.js';

const profile_getter = async() => {
    let profiles = {
        all_registered_users:[],
    }
   
    db.query('SELECT * FROM basicusers', await function(error,results) {
        if(error){console.log(error)}
        for (let i = 0; i < results.length; i++) {
            profiles.all_registered_users.push("🌞","ID:",
                results[i].id," ","Name:",results[i].name," ", "Email",results[i].email,
                "🌝"
            );    
        }
      
    });
    // db.query('SELECT * FROM celnapotrbitelq', await function(error,results) {
    //     if(error){console.log(error)}
        
    //     for (let i = 0; i < results.length; i++) {
    //        profiles.all_registered_users.push("🌞","ID",
    //         results[i].userID," ","Goal" ,results[i].cel ,"🌝"
    //        );
            
    //     }
      
    // });
   
    
   return profiles;
};
export default profile_getter;

function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elements);
}