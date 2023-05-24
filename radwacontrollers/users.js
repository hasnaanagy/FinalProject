import user from '../models/user.js';
import bcrypt from 'bcrypt';
export const registerForm=(req,res)=>{
    res.render('data/register');
}

export const register=async(req,res)=>{
    const {email,password,academicNumber}= req.body;
    console.log(email,password,academicNumber);
    const salt= bcrypt.genSaltSync(10);
    const encryptedPassword=bcrypt.hashSync(password,salt);
   await user.create({email,password: encryptedPassword});
  // console.log(email,password);
    res.redirect('/login');
};

export const loginForm=(req,res)=>{
    res.render('data/login');
};

export const profileStu=(req,res)=>{
    res.render('data/profile');
};
export const login=async(req,res)=>{
    const { email,password,academicNumber }=req.body;
    const loggedUser= await user.findOne({email});
    const isCorrectPassword =bcrypt.compareSync( password,loggedUser.password);
    if (! isCorrectPassword){
        return res.send('Incorrect');
    }
    console.log({email,password,encryptedPassword:loggedUser.password,isCorrectPassword,academicNumber});
    res.redirect('/profile');
 };
