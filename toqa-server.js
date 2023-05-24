import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
import studentsrouter from "./routes/students.js";
import authrouter from "./routes/auth.js";
mongoose.connect(process.env.DBURL)
const app=express();
app.use(express.urlencoded({extended:true}))
//hasnaa
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/students',studentsrouter)

//toqa
app.get('/student2' , async (req , res )=> {
    const subjects = await subjectsModel.find().lean();
    console.log(subjects);
    res.render('student2/student2' , {subjects});

});

app.use('/login',authrouter )

app.listen(process.env.port,()=>{
    console.log('started the application on http://localhost:'+process.env.port)
})