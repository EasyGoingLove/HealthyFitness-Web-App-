import express from 'express';
import authController from '../controllers/auth.js';
import authControllerLogin from '../controllers/authLog.js';
import authControllerDashboard from '../controllers/authPrivete.js';
import authControllerLogOut from '../controllers/authLogOut.js';
import authSearchedFood from '../controllers/authSearchedFood.js';



const router = express.Router();

router.post('/register', authController);

router.post('/login', authControllerLogin);

router.post('/dashboard', authControllerDashboard);

router.post('/dashboard/submit', authSearchedFood);

router.get('/logout',authControllerLogOut);

export default router;