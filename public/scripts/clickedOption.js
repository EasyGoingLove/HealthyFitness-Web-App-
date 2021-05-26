  let current = 1;
  const options = [false,true,false,false];
  const header = document.querySelector(".sidebar");
  const btns = header.getElementsByClassName("rar");
  
    for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    current = i;
    options.length = 0;
    clicked();
    currentOpt();
    window.location.reload(false);
    });
  }

  const clicked = () => {
    for (let i = 0; i < btns.length; i++){
      if(i === current){
        options.push(true);
      }else{options.push(false);}
    }
  }

  const currentOpt = () =>{
  let body = JSON.stringify({net:options});
  fetch("/dashboard",
  {method:"post", 
   body:body,
   headers: {
     'Content-Type': 'application/json'
   }});
  }
