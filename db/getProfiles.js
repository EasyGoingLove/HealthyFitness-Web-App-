import db from '../db/db.js';

const profile_getter = async() => {
    let profiles = {
        main_information:[],
        secondary_information:[]
    }
   
    db.query('SELECT * FROM basicusers', await function(error,results) {
        if(error){console.log(error)}
        
        for (let i = 0; i < results.length; i++) {
            profiles.main_information.push(
                results[i].id, results[i].plan, 
                results[i].name, results[i].email,
                results[i].dataOfBirth, results[i].proffesion,
                results[i].phoneNum
            );
            profiles.secondary_information.push(
                results[i].iskamDa, results[i].alsoTo, 
                results[i].skalaMotiviran, results[i].opitHranRejim,
                results[i].kakuwHranRejim, results[i].alergiiHran,
                results[i].udobniDni,results[i].udobnoVreme,
                results[i].kolkoSportuwate, results[i].kolkoDniSportuwate, 
                results[i].priemaneDobawki, results[i].chasaSunImate,
                results[i].opishiEjednevie, results[i].procentaMaznina,
                results[i].kilogrami,results[i].visochina,
                results[i].taliq, results[i].ruce,
                results[i].bedro, results[i].gurda,
                results[i].hansh,results[i].naranqvaniqBolki,
                results[i].imaliOperacii, results[i].imaliBolesti
            );
            
        }
      
    });
   return profiles;
};
export default profile_getter;