import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

import categoryRoutes from './routes/categoryRoutes.js'
import connectDb from './db.js'
import authRoute from './routes/authRoute.js'
import planRoutes from './routes/planRoutes.js'

//config
dotenv.config()

//rest object
const app = express()

//DB connection
connectDb()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/plan',planRoutes)

//rest api
app.get('/',(req,res) => {
    res.send({
        message:'Welcome'
    })
})

//Port
const PORT = process.env.PORT

//run listen
app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT} `)
})
