import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import jobRoutes from './routes/job.route.js';
import userRoutes from './routes/user.route.js';


const PORT = process.env.PORT || 5010

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/jobs', jobRoutes)
app.use('/users', userRoutes)


app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})

