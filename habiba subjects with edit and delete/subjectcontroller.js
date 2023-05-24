import { json } from "express";
import departmentModel from "../models/departmentModel.js";
import subjectsModel from "../models/subjectsModel.js";

export const index = async (req,res)=>{
    const subjectsnames=await subjectsModel.find({},{name:1}).lean()
    res.render('subjects/index',{subjectsnames})
}
export const create = async (req,res)=>{
    const departments= await departmentModel.find().lean()
    res.render('subjects/create',{departments})
}
export const store = async (req,res)=>{
    const {name ,code,department,previoussubjects}=req.body
    await subjectsModel.create({
        name,
        code,
        department,
        previoussubjects,
    })
    res.redirect('/subjects')
   
}
export const show= async (req,res)=>{
    const{id}=req.params
    const subname= await subjectsModel.findById(id).populate('department').lean();
    console.log(subname)
    
    res.render('subjects/show',{subname})
}

export const Edit = async (req,res)=>{


    const {id}=req.params
    const editformsubject =await subjectsModel.findById(id).lean();
    const newsubject= await subjectsModel.find().lean()
    res.render('subjects/edit',{newsubject,subjectsModel:editformsubject})

}
export const update = async (req,res)=>{
    const {name ,code,department}=req.body
    const{id}=req.params;
    await subjectsModel.findByIdAndUpdate(id, {$set:{name:name ,code:code,department:department}})
   
    
    res.redirect('/subjects')
};

export const deleteOne =async (req,res)=>{
    const {id}=req.params;
    await subjectsModel.findByIdAndDelete(id);
    return res.redirect('/subjects')
}
