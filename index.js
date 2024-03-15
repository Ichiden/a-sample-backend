import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express()




app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

app.use(cors({
    origin: "https://a-sample-frontend.onrender.com",
    credentials:true
}))

import routes from './routes.js'


app.use('/',routes)


app.post('/create',(req,res,next) => {
    const token = jwt.sign({_id:'sample_id'}, 'asdasdasd', {
        // expiresIn: '30d'
    })
    res.json(token)
})





app.listen(5000,() => {
    console.log(`Server is running at port 5000.`)
})

