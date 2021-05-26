import Api from './api.js';
import NutritionData from './nutritionData.js';
import Calculate from './calculate.js';

const app = async (foodNameInput,foodAmountInput)=>{
    
    const api =  new Api(foodNameInput);
    const nutritionData =  new NutritionData(api);
    const calculate = new Calculate(nutritionData,foodAmountInput);

    const finalResults =  await calculate.makeCalculations();
    return finalResults;
 };

 export default app;