const express=require('express')
const app=express()
require('dotenv').config()
const port=process.env.PORT || 8080
const route=require('./router/router')
const connectDB=require('./db/db')
app.use(express.json())
app.use(route)

connectDB()
app.listen(port ,()=>{
    console.log(`server is listen to ${port}`)
})