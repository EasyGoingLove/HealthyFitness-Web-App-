import db from './db.js';

const getUsersFood = async(userID)=>{
    let meals ={
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks:[]
    };
    const br = [1,2,3];
 //   console.log(userID);
   const currentDay = new Date().toLocaleDateString();

    db.query('SELECT * FROM breakfast', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;
        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].breakfast);
           if(results[i].uid === userID && parsedResult.date ===currentDay){
            meals.breakfast.push(
                parsedResult.foodName,parsedResult.protein
                ,parsedResult.fat,parsedResult.carbohydrate,
                parsedResult.calllories
                );
           }
        }  
    });
    db.query('SELECT * FROM lunch', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;
        for (let i = 0; i < results.length; i++) {
           parsedResult = JSON.parse(results[i].lunch);
           if(results[i].uid ===userID && parsedResult.date ===currentDay){
            meals.lunch.push(
                parsedResult.foodName,parsedResult.protein
                ,parsedResult.fat,parsedResult.carbohydrate,
                parsedResult.calllories
                )
           }  
        }
    });
    db.query('SELECT * FROM dinner', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;
        for (let i = 0; i < results.length; i++) {
           parsedResult = JSON.parse(results[i].dinner);
           if(results[i].uid ===userID && parsedResult.date ===currentDay){
            meals.dinner.push(
                parsedResult.foodName,parsedResult.protein
                ,parsedResult.fat,parsedResult.carbohydrate,
                parsedResult.calllories
                )
           }
            
        }
    });
    db.query('SELECT * FROM snacks', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;
        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].snacks);
           if(results[i].uid ===userID && parsedResult.date ===currentDay){
            meals.snacks.push(
                parsedResult.foodName,parsedResult.protein
                ,parsedResult.fat,parsedResult.carbohydrate,
                parsedResult.calllories
                )
           }
            
        }
    });
    return meals;
};

export default getUsersFood;