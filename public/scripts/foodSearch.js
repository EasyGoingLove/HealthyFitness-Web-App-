const searchedFoodInf = [];
let id;
const a = "ss";
const foodNameInput = document.getElementById("foodName");
const foodAmountInput = document.getElementById("foodAmount");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(foodNameInput.value && foodAmountInput.value ){
    searchedFoodInf.length = 0;
    searchedFoodInf.push(foodNameInput.value ,foodAmountInput.value,id);
    serchedFood();
    setTimeout(function(){location.href = "/dashboard/foodResults";  }, 1000);
    
    }
    else if (!foodNameInput.value && !foodAmountInput.value){
      alert("Моля попълнете всички полета преди да продължите.");
    }
});

const serchedFood = () =>{
     let body = JSON.stringify({net:searchedFoodInf});
        fetch("/dashboard/seached",
       {method:"post", 
         body:body,
        headers: {
          'Content-Type': 'application/json'
 }});
}
function reply_click(clicked_id)
{
   openForm();
   id =  clicked_id;
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
