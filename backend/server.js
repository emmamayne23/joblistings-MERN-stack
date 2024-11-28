import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import jobRoutes from './routes/job.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config()

const PORT = process.env.PORT || 5010

const app = express()

app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.FRONTEND_URL 
        : 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.use('/jobs', jobRoutes)
app.use('/users', userRoutes)

app.get('/', async (req, res) => {
    res.json("API is running")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})

