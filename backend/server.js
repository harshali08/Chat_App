const dotenv=require('dotenv')
dotenv.config();
// const bodyParser = require('body-parser');


const express=require('express');
const app=express()
// app.use(bodyParser.json());

const {chats}=require('./data/data');
const connectDB=require('./config/db');
app.use(express.json());

const userRouter=require('./routes/userRouter')
app.use('/api/user',userRouter)



const PORT=process.env.PORT || 5000
connectDB();

// console.log(chats)
app.get('/',(req,resp)=>{
    resp.send("hello")
})

app.get('/api/chat',(req,resp)=>{
    resp.send(chats)
   
})

app.get('/api/chat/:id',(req,resp)=>{
    console.log(req.params.id)
    const singleChats=chats.find(c=>c._id===req.params.id)
    resp.send(singleChats)
})

app.listen(PORT,()=>{
    console.log(PORT)
})