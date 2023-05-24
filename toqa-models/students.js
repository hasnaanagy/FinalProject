import { Schema,model } from "mongoose";
const students= new Schema({
    name:{
        type:String,
        required:true,
    },
    academiccode:{
        type:String,
        required:false,
    },
})

export default model('studentsTable',students)