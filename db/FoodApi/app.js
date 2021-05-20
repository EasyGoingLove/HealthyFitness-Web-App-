import Api from './api.js';
import NutritionData from './nutritionData.js';
// import Calculate from './calculate.js';
// import Display from './display.js';

(async ()=>{
   const api =  new Api();
   const nutritionData =  new NutritionData(api);

   // const calculate = new Calculate(nutritionData);
   // const display = new Display(calculate);

   await nutritionData.extractData();
   // calculate.makeCalculations();
   // display.displayResults();
})();