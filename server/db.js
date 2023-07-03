import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.ATLAS_URL)
        console.log(`Connected to Database!!!`)
    } 
    catch(error) {
        console.log(`Error in MongoDb connection ${error}`)
    }
}

export default connectDb