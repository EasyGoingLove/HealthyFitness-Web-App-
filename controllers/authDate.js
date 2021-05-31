import calculatedDateResults from '../db/dateSearch.js';
const dateGetter = async (req,res,next) =>{

    const str = req.body.dateCalculator;
    
    let day = str.slice(5,7) +'/';
    if(day.charAt(0) == 0){
       day = day.slice(1,3);
    }
    let month = str.slice(8) +'/';
    if(month.charAt(0) == 0){
        month = month.slice(1,3);
     }
    const year = str.slice(0,4);

    const correctDate = day.concat(month+year);
    const userID = req.body.userID;
    

    const nutrientDisplay = await calculatedDateResults(correctDate,userID);

    setTimeout(function(){ 
    // console.log(nutrientDisplay);  
    
    res.render('loader',{
        protein: nutrientDisplay.protein,
        fat: nutrientDisplay.fat,
        carbohydrate: nutrientDisplay.carbohydrate,
        calllories: nutrientDisplay.calllories,
        goal:nutrientDisplay.goal,
        difference:nutrientDisplay.difference
     

    });
   }, 100);
    return nutrientDisplay;
    
    
    

}
export default dateGetter; 