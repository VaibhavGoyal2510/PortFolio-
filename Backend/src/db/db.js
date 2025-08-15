import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


export const dbConnect = async () => {
    console.log(process.env.MONGO_URL)
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    
        
        console.log(`DB Connected meri jaaan, DB: ${connection.connection.host}`)
        // console.log(first)
    } catch (error) {
         console.log(`MongoDb Connection Failed `,error)
        process.exit(1) 
    }
    
}