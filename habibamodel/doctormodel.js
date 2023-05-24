import { Schema,model } from "mongoose";

//تفاصيل الدكتور في الداتابيز
const doctor= new Schema({
    name:{
        type:String,
        required: true
    },
    id:{
        type:String,
        required: true
    },
    subject:{
        type:Schema.Types.ObjectId,
        required:false,
        ref:'subjectsTable'
      
    },
},{timestamps:true})
export default model('doctormodel',doctor);
