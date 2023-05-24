import { Router } from "express";
import departmentModel from "../models/departmentModel.js";
import { all ,createdep, storedep } from "../controllers/departmentcontroller.js";
const departmentrouter=new Router();


departmentrouter.get('/',all)
departmentrouter.get('/create',createdep)
departmentrouter.post('/',storedep)

departmentrouter.get('/createdepartment',async(req,res)=>{
   await departmentModel.create({
        name:'computer science',
        code:'CS'
    })
    departmentModel.create({
        name:'information systems',
        code:'IS'
    })
    departmentModel.create({
        name:'information technology',
        code:'IT'
    })
    res.send('added')
})
export default departmentrouter