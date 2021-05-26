import express from 'express';
import isLoggedIn from '../controllers/authPrivete.js';
import test from '../FoodApi/app.js';
import searchedFood from '../controllers/authSearchedFood.js';

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

router.get('/dashboard', isLoggedIn ,(req,res)=>{
    if (req.user) {
        const date = convert(req.user.dataOfBirth);
        console.log(searchResults);

        res.render('dashboard',{
            user: req.user,
            date: date ,
            news: currentOpt.news,
            profile: currentOpt.profile,
            calculator: currentOpt.calculator,
            calendar: currentOpt.calendar,
            active: 'active',
            searchedFood: searchResults,    
        });
    }else{
        res.redirect('/login')
    }
})

router.get('/dashboard/submit', searchedFood ,(req,res)=>{
    res.redirect('/dashboard')
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
        
        // console.log(req.body.net[2]);
      
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

const  convert = (str) => {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

export default router;
