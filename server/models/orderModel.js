import mongoose from 'mongoose'

const orderScheme = new mongoose.Schema({
    products:[
        {
            type:mongoose.ObjectId,
            ref:"Plans",
        },
    ],
    payment:{},
    buyer:{
        type:mongoose.ObjectId,
        ref:'users'
    },
    status:{
        type:String,
        default:"Not Processed"
    }
},{timestamps:true})
export default mongoose.model("Order", orderScheme)