import db from '../db/db.js';

const importSerachedFood = async(req,res,next) => {
    const foodData =  req.body.pickedFood;
    const postcodePrefix =foodData.split(",");
    const letters = /^[A-Za-z]+$/;

    const arrangedFood = {
        foodName: '',
        protein: 0,
        energy: 0,
        fat: 0,
        sugars: 0,
        carbohydrate: 0,
        calllories: 0
    };
 
    for (let i = 0; i < postcodePrefix.length; i++) {
    
        if(postcodePrefix[i].match(letters) ||/\s/.test(postcodePrefix[i]))
        {
            arrangedFood.foodName = arrangedFood.foodName.concat(postcodePrefix[i]);
        }
    else
        {
            arrangedFood.protein = postcodePrefix[i];
            arrangedFood.energy = postcodePrefix[i+1];
            arrangedFood.fat = postcodePrefix[i+2];
            arrangedFood.sugars = postcodePrefix[i+3];
            arrangedFood.carbohydrate = postcodePrefix[i+4];
            arrangedFood.calllories = postcodePrefix[i+5]; 
            break;  
        }
    }
    console.log(postcodePrefix);
    console.log(arrangedFood);
    
   
    
    
    
    



        // db.query('INSERT INTO basicusers SET ?', {
        //     email:email , name:name 

        // }, (error,results)=>{
        //     if(error){console.log(error)}
        //     else{console.log("u did it!")}
        // });
};
export default importSerachedFood;