import express from 'express';
import isLoggedIn from '../controllers/authPrivete.js';
import test from '../FoodApi/app.js';
import searchedFood from '../controllers/authSearchedFood.js';
import accesFoods from '../db/accesFoods.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
})
router.get('/login',isLoggedIn,(req,res)=>{
    if (req.user) {
        res.redirect('/dashboard');
    }else{  
        res.render('login');;
    }
})

router.get('/register',isLoggedIn,(req,res)=>{
    if (req.user) {
        res.redirect('/dashboard');
    }else{  
        res.render('register');
    }
})

router.get('/dashboard', isLoggedIn , async(req,res)=>{
    if (req.user) {
       const test =  await accesFoods(req.user.id);
       console.log(test);
      
        const date = convert(req.user.dataOfBirth);
        // searchResults.length = 0;
        //     console.log(timeOfday);
        //  console.log(searchResults);
        res.render('dashboard',{
            user: req.user,
            date: date ,
            news: currentOpt.news,
            profile: currentOpt.profile,
            calculator: currentOpt.calculator,
            calendar: currentOpt.calendar,
            active: 'active'
               
        });
        
    }else{
        res.redirect('/login')
    }
})  

router.get('/dashboard/submit',isLoggedIn,(req,res)=>{
     
 });

 router.get('/dashboard/foodResults',isLoggedIn,(req,res)=>{
    if (req.user) {
        res.render('foodResults',{
            searchedFood: searchResults,
            timeOfday: timeOfday ,
            userId: req.user.id  
        });
    }else{
        res.redirect('/login');
    }
    
});







//Client side Fetching 

  //fetch data from client side for the dashboard Option
    router.post('/dashboard', (req, res) =>{
        const  options = {
            news: req.body.net[0],
            profile: req.body.net[1],
            calculator: req.body.net[2],
            calendar: req.body.net[3]
        };  
        currentOpt = options; 
    });
// fetch date for the foodname and amount 
    router.post('/dashboard/seached', async(req, res) =>{
        
      timeOfday = req.body.net[2];
    //   console.log(timeOfday);
      searchResults =  await test(req.body.net[0],req.body.net[1]);
      
       
    });

// Extra functionality
let currentOpt = { 
    news: false,
    profile: true,
    calculator: false,
    calendar: false
};
let searchResults = []
let timeOfday = '';

const  convert = (str) => {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

export default router;
