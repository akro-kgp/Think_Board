import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MGDB CONNECTION SUCCESSFUL");
    } catch (error){
        console.error("Error connecting to MGDB",error);
        process.exit(1)//exit with failure
    }


};
