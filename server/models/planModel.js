import mongoose from 'mongoose'

const planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Category',
        required:true
    },
    description:{
        type:String,
        required:true,
       
    },
    price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    sampleimage:{
        data:Buffer,
        contentType:String
    }
},
{timestamps:true})
export default mongoose.model("Plans", planSchema)