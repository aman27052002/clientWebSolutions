require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const  {connectToDb} = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')

const corsOptions ={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/',authRoute)
app.use('/',contactRoute)
app.use('/',serviceRoute)
app.use(errorMiddleware)

const port = process.env.PORT 

connectToDb().then(()=>{
    app.listen(port,()=>console.log(`server in running at port ${port}`))
})



// to get the json data in express app.