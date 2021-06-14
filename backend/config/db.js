import mongoose from 'mongoose'

const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI , {
            useFindAndModify : true,
            useNewUrlParser : true , 
            useCreateIndex : true,
            useUnifiedTopology: true
        })

        console.log(`MongoDb Connected : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error : ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDb