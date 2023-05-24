
import students from "../models/students.js"


export const allstudents = async (req,res)=>{
    const studentsnames=await students.find().lean()
    res.render('students/allstu',{studentsnames})
    
}

export const createstu = async (req,res)=>{
    const newstudent= await students.find().lean()
    res.render('students/createstu',{newstudent})
}

export const storestu = async (req,res)=>{
    const {name,academiccode}=req.body
    await students.create({
        name,
        academiccode,
        
    })
    res.redirect('/students')
   
}