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
          this.nutritionData.foodName[i] , (Math.round(this.nutritionData.protein[i]*percentageDifference)),
          // (Math.round(this.nutritionData.energy[i]*percentageDifference)), 
          (Math.round(this.nutritionData.fat[i]*percentageDifference)),
          // (Math.round(this.nutritionData.sugars[i]*percentageDifference)), 
          (Math.round(this.nutritionData.carbohydrate[i]*percentageDifference)),
          (Math.round(this.nutritionData.calllories[i]*percentageDifference))
           ]; // just example values
           this.searchedFoodResults.push(newArray);      
     }
     return this.searchedFoodResults;
  }
}