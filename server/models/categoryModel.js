import mongoose from 'mongoose'

const categoryScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
})
export default mongoose.model("Category", categoryScheme)