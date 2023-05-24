import { Router } from "express";
import subjectsModel from "../models/subjectsModel.js";
import { create, index, show, store ,Edit,update, deleteOne} from "../controllers/subjectcontroller.js";
const subjectrouter=new Router();


subjectrouter.get('/',index)
subjectrouter.get('/create',create)
subjectrouter.post('/',store)
subjectrouter.get('/:id',show)
subjectrouter.get('/:id/edit',Edit)
subjectrouter.put('/:id',update)
subjectrouter.delete('/:id',deleteOne)

subjectrouter.get('/createsubject',async(req,res)=>{
   await subjectsModel.create({
        name:'software2',
        code:'software2-CS'
    })
    subjectsModel.create({
        name:'security',
        code:'security-CS'
    })
    subjectsModel.create({
        name:'math-3',
        code:'math-3-CS'
    })
    res.send('added')
})
export default subjectrouter