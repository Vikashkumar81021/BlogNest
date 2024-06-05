const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
    const connectionInstance =await mongoose.connect(`${process.env.MongoURL}`)
      console.log(`MongoDB connected !! DB HOST :${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("dataBase connection failed");
       process.exit(1)
    }
}

module.exports=connectDB