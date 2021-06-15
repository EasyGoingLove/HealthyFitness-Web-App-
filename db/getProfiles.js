import db from '../db/db.js';



const profile_getter = async() => {
    let profiles = {
        all_registered_users:[],
        goal_id:[],
        goal:[]
    }
    db.query('SELECT * FROM celnapotrbitelq',function(error,results) {
            if(error){console.log(error)}
            
            for (let i = 0; i < results.length; i++) {
                profiles.goal_id.push(results[i].userID);
                profiles.goal.push(results[i].cel);
            }
        });
    
    db.query('SELECT * FROM basicusers', await function(error,results) {
        let cel;
        if(error){console.log(error)}
        for (let i = 0; i < results.length; i++) {
            for (let j = 0; j < profiles.goal_id.length; j++) {
                if(profiles.goal_id[j]== results[i].id){
                   cel = profiles.goal[j];
                   break;
                }else{cel="Няма посочена Цел"}
                
            }
            profiles.all_registered_users.push("🌞","ID:",
                results[i].id," ","Name:",results[i].name," ", "Email",
                results[i].email," ","Goal:",cel,
                "🌝"
            );    
        }
      
    });

    return profiles;
    
};
export default profile_getter;
