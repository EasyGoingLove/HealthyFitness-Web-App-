import express from 'express';
import isLoggedIn from '../controllers/authPrivete.js';
import api from '../FoodApi/app.js';
import accesFoods from '../db/accesFoods.js';
import adminCheck from '../controllers/adminCheck.js';
import news_getter from '../db/getNews.js';
import profile_getter from '../db/getProfiles.js';
import adminGrafik from '../db/adminGrafik.js';
import getSuggestions from '../db/getSuggestions.js';


const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
});
router.get('/aboutUs',(req,res)=>{
    res.render('aboutUs');
});
router.get('/contacts',(req,res)=>{
    res.render('contacts');
});
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
});
router.get('/6537009498sDAE09498' ,adminCheck, async(req,res)=>{
    if (req.user) {
        res.redirect('/adminboard');
    }else{  
        res.render('adminLogin');
    }
    
});
router.get('/adminboard' ,adminCheck, async(req,res)=>{
    let profiles_fromDb  = await profile_getter();
    let day_grafik = await adminGrafik();
    let suggestions = await getSuggestions();
    if (req.user) {
        
        setTimeout(function(){ 
            res.render('adminboard', {
            upload_news:adminOpt.admin_news,
            profiles:adminOpt.admin_profiles,
            admin_calendar: adminOpt.admin_calendar,
            active: 'active',
            profilesDisplay:profiles_fromDb.all_registered_users,
            goalDisplay:profiles_fromDb.all_users_with_goals,
            monday:day_grafik.monday,
            tuesday:day_grafik.tuesday,
            wednesday:day_grafik.wednesday,
            thursday:day_grafik.thursday,
            friday:day_grafik.friday,
            saturday:day_grafik.saturday,
            sunday:day_grafik.sunday,
            suggest:suggestions

        });
    }, 100);
    }else{  
        res.render('adminLogin');
    } 
});

router.get('/profileLook',adminCheck, async(req,res)=>{
    if (req.user) {
     res.redirect('/profileLook')
    }else{  
        res.render('adminLogin');
    } 

});


router.get('/loader',isLoggedIn,(req,res)=>{
    res.redirect('/dashboard'); 
});

router.get('/dashboard', isLoggedIn , async(req,res)=>{
    if (req.user) {
       let dailyFood =  await accesFoods(req.user.id);
        let news =  await news_getter();
        let day_grafik = await adminGrafik();

        const date = convert(req.user.dataOfBirth);
       
        setTimeout(function(){ 
        let miniCalendar = {};
        if(usingThe_miniCalendar(miniCalc)){
            miniCalendar = miniCalc;
            miniCalc = {
                protein: 0,
                fat: 0,
                carbohydrate: 0,
                calllories: 0,
                goal:0,
                difference:0
            }
        }else{
            miniCalendar = {
                protein: dailyFood.protein,
                fat: dailyFood.fat,
                carbohydrate: dailyFood.carbohydrate,
                calllories: dailyFood.calllories,
                goal:dailyFood.goal,
                difference:dailyFood.difference

            }
        }
        res.render('dashboard',{
            user: req.user,
            date: date ,
            news: currentOpt.news,
            profile: currentOpt.profile,
            calculator: currentOpt.calculator,
            calendar: currentOpt.calendar,
            active: 'active',
            breakfast: dailyFood.breakfast,
            lunch: dailyFood.lunch,
            dinner: dailyFood.dinner,
            snacks: dailyFood.snacks,
            protein: miniCalendar.protein,
            fat: miniCalendar.fat,
            carbohydrate: miniCalendar.carbohydrate,
            calllories: miniCalendar.calllories,
            goal:miniCalendar.goal,
            difference:miniCalendar.difference,
            newsData:news,
            monday:day_grafik.user_monday,
            tuesday:day_grafik.user_tuesday,
            wednesday:day_grafik.user_wednesday,
            thursday:day_grafik.user_thursday,
            friday:day_grafik.user_friday,
            saturday:day_grafik.user_saturday,
            sunday:day_grafik.user_sunday



        });
    }, 100);
    }else{
        res.redirect('/login')
    }
})  

// router.get('/dashboard/submit',isLoggedIn,(req,res)=>{
     
//  });

 router.get('/dashboard/foodResults',isLoggedIn,(req,res)=>{
    if (req.user) {
        setTimeout(function(){ 
        res.render('foodResults',{
            searchedFood: searchResults,
            timeOfday: timeOfday,
            userId: req.user.id  
        }); }, 100);
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
    router.post('/adminboard', (req, res) =>{
        const  options = {
            admin_news: req.body.net[0],
            admin_profiles: req.body.net[1],
            admin_calendar: req.body.net[2],
            
        };  
        adminOpt = options ;
    });
// fetch date for the foodname and amount 
    router.post('/dashboard/seached', async(req, res) =>{
      timeOfday = req.body.net[2];
    //   console.log(timeOfday);
      searchResults =  await api(req.body.net[0],req.body.net[1]);
    });
// Fetch miniCalendar data
router.post('/dashboard/miniCalc', async(req, res) =>{
    miniCalc.protein +=  parseInt(req.body.net.protein);
    miniCalc.fat += parseInt(req.body.net.fat);
    miniCalc.carbohydrate += parseInt(req.body.net.carbohydrate);
    miniCalc.calllories += parseInt(req.body.net.calllories);
    miniCalc.goal = parseInt(req.body.net.goal);
    miniCalc.difference = parseInt(req.body.net.difference);
 
});


// Extra functionality
let currentOpt = { 
    news: false,
    profile: false,
    calculator: true,
    calendar: false
};
let adminOpt = { 
    admin_news: true,
    admin_profiles: false,
    admin_calendar: false,
};
let miniCalc = {
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    calllories: 0,
    goal:0,
    difference:0
}
let searchResults = []
let timeOfday = '';

const  convert = (str) => {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
 const usingThe_miniCalendar = (searchedFoodBydaye)=>{
    // console.log(searchedFoodBydaye);
   if (searchedFoodBydaye.protein=== 0&&searchedFoodBydaye.fat === 0&&searchedFoodBydaye.carbohydrate ===0) {
       return false;
   }else{return true};

 } 

export default router;
