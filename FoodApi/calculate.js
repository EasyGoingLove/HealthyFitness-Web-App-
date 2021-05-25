export default class Calculate {
  constructor(nutritionData,foodAmountInput,searchedFoodResults) {
    this.nutritionData = nutritionData;
    this.foodAmountInput = foodAmountInput;
    this.searchedFoodResults = []
  }
  async makeCalculations() {
    
    await this.nutritionData.extractData();

     for (let i = 0; i < this.nutritionData.foodName.length; i++) {
        let newArray = new Array();
        let percentageDifference = this.foodAmountInput / 100;
        newArray = [
          this.nutritionData.foodName[i] , (this.nutritionData.protein[i]*percentageDifference).toFixed(2),
          (this.nutritionData.energy[i]*percentageDifference).toFixed(2), (this.nutritionData.fat[i]*percentageDifference).toFixed(2),
          (this.nutritionData.sugars[i]*percentageDifference).toFixed(2), (this.nutritionData.carbohydrate[i]*percentageDifference).toFixed(2),
          (this.nutritionData.calllories[i]*percentageDifference).toFixed(2)
           ]; // just example values
           this.searchedFoodResults.push(newArray);      
     }
     return this.searchedFoodResults;
  }
}