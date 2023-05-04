import React from 'react'
import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ChatsPage from './components/ChatsPage'
import SignUp from './components/SignUp'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Home/>}></Route>
        <Route path='/chats' element={<ChatsPage/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default App
