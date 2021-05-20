import express from 'express';
import isLoggedIn from '../controllers/authPrivete.js';

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

  //fetch data from client side for the dashboard Option
    router.post('/dashboard', (req, res) =>{
        const  options = {
            news: req.body.net[0],
            profile: req.body.net[1],
            calculator: req.body.net[2],
            calendar: req.body.net[3]
        };  
        currentOpt = options;
        console.log(options );
        
    });

 

export default router;

// Extra functionality
let currentOpt = { 
    news: false,
    profile: true,
    calculator: false,
    calendar: false
};

const  convert = (str) => {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

