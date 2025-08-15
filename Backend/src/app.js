import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"
import contactRoute from './routes/contact.js';
import projectRoute from './routes/project.js';

const app = express()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/contact', contactRoute);
app.use('/api/projects', projectRoute);

export {app}