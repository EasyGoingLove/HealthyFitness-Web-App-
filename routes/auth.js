import express from 'express';
import authController from '../controllers/auth.js';
import authControllerLogin from '../controllers/authLog.js';
import authControllerDashboard from '../controllers/authPrivete.js';
import authControllerLogOut from '../controllers/authLogOut.js';
import authSearchedFood from '../controllers/authSearchedFood.js';
import authFoodRes from '../controllers/authFoodRes.js';
import authDate from '../controllers/authDate.js';
import authAdmin from '../controllers/admin.js';
import newsUploader from '../controllers/saveNews.js';
import setGoal from '../controllers/setGoal.js';
import getFullinf from '../db/getFullinfo.js';
import setMeetingDate from'../controllers/setMeetingDate.js';
import suggestedDate from '../controllers/suggestedDate.js';
import deleteSuggestion from '../controllers/deleteSuggestion.js';
import saveMeeting from '../controllers/saveMeeting.js';


const router = express.Router();

router.post('/register', authController);

router.post('/login', authControllerLogin);

router.post('/dashboard', authControllerDashboard);

router.post('/dashboard/submit', authSearchedFood);

router.get('/dashboard/foodResults',authFoodRes);

router.post('/suggestedDate',suggestedDate);

router.post('/saveMeeting',saveMeeting);

router.post('/loader',authDate);

router.post('/6537009498sDAE09498',authAdmin);

router.post('/news',newsUploader);

router.post('/setGoal',setGoal);

router.post('/fullinfoSearch',getFullinf);

router.post('/setMeetingDate',setMeetingDate);

router.post('/deleteSuggestion',deleteSuggestion);



router.get('/logout',authControllerLogOut);

export default router;