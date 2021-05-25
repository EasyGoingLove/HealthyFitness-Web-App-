import fetch from 'node-fetch';
export default class Api {
  constructor(foodNameInput){
    this.foodNameInput = foodNameInput;
  }
    async getFoodData() {
        const apiKey = "fR7m9lWXve8QChnxtXc9fVxzlcdeicZOGO88NWiP";
        // const foodName = "moussaka";
        let url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key='+apiKey+'&query='+this.foodNameInput;
     try {
         const response = await  fetch(url);
         const data = await response.json();
         
           const foods =  data.foods;
           const foodResults = [];

           for (const result of foods) {
            const foodResponse = result;
            const food = foodResponse;
            foodResults.push(food);
          }
          return foodResults;
         
     } catch (error) {
       console.log(error);
     }
   }
 }
