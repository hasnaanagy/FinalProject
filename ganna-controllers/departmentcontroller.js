import departmentModel from "../models/departmentModel.js"


export const all = async (req,res)=>{
    const departmentsnames=await departmentModel.find().lean()
    res.render('departments/all',{departmentsnames})
    
}

export const createdep = async (req,res)=>{
    const departments= await departmentModel.find().lean()
    res.render('departments/create',{departments})
}

export const storedep = async (req,res)=>{
    const {name ,code}=req.body
    await departmentModel.create({
        name,
        code,
        
    })
    res.redirect('/departments')
   
}