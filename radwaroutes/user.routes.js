import {Router} from 'express';
import {loginForm, register, registerForm ,login ,profileStu} from '../controllers/users.js';
const router=new Router();



 //sign up 
 router.get('/register',registerForm);
 router.post('/register',register);

  //login
 router.get('/login',loginForm);
 router.post('/login',login);
 router.get('/profile',profileStu);

 
 export default router; 