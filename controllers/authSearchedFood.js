import db from '../db/db.js';

const importSerachedFood = async(req,res,next) => {
    console.log(req.body);
    const foodData =  await req.body.pickedFood;
    const postcodePrefix = foodData.split(",");
    const letters = /^[A-Za-z]+$/;

    const arrangedFood = {
        date: new Date().toLocaleDateString(),
        foodName: '',
        protein: 0,
        energy: 0,
        fat: 0,
        sugars: 0,
        carbohydrate: 0,
        calllories: 0
    };
    const timeOfday = req.body.timeOfday;
    
 
    for (let i = 0; i < postcodePrefix.length; i++) {
        if(postcodePrefix[i].match(letters) ||/\s/.test(postcodePrefix[i])){
            arrangedFood.foodName = arrangedFood.foodName.concat(postcodePrefix[i]);
        }
    else {
            arrangedFood.protein = postcodePrefix[i];
            arrangedFood.energy = postcodePrefix[i+1];
            arrangedFood.fat = postcodePrefix[i+2];
            arrangedFood.sugars = postcodePrefix[i+3];
            arrangedFood.carbohydrate = postcodePrefix[i+4];
            arrangedFood.calllories = postcodePrefix[i+5]; 
            break;  
        }
    }
    console.log(arrangedFood);
    res.redirect('/dashboard');
    
         if(timeOfday === 'breakfast'){
            db.query('INSERT INTO basicusers SET ?', {
                breakfast:foodData 
            }, (error,results)=>{
                if(error){console.log(error)}
                else{console.log("u did it!")}
            });
          }
         if (timeOfday === 'lunch'){
            db.query('INSERT INTO basicusers SET ?', {
                lunch:foodData 
            }, (error,results)=>{
                if(error){console.log(error)}
                else{console.log("u did it!")}
            });
         } 
         if (timeOfday === 'dinner'){
            db.query('INSERT INTO basicusers SET ?', {
                dinner:foodData 
            }, (error,results)=>{
                if(error){console.log(error)}
                else{console.log("u did it!")}
            });
        } 
        if (timeOfday === 'snacks'){
            db.query('INSERT INTO basicusers SET ?', {
                snacks:foodData 
            }, (error,results)=>{
                if(error){console.log(error)}
                else{console.log("u did it!")}
            });
        } 
};
export default importSerachedFood;

//breakfast
//lunch
//dinner
//snacks