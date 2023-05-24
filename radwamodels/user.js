
import mongoose, { Schema,model } from 'mongoose';

const user=new Schema({
    email:{ 
        type: String,
        required: true,
     },
     password:{
        type: String,
        required: true,
     },
     academicNumber:{
      type: String,
      required: false,
   },
    
}
,{timeStamps:true});
  export default model('user',user);

  