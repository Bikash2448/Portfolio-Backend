import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { route } from "./router/user.router.js";
import mongoose from "mongoose";
const app = express();

dotenv.config({path:"./.env"})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(route)

async function connectDb(){
    try {
        const conn = await mongoose.connect(process.env.MOGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error connect db: ${error.message}`);
        process.exit(1);
    }
}

app.listen(process.env.PORT,()=>{
    connectDb()
    console.log("server Start",process.env.PORT)
})