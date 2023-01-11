import React, { useContext } from 'react'
import "./style.scss"
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { AuthContext } from './Redux/AuthContext'


const App = () => {
    const {currentUser} = useContext(AuthContext)

  
  return (

  <BrowserRouter>
    <Routes>
       <Route path='/'>
        <Route index element={currentUser ? <Home/>: <Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
       </Route>
      </Routes>
  </BrowserRouter>

 
  )
}

export default App