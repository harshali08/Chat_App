import React, { useEffect,useState } from 'react'
import axios from 'axios'

const ChatsPage= () => {
  const[chats,setChats]=useState([])
  const fetchData=async()=>{
      const data=await axios.get('/api/chat');
      console.log(data.data)
      setChats(data.data)
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>{chats.map((chat)=>{
     return( <div key={chat._id}>{chat.chatName}</div>)
    })}</div>
  )
}

export default ChatsPage