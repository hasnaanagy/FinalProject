import { Router } from "express";

import { allstudents, createstu, storestu } from "../controllers/studesnts.js";
import students from "../models/students.js";
const studentsrouter=new Router();


studentsrouter.get('/',allstudents)
studentsrouter.get('/createstu',createstu)
studentsrouter.post('/',storestu)



export default studentsrouter