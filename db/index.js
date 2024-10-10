import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`,{
            dbName: "cryptoCurrency"
        })
        console.log(`\n MongoDB connected!!! DB Host: ${connectionInstance.connection.host}`);  
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1)
    }  
}

export default connectDB