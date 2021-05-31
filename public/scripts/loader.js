
const get_miniCalendar_foods = {
    protein: document.getElementById('protein').value,
    fat: document.getElementById('fat').value  ,
    carbohydrate:  document.getElementById('carbohydrate').value ,
    calllories:  document.getElementById('calllories').value  ,
    goal:   document.getElementById('goal').value  ,
    difference:   document.getElementById('difference').value 
}

console.log(get_miniCalendar_foods);

const serchedFood = () =>{
    let body = JSON.stringify({net:get_miniCalendar_foods});
       fetch("/dashboard/miniCalc",
      {method:"post", 
        body:body,
       headers: {
         'Content-Type': 'application/json'
       }});
}

setTimeout(function(){ 
    serchedFood();
}, 100);

setTimeout(function(){ 
  location.href = "/dashboard";
}, 2000);