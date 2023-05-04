const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config({ path: './config/config.env' });
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://testuser:BRXsWpgpQCKjX8hq@cluster1.y75kww8.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true,
         useUnifiedTopology:true,
        //  useFindAndModify:true
        });
        console.log(`Mongoose Connected:${conn.connection.host}`)
    }
    catch(e){
        console.log(e.message.red)
        process.exit()
    }
}

module.exports=connectDB
