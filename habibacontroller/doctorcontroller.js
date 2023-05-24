import doctormodel from "../models/doctormodel.js";
import subjectsModel from "../models/subjectsModel.js";

//return from database
export const index=async (req,res)=>{
    const doctorroute =await doctormodel.find({},{name:1}).lean();
    console.log(doctorroute);
     res.render('doctorview/index',{doctorroute});
 }


 export const create =async (req,res)=>{
    const doctorroute = await doctormodel.find().lean();
    console.log(doctorroute);
     res.render('doctorview/create',{doctorroute});
 }

 export const store=async (req,res)=>{
    const {name,id ,subject} =req.body;
   await doctormodel.create({
        name,
        id,
        subject,

    })
    res.redirect('/doctorroute');

   

 }

export const show=async (req,res)=>{
    const {_id}=req.params;
    
   const model= await doctormodel.findById(_id).populate('subject').lean();
 
   console.log(model);
   
   res.render('doctorview/show',{ model})

}