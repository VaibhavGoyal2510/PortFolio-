
import dotenv from 'dotenv'
import cors from "cors"
import { app } from './app.js'
import {dbConnect} from "./db/db.js"
import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../.env') // absolute path
});

const corsOptions = {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
};


app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../Frontend/dist/index.html"));
});

const PORT = process.env.PORT;

// app.options("*", cors(corsOptions));

dbConnect().then(()=>{
    app.listen(PORT || 8000,()=>{
        console.log(`Server Running on ${PORT} `)
    })
})
.catch((err)=>{
    console.log("Mongo Connection Failed",err)
})