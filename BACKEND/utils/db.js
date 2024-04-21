const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
const connectToDb = async (req,res)=>{
  try {

    await mongoose.connect(URI) 
    console.log('server connected to MongoDB')
    
  } catch (error) {

    console.log('Not connected to MongoDB')
    process.exit(0)
  }
}
module.exports ={connectToDb}