import Api from './api.js';
import NutritionData from './nutritionData.js';
import Calculate from './calculate.js';
// import Display from './display.js';

const foodNameInput = document.getElementById("foodName");
const foodAmountInput = document.getElementById("foodAmount");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
         (async ()=>{
            const api =  new Api(foodNameInput);
            const nutritionData =  new NutritionData(api);
            const calculate = new Calculate(nutritionData,foodAmountInput);
            // const display = new Display(calculate);
            await nutritionData.extractData();
            calculate.makeCalculations();
            // display.displayResults();
         })();
});