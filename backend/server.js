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
    origin: 'process.env.FRONTEND_URL'
}))
app.use(express.json())

app.use('/jobs', jobRoutes)
app.use('/users', userRoutes)

app.get('/', async (req, res) => {
    console.log(req)
    res.json({
        status: 'success', 
        message: 'Server is running'
    })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})

