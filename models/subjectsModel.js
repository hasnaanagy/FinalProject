import { Schema,model } from "mongoose";
const subjectschema= new Schema({
    name:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
    previoussubjects:{
        type:String,
        required:false,
    },department:{
      type: Schema.Types.ObjectId,
      required:false,
      ref:'departmentsTable'
    }
},{timestamps:true})

export default model('subjectsTable',subjectschema)