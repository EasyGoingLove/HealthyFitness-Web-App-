import db from './db.js';

const calculatedDateResults = async(date,userID)=>{
    let totals ={
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        calllories:0,
        goal: 0,
        difference:0
    };


    db.query('SELECT * FROM breakfast', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;

        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].breakfast);
    
           if(results[i].uid == userID && parsedResult.date ===date){
               totals.protein += parseInt(parsedResult.protein);
               totals.fat += parseInt(parsedResult.fat);
               totals.carbohydrate += parseInt(parsedResult.carbohydrate);
               totals.calllories += parseInt(parsedResult.calllories);
               
           }
        }  
    });
    db.query('SELECT * FROM lunch', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;

        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].lunch);
    
           if(results[i].uid == userID && parsedResult.date ===date){
               totals.protein += parseInt(parsedResult.protein);
               totals.fat += parseInt(parsedResult.fat);
               totals.carbohydrate += parseInt(parsedResult.carbohydrate);
               totals.calllories += parseInt(parsedResult.calllories);
               
           }
        }  
    });
    db.query('SELECT * FROM dinner', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;

        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].dinner);
    
           if(results[i].uid == userID && parsedResult.date ===date){
               totals.protein += parseInt(parsedResult.protein);
               totals.fat += parseInt(parsedResult.fat);
               totals.carbohydrate += parseInt(parsedResult.carbohydrate);
               totals.calllories += parseInt(parsedResult.calllories);
               
           }
        }  
    });
    db.query('SELECT * FROM snacks', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;

        for (let i = 0; i < results.length; i++) {
            parsedResult = JSON.parse(results[i].snacks);
    
           if(results[i].uid == userID && parsedResult.date ===date){
               totals.protein += parseInt(parsedResult.protein);
               totals.fat += parseInt(parsedResult.fat);
               totals.carbohydrate += parseInt(parsedResult.carbohydrate);
               totals.calllories += parseInt(parsedResult.calllories);
               
           }
        }  
    });
    db.query('SELECT * FROM celnapotrbitelq', await function(error,results) {
        if(error){console.log(error)}
        for (let i = 0; i < results.length; i++) {
           if(results[i].userID == userID){
               totals.goal += parseInt(results[i].cel);
               totals.difference = totals.goal - totals.calllories;
           }
        }  
    });
    
    return totals;
};

export default calculatedDateResults;