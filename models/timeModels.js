import mongoose from "mongoose";

const tiemStamp=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    targetDate:{
        type:Date,
        minlength: 2,
        maxlength: 32,
        required:true

    }
},{timestamps:true});

const Timer=mongoose.model("Timer", tiemStamp);
export default Timer;