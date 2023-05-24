import user from '../models/user.js';



//export const registerForm =  (req , res)=> {
  //  res.render('authentication/register')
//}


//export const loginForm =  (req , res)=> {
  //  res.render('authentication/register')
//}

export const login = async (req , res)=> {
    const logininfo=await user.find().lean()
    res.render('authentication/login',{logininfo})
    //console.log (username , password);
    
   
};