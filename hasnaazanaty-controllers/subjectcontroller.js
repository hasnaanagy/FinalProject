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