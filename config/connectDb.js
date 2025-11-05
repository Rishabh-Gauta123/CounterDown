import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connect successfully ");
        
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDb;