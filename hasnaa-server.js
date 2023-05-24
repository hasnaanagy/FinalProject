import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
import subjectrouter from "./routes/subjects.js";


mongoose.connect(process.env.DBURL)
const app=express();
app.use(express.urlencoded({extended:true}))
//hasnaa
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/subjects',subjectrouter)



app.listen(process.env.port,()=>{
    console.log('started the application on http://localhost:'+process.env.port)
})