
export default class NutritionData {
  constructor(api) {
    this.api = api;
    this.foodName = [];
    this.protein = [];
    this.energy = [];
    this.fat = [];
    this.sugars = [];
    this.carbohydrate = [];
    this.calllories = [];
  }
  async extractData() {
    const fullListData = await this.api.getFoodData();
    console.log(fullListData);
    for (const results of fullListData) {
      this.foodName.push(results.description);
      for (const result in results.foodNutrients){
        if(results.foodNutrients[result].nutrientName === "Protein"){
        this.protein.push(results.foodNutrients[result].nutrientNumber,);
        this.protein.push(results.foodNutrients[result].value);}
        if(results.foodNutrients[result].nutrientName === "Energy"){
        this.energy.push(results.foodNutrients[result].nutrientNumber)
        this.energy.push(results.foodNutrients[result].value);}
        if(results.foodNutrients[result].nutrientName === "Total lipid (fat)"){
        this.fat.push(results.foodNutrients[result].nutrientNumber);
        this.fat.push(results.foodNutrients[result].value);}
        if(results.foodNutrients[result].nutrientName === "Sugars, total including NLEA"){
        this.sugars.push(results.foodNutrients[result].nutrientNumber);
        this.sugars.push(results.foodNutrients[result].value);}
        if(results.foodNutrients[result].nutrientName === "Carbohydrate, by difference"){
        this.carbohydrate.push(results.foodNutrients[result].nutrientNumber);
        this.carbohydrate.push(results.foodNutrients[result].value);
        this.calllories.push(results.foodNutrients[result].nutrientNumber);
        this.calllories.push(results.foodNutrients[result].value*4);}
      }
    }console.log(this.calllories);
  }
}
